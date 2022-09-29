let imgIndx = 0;
let imgCount = document.getElementById("subho-slider-wrapper").children.length;
let imgs = document.getElementsByClassName("subho-slider-img");
let sliderBtns = document.getElementsByClassName(
  "subho-slider-controller-wrapper"
);

let sliderInterval = setInterval(() => {
  imgs[imgIndx].style.display = "none";
  imgIndx++;
  if (imgIndx >= imgCount) imgIndx = 0;
  imgs[imgIndx].style.display = "block";
}, 3000);

sliderBtns[0].onclick = () => {
  imgs[imgIndx].style.display = "none";
  imgIndx--;
  if (imgIndx < 0) imgIndx = imgCount - 1;
  imgs[imgIndx].style.display = "block";
};

sliderBtns[0].onclick = () => {
  imgs[imgIndx].style.display = "none";
  imgIndx++;
  if (imgIndx >= imgCount) imgIndx = 0;
  imgs[imgIndx].style.display = "block";
};
