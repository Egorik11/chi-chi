const cards = document.querySelectorAll('.card__item');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    const target = e.currentTarget;

    cards.forEach((otherCard) => {
      if (otherCard !== target) {
        otherCard.classList.remove('active');
      }
    });

    target.classList.add('active');
  });
});
