const cards = document.querySelectorAll('.card__item');

cards.forEach((card) => {
  const childCard = card.querySelector('.card__btns');

  card.addEventListener('click', (e) => {
    const target = e.currentTarget;

    cards.forEach((otherCard) => {
      if (otherCard !== target) {
        otherCard.classList.remove('active');
      }

      if (otherCard.classList.contains('active')) {
        childCard.classList.remove('visibility-off');
      }
    });

    childCard.classList.add('visibility-off');
    target.classList.add('active');
  });
});
