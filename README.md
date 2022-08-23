# STACK GAME

The 3D Stack Game was built using Three.js for the 3D mesh rendering and Cannon-es.js for the in-game physics.  The game is currently optmized to be played on a desktop web- browser. 

Let's see how high you can stack these blocks!

## Game Features

- Blocks will alternate from one end to the other. Time when the top block will be directly on top of the one below.
- The portion of the top block that is not in direct contact with the bottom block will get chopped off.
- Block speed increases by 10% after every 5 successive stacks.
- Game ends when block completely misses the bottom block

![](https://github.com/gavincywong/stack-game/blob/main/assets/images/sg1.png?raw=true)
![](https://github.com/gavincywong/stack-game/blob/main/assets/images/sg2.png?raw=true)
![](https://github.com/gavincywong/stack-game/blob/main/assets/images/sg3.png?raw=true)

## Controls
Press the left mouse button or spacebar to start the game and also to restart.

## Frameworks
The project was built using `React`, `Vite`, and `nodejs` frameworks. `three.js` was utilized for 3D mesh rendering in combination with the lightweight 3D physics engine  `cannon-es.js`.

## Future Enhancements
- Optimize game for Android/iOS phones
- Add different difficulty levels (e.g. different starting speeds)
- Delete blocks that have fallen off screen from the three.js scene to improve performance

