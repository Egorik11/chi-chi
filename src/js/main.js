const cards = document.querySelectorAll('.card__item');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    const target = e.currentTarget;
    cards.forEach((otherCard) => {
      if (otherCard !== target) {
        otherCard.classList.remove('active');
        const otherCardBtns = otherCard.querySelector('.card__btns');
        if (otherCardBtns && !otherCard.classList.contains('active')) {
          otherCardBtns.classList.add('visibility-off');
        }
      }
    });
    target.classList.add('active');
    const targetBtns = target.querySelector('.card__btns');
    if (targetBtns) {
      targetBtns.classList.remove('visibility-off');
    }
  });
});
