const buttons = document.querySelectorAll('.btn-cart');

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        button.textContent = 'Добавлено ✓';
        button.style.backgroundColor = '#16a34a';
    });
});