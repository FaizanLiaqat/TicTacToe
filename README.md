# Tic Tac Toe 🎮

A classic Tic Tac Toe game built with **React Native** and **TypeScript**.

This project was built from scratch as a personal learning exercise without following a step-by-step tutorial. The focus was on understanding React Native fundamentals, state management, component design, and implementing the game logic independently.

## Features

- 🎲 Two-player gameplay (X vs O)
- 🔄 Alternating player turns
- ✅ Win detection for:

  - Horizontal lines
  - Vertical lines
  - Diagonal lines

- 🚫 Prevents selecting an occupied cell
- 🔁 Restart game functionality
- 📱 Responsive 3×3 game board
- 🎨 FontAwesome icons for X and O

## Tech Stack

- React Native
- TypeScript
- React Hooks (`useState`)
- React Native Safe Area Context
- React Native Vector Icons (FontAwesome)

## Project Structure

```text
.
├── components
│   └── Icons.tsx
├── App.tsx
├── android/
├── ios/
└── ...
```

## What I Learned

While building this project, I gained hands-on experience with:

- Building UI using React Native components
- Managing application state with React Hooks
- Updating state immutably
- Rendering dynamic lists using `.map()`
- Handling user interactions with `Pressable`
- Creating reusable components
- Designing and implementing game logic
- Debugging React Native applications using Logcat
- Working with third-party libraries and TypeScript

## Getting Started

Clone the repository:

```bash
git clone https://github.com/FaizanLiaqat/TicTacToe.git
```

Navigate to the project directory:

```bash
cd TicTacToe
```

Install dependencies:

```bash
npm install
```

Start the Metro bundler:

```bash
npx react-native start
```

Run the Android application:

```bash
npx react-native run-android
```

## Future Improvements

- 🤝 Single-player mode with AI
- 📊 Scoreboard
- 🤝 Draw detection
- ✨ Winning line animation
- 🎵 Sound effects
- 🌙 Dark mode
- 💫 Improved UI and animations

## License

This project is available for learning and educational purposes.
