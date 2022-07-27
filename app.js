// classList - shows/gets all classes

// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", () => {
  console.log(links.classList);
  const list = links.classList;

  if (list.contains("show-links")) {
    list.remove("show-links");
  } else {
    list.add("show-links");
  }
});
