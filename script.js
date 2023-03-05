// Генерация случайного числа от 1 до 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Поиск элементов на странице
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");

// Обработчик события клика на кнопку
guessButton.addEventListener("click", function() {
  // Парсинг введенного числа
  const guess = parseInt(guessInput.value);

  // Проверка на корректность введенного числа
  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = "Введите число от 1 до 100!";
    return;
  }

  // Проверка на совпадение чисел
  if (guess === secretNumber) {
    result.textContent = "Вы угадали число!";
  } else if (guess < secretNumber) {
    result.textContent = "Загаданное число больше!";
  } else {
    result.textContent = "Загаданное число меньше!";
  }
});
