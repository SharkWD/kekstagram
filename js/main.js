// Возвращающает случайное целое число из переданного диапазона включительно
// Диапазон может быть только положительный, включая ноль.
// Поведение, если передать значение «до» меньшее, чем значение «от», или равное ему?

function getRandomPositiveInteger(min, max) {
  if (min < 0) {
    return 'Введите положительный диапазон';
  }

  if (max <= min) {
    return 'Начало диапазона должно быть больше конца!';
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Проверка максимальной длины строки.
// Результат: true, если строка проходит по длине, и false — если не проходит

function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

getRandomPositiveInteger();
checkStringLength();
