import { useEffect } from 'react';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { HorizontalBlurShader } from 'three/examples/jsm/shaders/HorizontalBlurShader.js';
import { VerticalBlurShader } from 'three/examples/jsm/shaders/VerticalBlurShader.js';
import bgTexture from '/assets/textures/bg1.jpg';
import overlapAudioFile from '/assets/sounds/overlap.mp3';
import gameoverAudioFile from '/assets/sounds/game-over.wav';

function App()
{
  useEffect(() =>
  {
    const MAX_TRAVEL = 60;
    const BOX_HEIGHT = 10;
    const LIGHT_WIDTH = 60;
    const LIGHT_DEPTH = 20;
    const LIGHT_HEIGHT = 200;
    const CAMERA_HEIGHT = 60;
    const DEFAULT_SPEED = 60;


    const scene = new THREE.Scene();
    const clock = new THREE.Clock();
    const stack = [];
    const overhangs = [];
    const colorHex = ["#f1c0e8", "#cfbaf0", "#a3c4f3", "#90dbf4", "#8eecf5", "#98f5e1", "#b9fbc0", "#fbf8cc", "#fde4cf", "#ffcfd2"];
    const overlapAudio = new Audio(overlapAudioFile);


    var startBtn = document.createElement("div");
    var gameOverScreen = document.createElement("div");
    var score = document.createElement("div");
    var title = document.createElement("div");
    var currWidth = 50; // initial block width
    var currDepth = 50; // initial block depth
    var dir = "x";  // initial axis of travel
    var posDir = true; // initial direction of travel down the axis
    var playing = true; // game is playing
    var pauseClicks = false;
    var maxScore = 0; // tracks the maximum game score
    var speed = DEFAULT_SPEED; // initial speed of block movement


    // Initialize Cannon JS
    const world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.81, 0)
    });

    const cannonDebugger = new CannonDebugger(scene, world, {
      // color: 0xff0000,
    });


    // Background texture
    const loader = new THREE.TextureLoader();
    loader.load(bgTexture, function (texture)
    {
      scene.background = texture;
    });


    // Orthographic camera
    const aspect = window.innerWidth / window.innerHeight;
    const a = 80;

    const camera = new THREE.OrthographicCamera(-a * aspect, a * aspect, a, -a, -100, 800);
    camera.position.set(50, CAMERA_HEIGHT, 50);
    camera.lookAt(0, 0, 0);


    // Renderer
    const canvas = document.getElementById("stackGame");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);


    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);


    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(LIGHT_WIDTH, LIGHT_HEIGHT, LIGHT_DEPTH);
    directionalLight.castShadow = true;
    scene.add(directionalLight);


    // Blur Effects for End of Game
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const hblur = new ShaderPass(HorizontalBlurShader);
    composer.addPass(hblur);

    const vblur = new ShaderPass(VerticalBlurShader);
    composer.addPass(vblur);


    // Initiliaze the game
    newBlock(0, 0);
    showStartButton();
    showTitle();


    // Mouse and spacebar listeners
    ['keydown', 'click'].forEach(ev =>
    {
      window.addEventListener(ev, function (e)
      {
        if (!pauseClicks)
        {
          (playing && (ev == 'click' || e.keyCode == 32)) ? addBlock() : restartGame();
        }
      })
    });


    // Resizes window based on existing display aspect ratio
    window.addEventListener('resize', () => onWindowResize(), false);


    // Animation loop to update block movement
    function animate(time)
    {
      if (stack.length > 0)
      {
        const topBlock = stack[stack.length - 1];
        const deltaTime = clock.getDelta();
        const currPos = topBlock.layer.position[topBlock.direction];

        if (currPos < MAX_TRAVEL && posDir == true)
        {
          topBlock.layer.position[topBlock.direction] += speed * deltaTime;
          topBlock.cannonJS.position[topBlock.direction] += speed * deltaTime;
        }
        else if (currPos > - MAX_TRAVEL && posDir == false)
        {
          topBlock.layer.position[topBlock.direction] -= speed * deltaTime;
          topBlock.cannonJS.position[topBlock.direction] -= speed * deltaTime;
        }

        if (currPos >= MAX_TRAVEL)
        {
          posDir = false;
        }
        else if (currPos <= - MAX_TRAVEL)
        {
          posDir = true;
        }

        world.fixedStep();
        // cannonDebugger.update();  // uncomment to see cannonJS meshes
        overhangs.forEach((obj) =>
        {
          obj.layer.position.copy(obj.cannonJS.position);
          obj.layer.quaternion.copy(obj.cannonJS.quaternion);
        });

        if(playing)
        {
          renderer.render(scene, camera); // normal render
        }
        else
        {
          composer.render(); // add blur effects for game-over event
        }
      }
    }


    // Determine parameters for the new fixed blocks and overhangs
    function newBlock(x, z, direction)
    {
      if (stack.length > 1)
      {
        const topBlock = stack[stack.length - 1];
        const prevBlock = stack[stack.length - 2];
        const currPos = topBlock.layer.position[topBlock.direction];
        const prevPos = prevBlock.layer.position[topBlock.direction];
        const delta = currPos - prevPos;
        const edge = topBlock.direction == "x" ? topBlock.width : topBlock.depth;
        const overlap = edge - Math.abs(delta);
        const overhangPos = (overlap / 2) * Math.sign(delta);

        if (overlap > 0)
        {
          if (topBlock.direction == "x")
          {
            currWidth = overlap;
            x -= delta / 2;
            const overhang = createBlock(Math.abs(delta), currDepth, topBlock.layer.position.x + overhangPos, (stack.length - 1) * BOX_HEIGHT, topBlock.layer.position.z, true);
            overhang.cannonJS.velocity.x = delta < 0 ? -randomNum(1, 10) : randomNum(1, 10);
            overhang.cannonJS.velocity.y = delta < 0 ? -randomNum(1, 5) : randomNum(1, 5);
            overhangs.push(overhang);
          }
          else
          {
            currDepth = overlap;
            z -= delta / 2;
            const overhang = createBlock(currWidth, Math.abs(delta), topBlock.layer.position.x, (stack.length - 1) * BOX_HEIGHT, topBlock.layer.position.z + overhangPos, true);
            overhang.cannonJS.velocity.z = delta < 0 ? -randomNum(1, 10) : randomNum(1, 10);
            overhang.cannonJS.velocity.y = delta < 0 ? -randomNum(3, 5) : randomNum(3, 5);
            overhangs.push(overhang);
          }

          updateBlocks(overlap, edge, delta, topBlock);
          playAudio();
        }
        else
        {
          pauseClicks = true;
          gameOver(); // game over when the top block doesn't overlap with the previous block
        }
      }
      const y = stack.length * BOX_HEIGHT;
      const block = createBlock(currWidth, currDepth, x, y, z, false);
      block.direction = direction;
      stack.push(block);
    }

    
    // Generate random numbers between min and max
    function randomNum(min, max)
    {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }


    // Update the top block meshes after cut
    function updateBlocks(overlap, edge, delta, topBlock)
    {
      topBlock.width = currWidth;
      topBlock.depth = currDepth;
      topBlock.layer.scale[topBlock.direction] = overlap / edge; // resize block shape after cut
      topBlock.layer.position[topBlock.direction] -= delta / 2;

      // Resize the CannonJS body for existing topblock due to the removed overhang
      const box = new CANNON.Body({
        mass: 0,
        position: new CANNON.Vec3(topBlock.layer.position.x, (stack.length - 1) * BOX_HEIGHT, topBlock.layer.position.z),
        shape: new CANNON.Box(new CANNON.Vec3(currWidth / 2, BOX_HEIGHT / 2, currDepth / 2)),
      })
      world.removeBody(topBlock.cannonJS);
      world.addBody(box);
    }


    // Plays audio when block is added
    function playAudio()
    {
      if (overlapAudio.duration > 0 && !overlapAudio.paused)
      {
        overlapAudio.currentTime = 0;
      }
      overlapAudio.play();
    }


    // Create the threeJS and cannonJS block mesh
    function createBlock(width, depth, x, y, z, isOverhang)
    {
      var height = BOX_HEIGHT;
      var colour = isOverhang ? colorHex[(stack.length - 1) % colorHex.length] : colorHex[stack.length % colorHex.length];
      var mass = (isOverhang ? 5 : 0) * (width * depth) / (50 * 50);

      if (stack.length == 0)
      {
        height = 120;
        x = 0;
        y = -55;
        z = 0;
        colour = "#b3b3ff";
      }

      const geometry = new THREE.BoxGeometry(width, height, depth);
      const material = new THREE.MeshPhongMaterial({ color: colour });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(x, y, z);
      scene.add(mesh);

      const box = new CANNON.Body({
        mass: mass,
        position: new CANNON.Vec3(mesh.position.x, mesh.position.y, mesh.position.z),
        shape: new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2)),
      })

      world.addBody(box);

      return {
        layer: mesh,
        cannonJS: box,
        width,
        depth
      }
    }


    // Place new block in the scene
    function addBlock()
    {
      const topBlock = stack[stack.length - 1];
      hideStartPage();

      if (dir == "x")
      {
        newBlock(-50, topBlock.layer.position.z, dir);
        dir = "z";
      }
      else
      {
        newBlock(topBlock.layer.position.x, -50, dir);
        dir = "x";
      }

      // increase movement speed by 10% every 5 blocks
      speed *= (stack.length % 5 == 0) ? 1.1 : 1;

      repositionCamAndLight();
    }


    // Repositions the camera and light based on the current height of stack
    function repositionCamAndLight()
    {
      camera.position.lerp(new THREE.Vector3(50, stack.length * BOX_HEIGHT + CAMERA_HEIGHT, 50), 0.12);
      directionalLight.position.lerp(new THREE.Vector3(
        stack.length * BOX_HEIGHT + LIGHT_WIDTH,
        stack.length * BOX_HEIGHT + LIGHT_HEIGHT,
        stack.length * BOX_HEIGHT + LIGHT_DEPTH
      ), 0.2);
    }


    // Resets the game
    async function restartGame()
    {
      var i, obj;
      gameOverScreen.innerHTML = "";
      gameOverScreen.style.padding = "0px";

      await sleep(400);

      while (scene.children.length > 2) // keep ambient and directional lights in scene
      {
        i = scene.children.length - 1;
        obj = scene.children[i];
        scene.remove(obj);

        if (stack.length > 0)
        {
          stack.pop();
        }

        if (world.bodies.length > 0)
        {
          world.removeBody(world.bodies[world.bodies.length - 1]);
        }

        if (overhangs.length > 0)
        {
          overhangs.pop();
        }
        repositionCamAndLight();
      }

      await sleep(500);
      currWidth = currDepth = 50;
      dir = "x";
      speed = DEFAULT_SPEED;
      playing = true;
      newBlock(-50, 0);
      addBlock();
      repositionCamAndLight();
    }


    function sleep(ms)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }


    // Resize the window based on aspect ratio
    function onWindowResize()
    {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      startBtn.style.top = window.innerHeight / 4 + "px";
      startBtn.style.left = window.innerWidth / 2 + "px";
      startBtn.style.transform = "translate(-50%, -50%)";
      gameOverScreen.style.top = window.innerHeight / 2 + "px";
      gameOverScreen.style.left = window.innerWidth / 2 + "px";
      gameOverScreen.style.transform = "translate(-50%, -50%)";
      score.style.top = window.innerHeight / 16 + "px";
      score.style.left = window.innerWidth / 2 + "px";
      score.style.transform = "translate(-50%, -50%)";
      title.style.top = window.innerHeight / 16 + "px";
      title.style.left = window.innerWidth / 2 - 5 + "px";
      title.style.transform = "translate(-50%, -50%)";
    }


    // Displays the current score on screen
    function currentScore()
    {
      score.style.position = "absolute";
      score.style.color = "white";
      score.style.fontSize = "24px";
      score.style.padding = "10px";
      score.style.cursor = "default";
      score.style.textAlign = "center";
      score.style.borderRadius = "14px";
      score.style.fontFamily = "Poppins";
      score.innerHTML = "Current Score<br>" + (stack.length - 1);
      score.style.backgroundColor = "rgb(33 36 45 / 30%)";
      score.style.transform = "translate(-50%, -50%)";
      score.style.top = window.innerHeight / 16 + "px";
      score.style.left = window.innerWidth / 2 + "px";
      score.style.userSelect = "none";
      document.body.appendChild(score)
    }


    // Displays the game over dashboard to screen
    async function gameOver()
    {
      var gameOverAudio = new Audio(gameoverAudioFile);
      playing = false;
      currWidth = 0;
      currDepth = 0;
      speed = 0;
      gameOverAudio.play();
      maxScore = Math.max(stack.length - 2, maxScore);

      // Game over 
      gameOverScreen.style.position = "absolute";
      gameOverScreen.style.color = "white";
      gameOverScreen.style.width = "500px";
      gameOverScreen.style.fontSize = "30px";
      gameOverScreen.style.padding = "80px";
      gameOverScreen.style.fontFamily = "Poppins";
      gameOverScreen.style.textAlign = "center";
      gameOverScreen.style.borderRadius = "14px";
      gameOverScreen.style.backgroundColor = "rgb(33 36 45 / 40%)";
      gameOverScreen.style.zIndex = "2";
      gameOverScreen.innerHTML = "<font size ='10px' color='#F88379'>GAME OVER</font> <br><br><font size='4px'> Your Score: "
        + (stack.length - 2)
        + "<br><br>Max Score: "
        + maxScore
        + "</font><font size='5px'><br><br>CLICK TO PLAY AGAIN</font>";
      gameOverScreen.style.top = window.innerHeight / 2 + "px";
      gameOverScreen.style.left = window.innerWidth / 2 + "px";
      gameOverScreen.style.transform = "translate(-50%, -50%)";
      gameOverScreen.style.userSelect = "none";

      // Hide current score
      score.style.padding = "0px";
      score.innerHTML = "";

      document.body.appendChild(gameOverScreen)
      await sleep(1000);
      pauseClicks = false;
    }


    // Displays title at the front page
    function showTitle()
    {
      title.style.position = "absolute";
      title.style.fontSize = "70px";
      title.style.padding = "10px";
      title.style.cursor = "default";
      title.style.textAlign = "center";
      title.style.fontFamily = "Poppins";
      title.style.backgroundImage = "-webkit-linear-gradient(#f1c0e8, #cfbaf0, #a3c4f3, #90dbf4, #8eecf5, #98f5e1, #b9fbc0, #fbf8cc, #fde4cf, #ffcfd2)";
      title.style.width = "100%";
      title.style.transform = "translate(-50%, -50%)";
      title.style.top = window.innerHeight / 16 + "px";
      title.style.left = window.innerWidth / 2 - 5 + "px";
      title.style.userSelect = "none";
      title.innerHTML = "STACK GAME";
      document.body.appendChild(title)
    }


    // Displays the start button at the front page
    function showStartButton()
    {
      startBtn.style.position = "absolute";
      startBtn.style.color = "white";
      startBtn.style.padding = "10px";
      startBtn.style.cursor = "pointer";
      startBtn.style.borderRadius = "14px";
      startBtn.style.fontFamily = "Poppins";
      startBtn.style.textAlign = "center";
      startBtn.innerHTML = "Press on mouse or spacebar to<br><br><font size='30px'>START GAME</font>";
      startBtn.style.backgroundColor = "rgb(33 36 45 / 30%)";
      startBtn.style.transform = "translate(-50%, -50%)";
      startBtn.style.top = window.innerHeight / 4 + "px";
      startBtn.style.left = window.innerWidth / 2 + "px";
      startBtn.style.userSelect = "none";
      document.body.appendChild(startBtn)
    }

    // Hides the start button / title
    function hideStartPage()
    {
      startBtn.style.padding = "0px";
      startBtn.innerHTML = "";
      score.style.padding = "0px";
      score.innerHTML = "";
      title.style.padding = "0px";
      title.innerHTML = "";
      currentScore();
    }
  });

  return (
    <div>
      <canvas id="stackGame" />
    </div>
  );
}

export default App;