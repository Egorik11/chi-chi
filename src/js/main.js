const cards = document.querySelectorAll('.card__item');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    const target = e.target;

    if (target !== card) {
      card.classList.remove('active');
    }

    card.classList.add('active');
  });
});
