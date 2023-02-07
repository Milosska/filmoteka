// Функція, що зчитує що тягнути з local-storage
function indicateLSKey() {
  let LSParseKey;
  // Для сторінки HOME
  if (!window.location.href.includes('library')) {
    LSParseKey = 'current-films';
  } else {
    // Для сторінки MY LIBRARY
    const statusArray = [
      document.querySelector('.btn__watched'),
      document.querySelector('.btn__queue'),
    ];

    // ------ Зчитування назви листа, де знаходиться клієнт
    statusArray.forEach(elem => {
      if (elem.classList.contains('is-active')) {
        LSParseKey = elem.textContent.toLowerCase();
      }
    });
  }
  return LSParseKey;
}

export { indicateLSKey };
