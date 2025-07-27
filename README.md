# Game Lab Starter Code for CSD Unit 3 Lesson 27 or 28

This is starter code that will work set up an environment in VSCode that mimic the coding experience in Code.org's Game Lab.

## Setup

To get started you'll need node.js installed.

To get intellisense for Game Lab's p5.js API type:

```bash
  npm install
```

To run your development server, type:

```bash
  npx live-server
```


## Usage

In GameLab, you only have one file to work with. However, if you have many people working on the same file, it can get very difficult to coordinate your changes. So, the code you write will be divided among several files found in the `js/` directory.

The files you and your group will work on are:

* js/variables.js - variables
* js/

You may divide your work into 4 parts, each of which will be the responsibility of one group member. Each person will be responsible for writing code in their one file.

### roles and files

Here is a table showing roles and associate files for your members. This assumes a 4 person team. If you have more or less people on your team, you will have to decide how you will divide the responsibilities.

| **Role**                       | **Files Responsible For**                    | **Responsibilities**                                                                 |
| ------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------ |
| 🎨 Background Designer         | `background.js`                              | Design and code the background (color, sky, terrain, etc).                           |
| 🧑‍🎨 Sprite Designer/Animator | `animations.js`, `sprite-setup.js`           | Add sprite images/animations. Set up sprite properties like scale or start location. |
| 👾 Obstacle/Enemy Movement     | `sprite-movement.js`                         | Code how obstacles and enemies move using patterns or velocity.                      |
| 🕹️ Controls & Interactions    | `user-controls.js`, `sprite-interactions.js` | Code the player’s controls and how sprites interact (bounce, overlap, disappear).    |

Also share and update common files like `variables.js` and `display-boards.js` as needed.


### Functions

Each file contains a function definition. Write your code in this function definition so that your code can be run in the main script.js file.


## Files

This repo contains many files and each has their own use and importance. Here is a list of the files and folders that are contained. 

* .vscode - the folder containing the settings for vscode editor.
* script.js - the script that starts up Game Lab
* js/ - this folder contains files for team members to write their code in. Each file contains a function that is called in script.js. Adding code to function will cause it to be executed in your game.
  * background.js - where the background is drawn. Think: rect, arc, fill, and so on.
  * display-boards.js - where the display for score and other stats will be displayed in-game.
  * ...
* style.css - this file contains some styles for the HTML page that the game is embedded in.
* sprites/ - the folder containing the images of the sprites.
* vendor/ - this folder contains the code that makes Game Lab run. You do not need to change anything in this folder.

Here are some other file that you do not need to change.

* jsconfig.json - this file helps VSCode configure its Intellisense to give you code completion and information about the functions when you hover over them.
* p5.play.d.ts - this is another file used by Intellisense.
* package.json and package-lock.json - these folders contain information and settings on the project. For example, when you typed `npm install`, this file contained information on what to install. (FYI: it installed files to help Intellisense display information about function related to drawing.)
