document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach(function (image) {
    if (!image.hasAttribute("loading")) {
      image.setAttribute("src", "images/placeholder.jpg");
    }
  });
});