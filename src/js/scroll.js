window.onscroll = function() {toggleButton()};

function toggleButton() {
  const button = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
