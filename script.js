// Функция для зажигания свечи по готовым категориям
function lightCandle(category) {
    const resultDiv = document.getElementById('result'); // Блок для отображения результата
    const candleDiv = document.getElementById('candle-animation'); // Блок с анимацией свечи
    const candleImage = candleDiv.querySelector('img'); // Изображение свечи

    // Показываем анимацию свечи
    candleDiv.classList.remove('hidden');
    candleImage.classList.add('visible');

    // Обновляем текст результата
    setTimeout(() => {
        resultDiv.textContent = `Вы зажгли свечу за "${category}". Ваше желание обязательно сбудется!`;
    }, 1000);

    // Скрываем свечу через 3 секунды
    setTimeout(() => {
        candleImage.classList.remove('visible');
        candleDiv.classList.add('hidden');
    }, 3000);
}

// Функция для зажигания свечи с пользовательским желанием
function lightCustomCandle() {
    const input = document.getElementById('custom-desire-input'); // Поле ввода желания
    const desire = input.value.trim(); // Получаем и обрезаем пробелы в тексте

    if (!desire) { // Проверяем, введено ли желание
        alert('Пожалуйста, введите ваше желание!');
        return;
    }

    const resultDiv = document.getElementById('result'); // Блок для отображения результата
    const candleDiv = document.getElementById('candle-animation'); // Блок с анимацией свечи
    const candleImage = candleDiv.querySelector('img'); // Изображение свечи

    // Показываем анимацию свечи
    candleDiv.classList.remove('hidden');
    candleImage.classList.add('visible');

    // Обновляем текст результата
    setTimeout(() => {
        resultDiv.textContent = `Вы зажгли свечу за своё желание: "${desire}". Ваше желание обязательно сбудется!`;
        input.value = ''; // Очищаем поле ввода
    }, 1000);

    // Скрываем свечу через 3 секунды
    setTimeout(() => {
        candleImage.classList.remove('visible');
        candleDiv.classList.add('hidden');
    }, 3000);
}
