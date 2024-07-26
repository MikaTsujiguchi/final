// script.js
document.addEventListener('DOMContentLoaded', () => {
    const playerCards = document.querySelectorAll('.player-card');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-popup');

    playerCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.getAttribute('data-name');
            const position = card.getAttribute('data-position');
            const number = card.getAttribute('data-number');
            const team = card.getAttribute('data-team');
            const birthday = card.getAttribute('data-birthday');
            const hometown = card.getAttribute('data-hometown');
            const stats = card.getAttribute('data-stats');

            document.getElementById('popup-name').textContent = name;
            document.getElementById('popup-position').textContent = `ポジション: ${position}`;
            document.getElementById('popup-number').textContent = `背番号: ${number}`;
            document.getElementById('popup-team').textContent = `チーム: ${team}`;
            document.getElementById('popup-birthday').textContent = `生年月日: ${birthday}`;
            document.getElementById('popup-hometown').textContent = `出身地: ${hometown}`;
            document.getElementById('popup-stats').textContent = `成績: ${stats}`;

            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
