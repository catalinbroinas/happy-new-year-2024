const scrollButton = document.querySelector('#scroll-button');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
});
scrollButton.addEventListener('click', () => {
    document.body.scrollTop = 0;    // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
});