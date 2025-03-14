const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// احصل على رقم عشوائي صحيح بين 1 و100
const target = Math.floor(Math.random() * 100) + 1;
console.log("Guess a number between 1 and 100");

function guessGame() {
  rl.question("Your guess: ", (answer) => {
    // تحويل إدخال المستخدم إلى عدد صحيح
    const guess = parseInt(answer, 10);

    // تحقق مما إذا كان الإدخال رقم صحيح
    if (isNaN(guess)) {
      console.log("Invalid input, please enter a valid number!");
      guessGame();
    } else if (guess === target) {
      console.log("Correct! The number was " + target);
      rl.close();
    } else if (guess < target) {
      console.log("Too low!");
      guessGame();
    } else if (guess > target) {
      console.log("Too high!");
      guessGame();
    }
  });
}

guessGame();
