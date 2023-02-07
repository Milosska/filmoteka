const scrollbtnToTop = document.querySelector('#scroll--to_top');

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (this.scrollY > 100) {
      scrollbtnToTop.classList.add('show');
    } else {
      scrollbtnToTop.classList.remove('show');
    }
  });
});
