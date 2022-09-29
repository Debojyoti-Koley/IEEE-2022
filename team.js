const toggleButton = document.getElementsByClassName("toggle-button")[0];

const navBarlinks = document.getElementsByClassName("navbar-dropdown")[0];

toggleButton.addEventListener("click", () => {
  console.log("hii");
  navBarlinks.classList.toggle("active");
});

window.onscroll = function () {
  myFunction();
};

var navlist = document.getElementsByClassName("navbar")[0];

/* Function to stick the nav bar */
function myFunction() {
  if (window.pageYOffset >= 100) {
    navlist.classList.add("sticky");
    navlist.classList.add("nav-sticky");
  } else {
    navlist.classList.remove("sticky");
    navlist.classList.remove("nav-sticky");
  }
}

var paths = document.querySelectorAll(".st0");

[].forEach.call(paths, function (path) {
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = "none";
  path.style.strokeDasharray = length + " " + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition =
    "stroke-dashoffset 5s ease-in-out";

  path.style.strokeDashoffset = "0";
});

var sliders_container = document.getElementById("slider-wrapper");
var sliders = document.getElementsByClassName("slider");

// var left_control = document.getElementById("left-control");
// var right_control = document.getElementById("right-control");

var left = 0;
var total_slider = sliders.length;
var slider_width = 1025;
var delay = 5000; //ms

var under_control = false;
var max_seconds = 5;
var seconds = 0;

function update() {
  if (!under_control) {
    left -= 1025;
    if (Math.abs(left) >= slider_width * total_slider) left = 0;
    // sliders_container.style.left = left + "px";
  } else {
    if (seconds > 1) seconds -= 1;
    else under_control = false;
  }
  // console.log(under_control);
}

// left_control.addEventListener("click", function () {
//   if (Math.abs(left) <= 0) left = -(slider_width * total_slider);
//   left += 1025;
//   sliders_container.style.left = left + "px";

//   setIsUnderControl();
// });

// right_control.addEventListener("click", function () {
//   left -= 1025;
//   if (Math.abs(left) >= slider_width * total_slider) left = 0;
//   sliders_container.style.left = left + "px";

//   setIsUnderControl();
// });

function setIsUnderControl() {
  under_control = true;
  seconds = max_seconds;
}

// setInterval(update, delay);

// $("#sponsor-carousel").carousel({
//   interval: 3000,
//   cycle: true,
// });




const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    console.log(modal);
    openModal(modal)
  });
  // console.log(button.dataset);
})



closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}