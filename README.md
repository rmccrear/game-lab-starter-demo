# 🎮 Game Lab Starter Code

> **CSD Unit 3 - Lessons 27 or 28**

This starter code sets up a VSCode environment to mimic Code.org's Game Lab coding experience.

Each file in the `/js` directory contains a function with example code. Replace the example code with your own implementation. (Don't delete the function! Keep it so that your code can be called by the `script.js` file.)

## Lesson References

See Lesson 27 or Lesson 28 for ideas on how to plan and implement your game as a team.

* Lesson 27 (Following a Plan -- Platform Jumper)
  * [Activity Guide](https://docs.google.com/document/d/1FqTjwpAuFrVidZ_j6aGw895FivFCRO2CZSvhHqWuEik/view?tab=t.0)
  * [Instructions in steps](https://github.com/rmccrear/codex-lv2-may-2025/blob/main/guides/week3-group-project/lesson-27/lesson-27.md)
  * [Instructions as code.org levels](https://studio.code.org/courses/csd-2024/units/3/lessons/27/levels/1)
* Lesson 28 (Creating and following a plan -- create your own game)
  * [Lesson Overview](https://studio.code.org/courses/csd-2024/units/3/lessons/28/student)
  * [Activity Guide](https://docs.google.com/document/d/14oPvmdvm_BfOn5KBSov6jyhoEMRHygdNNIXl-fe4g-Q/view?tab=t.0)
  * [code.org levels](https://studio.code.org/courses/csd-2024/units/3/lessons/28/levels/1)


## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system

### Installation

1. **Install dependencies** for Game Lab's p5.js API intellisense:
```bash
npm install
```

2. **Start the development server**:
```bash
npx live-server
```

3. **Open your browser** and navigate to the local server (usually `http://localhost:8080`)

## Documentation

See these two files for documentation on functions and objects in code.org's fork of p5.js and p5.play.js.

* For drawing and the draw loop: [p5.js](https://github.com/rmccrear/codex-lv2-may-2025/blob/main/resources/skill-guides/game-lab-docs/P5_DOCS.md)
* For sprites, sprite movements, and user interaction: [p5.play.js](https://github.com/rmccrear/codex-lv2-may-2025/blob/main/resources/skill-guides/game-lab-docs/P5_PLAY_DOCS.md)

You can also review Code.org's CSD Unit 3.

* For Background Drawing, review [Lesson 3](https://studio.code.org/courses/csd-2024/units/3/lessons/3/student) and [Lesson 4](https://studio.code.org/courses/csd-2024/units/3/lessons/4/student) of code.org's CSD Unit 3.
* For Sprites, review [Lesson 8](https://studio.code.org/courses/csd-2024/units/3/lessons/8/student) and [Lesson 9](https://studio.code.org/courses/csd-2024/units/3/lessons/9/student)
* For Text, like a score board, review [Lesson 10](https://studio.code.org/courses/csd-2024/units/3/lessons/10/student)
* For Sprite Movement, review [Lesson 13](https://studio.code.org/courses/csd-2024/units/3/lessons/13/student)
* For User Interaction, review [Lesson 16](https://studio.code.org/courses/csd-2024/units/3/lessons/16/student) and [Lesson 17](https://studio.code.org/courses/csd-2024/units/3/lessons/17/student). (And [Lesson 15](https://studio.code.org/courses/csd-2024/units/3/lessons/15/student) for Conditionals)
* For Sprite Interactions, review [Lesson 20](https://studio.code.org/courses/csd-2024/units/3/lessons/20/student)
* For Overall Plans for a Platform Jumper, see [Lesson 27](https://studio.code.org/courses/csd-2024/units/3/lessons/27/student)
* For Plans for a general game, see [Lesson 28](https://studio.code.org/courses/csd-2024/units/3/lessons/28/student)

## 📁 Project Structure

In GameLab, you typically work with one file, but for team collaboration, the code is divided among several files in the `js/` directory.

### 🎯 Team Roles & Responsibilities

| **Role** | **Files** | **Responsibilities** |
|----------|-----------|---------------------|
| 🎨 **Background Designer** | `background.js` | Design and code the background (color, sky, terrain, etc.) |
| 🧑‍🎨 **Sprite Designer/Animator** | `animations.js`, `sprite-setup.js` | Add sprite images/animations. Set up sprite properties like scale or start location |
| 👾 **Obstacle/Enemy Movement** | `sprite-movement.js` | Code how obstacles and enemies move using patterns or velocity |
| 🕹️ **Controls & Interactions** | `user-controls.js`, `sprite-interactions.js` | Code the player's controls and how sprites interact (bounce, overlap, disappear) |

> **Note**: Also share and update common files like `variables.js` and `display-boards.js` as needed.

### 📂 File Organization

```
game-lab-starter/
├── 📁 js/                    # Your team's code files
│   ├── variables.js          # Shared variables
│   ├── background.js         # Background design
│   ├── display-boards.js     # Score and stats display
│   ├── animations.js         # Sprite animations
│   ├── sprite-setup.js       # Sprite initialization
│   ├── sprite-movement.js    # Enemy/obstacle movement
│   ├── sprite-interactions.js # Collision and interactions
│   └── user-controls.js      # Player controls
├── 📁 sprites/               # Sprite images (don't modify)
├── 📁 vendor/                # Game Lab libraries (don't modify)
├── 📁 .vscode/               # VSCode settings (don't modify)
├── script.js                 # Main game script
├── style.css                 # Page styling
├── index.html                # Main HTML file
├── p5.play.d.ts              # TypeScript definitions (don't modify)
├── jsconfig.json             # VSCode configuration (don't modify)
├── package.json              # Node.js dependencies (don't modify)
└── README.md                 # This file (don't modify)
```

## 💻 Development

### Writing Code

Each file in the `js/` directory contains a function definition. Write your code inside these functions so it can be executed by the main `script.js` file.

**Example:**
```javascript
// In background.js
function drawBackground() {
    // Your background code here
    background("skyblue");
    fill("green");
    rect(0, 300, 400, 100); // ground
}
```

### Key Files You'll Work With

| **File** | **Purpose** |
|----------|-------------|
| `js/variables.js` | Define shared variables used across the game |
| `js/background.js` | Draw the game background using p5.js drawing functions |
| `js/display-boards.js` | Display score, lives, and other game statistics |
| `js/animations.js` | Create and manage sprite animations |
| `js/sprite-setup.js` | Initialize sprites with properties and starting positions |
| `js/sprite-movement.js` | Program enemy and obstacle movement patterns |
| `js/sprite-interactions.js` | Handle collisions, bouncing, and sprite interactions |
| `js/user-controls.js` | Implement player input and controls |

## 🔧 Configuration Files

These files help set up the development environment - **don't modify them**:

- `jsconfig.json` - VSCode intellisense configuration
- `p5.play.d.ts` - TypeScript definitions for p5.play library
- `package.json` & `package-lock.json` - Node.js project configuration

## 🎯 Tips for Success

1. **Coordinate with your team** - Use the role assignments to avoid conflicts
2. **Test frequently** - Run `npx live-server` and check your changes often
3. **Use intellisense** - VSCode will provide code completion for p5.js functions
4. **Comment your code** - Help your teammates understand your implementation
5. **Share variables** - Use `variables.js` for data that multiple files need

## 🎮 Happy Coding!

Build something amazing with your team! 🚀
