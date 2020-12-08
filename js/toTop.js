let btn = document.querySelector('.toTop')

btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};