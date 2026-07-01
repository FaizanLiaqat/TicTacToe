# Tic Tac Toe - React Native

A simple Tic Tac Toe game built with **React Native** and **TypeScript**.

This project was developed from scratch as a learning exercise to better understand React Native fundamentals, component-based architecture, state management, event handling, and game logic without relying on guided tutorials.

---

## Features

* Classic 3×3 Tic Tac Toe gameplay
* Two-player mode (X vs O)
* Turn-based gameplay
* Winner detection

  * Horizontal wins
  * Vertical wins
  * Diagonal wins
* Prevents overwriting occupied cells
* Restart game functionality
* Responsive square game board

---

## Technologies Used

* React Native
* TypeScript
* React Hooks (`useState`)
* React Native Safe Area Context

---

## Learning Objectives

The primary goal of this project was to strengthen my understanding of:

* React Native fundamentals
* Functional components
* State management using React Hooks
* Rendering lists using `.map()`
* Event handling with `Pressable`
* Immutable state updates
* Building and debugging application logic
* Designing game algorithms without following tutorial implementations

---

## Project Structure

```text
.
├── App.tsx
├── components/
│   └── ...
├── android/
├── ios/
└── ...
```

---

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
cd TicTacToe
```

### Install dependencies

```bash
npm install
```

### Start Metro

```bash
npx react-native start
```

### Run on Android

```bash
npx react-native run-android
```

### Run on iOS (macOS only)

```bash
npx react-native run-ios
```

---

## Gameplay

1. Player **O** starts first.
2. Players take turns placing their marks.
3. A player wins by placing three identical marks in:

   * a row,
   * a column,
   * or a diagonal.
4. Once a winner is detected, the game ends.
5. Press **Restart Game** to begin a new match.

---

## Future Improvements

* Draw detection
* Scoreboard
* Winning line animation
* Sound effects
* Single-player mode (AI)
* Difficulty levels
* Better UI and animations
* Dark mode support

---

## License

This project is intended for learning purposes.

You can further personalize it by adding:

* a GIF of the gameplay,
* screenshots,
* or a short "Challenges I faced" section describing what you learned while implementing the winner detection logic and state management. Those additions make a portfolio project more compelling than just listing features.
