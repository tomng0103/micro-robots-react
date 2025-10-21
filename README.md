# 🤖 Micro Robots React
<img width="601" height="600" alt="image" src="https://github.com/user-attachments/assets/33ace956-d255-4e79-bd9b-8b6be7c30b14" />

A digital adaptation of the puzzle board game **Micro Robots** built with Next.js, React, and TypeScript. Navigate your robot across a colorful grid to reach the target flag while following the movement rules!
![]

![Game Status](https://img.shields.io/badge/status-active-success.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)


## DEMO
https://micro-robots-react.web.app/

## 🎮 How to Play

<img width="906" height="919" alt="image" src="https://github.com/user-attachments/assets/22c272eb-af98-47a4-b16a-9ac2868a0b38" />

### Game Objective
Move your robot (🤖) from its starting position to the target flag (🏁) using the fewest moves possible!

### Movement Rules
The robot can only move in **cardinal directions** (up, down, left, right) and must follow these rules:

1. **Color Match**: You can move to a cell if it has the **same color** as your current cell
2. **Number Match**: You can move to a cell if it has the **same number** as your current cell
3. **Cardinal Direction Only**: No diagonal moves allowed

**Example:**
- If you're on a **Red 3** cell, you can move to any **Red** cell OR any cell with number **3** (in cardinal directions)
- You cannot move diagonally or to cells that don't match color or number

### Victory
When your robot reaches the flag position, you'll be rewarded with a **confetti celebration**! 🎉

## 🎯 Features

- **Interactive Grid Board**: 6x6 grid composed of 4 smaller 3x3 boards
- **Drag & Drop**: Rearrange the board layout in edit mode
- **Move History**: Track all your moves and undo when needed
- **Visual Feedback**: Color-coded cells with numbers for easy navigation
- **Confetti Effect**: Celebration animation when you win!
- **Multiple Controls**:
  - 🙈 **Hide/Show**: Toggle robot and flag visibility
  - 🏁 **New**: Generate a new target position
  - 🔙 **Undo**: Revert your last move
  - 🤖 **Reset**: Return robot to starting position
  - **Edit Board**: Rearrange the board layout

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tomng0103/micro-robots-react.git
   cd micro-robots-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Tech Stack

- **Framework**: [Next.js 15.5.5](https://nextjs.org/) with App Router
- **UI Library**: [React 19.1.0](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [Material-UI 7](https://mui.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Animations**: [canvas-confetti](https://github.com/catdad/canvas-confetti)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main game page
│   ├── board/                # Board route
│   └── about/                # About page
├── components/
│   ├── completeBoardComponent.tsx  # Main board container
│   ├── smallBoardComponent.tsx     # 3x3 board sections
│   ├── robotComponent.tsx          # Robot overlay
│   ├── poleFlagComponent.tsx       # Flag overlay
│   ├── controllerComponent.tsx     # Game state management
│   └── moveCounterComponent.tsx    # Move tracking
├── public/
│   ├── board.constant.ts     # Board configurations
│   └── gridLogic.utils.ts    # Movement logic
└── public/
    └── grid-background/      # Cell images (colors & numbers)
```

## 🎲 Game Components

### Grid System
- **Complete Board**: 6x6 grid (36 cells total)
- **4 Sub-boards**: Each 3x3 section can be rearranged
- **Color Scheme**: Red, Blue, Green, Yellow, Purple, White
- **Number Range**: 1-6

### Movement Logic
The game validates moves using:
- Cardinal direction checking (no diagonals)
- Color/number matching rules
- Board boundary enforcement

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Key Files

- [gridLogic.utils.ts](src/public/gridLogic.utils.ts) - Core game logic and movement validation
- [board.constant.ts](src/public/board.constant.ts) - Board configurations and types
- [controllerComponent.tsx](src/components/controllerComponent.tsx) - Global game state provider

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the physical board game **Micro Robots**
- Built with modern React best practices
- Confetti effect powered by [canvas-confetti](https://github.com/catdad/canvas-confetti)

---

**Enjoy the game!** 🎮 If you find any bugs or have suggestions, please open an issue.
