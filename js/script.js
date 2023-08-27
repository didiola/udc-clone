const harmburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
var [red, green, blue] = [255, 200, 11];

harmburger.addEventListener("click", () => {
  harmburger.classList.contains("active")
    ? harmburger.classList.remove("active")
    : harmburger.classList.add("active");
});

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 501 || window.pageYOffset > 501) {
    // red = window.scrollY % 300 || window.pageYOffset % 300 ? red-((window.scrollY-300)/300) : red;
    // green = window.scrollY % 300 || window.pageYOffset % 300 ? green-((window.scrollY-300)/300) : green;
    // blue = window.scrollY % 50 || window.pageYOffset % 50 ? blue + ((window.scrollY-500)/50) : blue;
    const [r, g, b] = [
      red - (window.scrollY - 300) / 50,
      green - (window.scrollY - 300) / 50,
      blue + (window.scrollY - 500) / 20,
    ].map(Math.round);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    console.log(`rgb(${r}, ${g}, ${b})`);
    console.log(blue);
  } else {
    [red, green, blue] = [255, 200, 11];
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
  console.log("scrollY", window.scrollY);
  console.log("PageYOffset", window.pageYOffset);
});
