import "./styles/style.css";
import "./styles/reset.css";
import "boxicons";

const navToggle = document.querySelector("#checkbox");
const navLinks = document.querySelectorAll(".nav-link");
const navList = document.querySelector(".nav-list");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("toggle-active");
  navList.classList.toggle("nav-active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.toggle("toggle-active");
    navList.classList.toggle("nav-active");
  });
});

// --Testimonial Slider--

const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
  {
    photo:
      'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
    name: "Susan Smith",
    profession: "WEB DEVELOPER",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae reprehenderit facere a, saepe minus quam praesentium soluta dolorum ad libero accusantium eum voluptatibus dolores nulla, est aliquid illo odio excepturi?",
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_640.jpg')",
    name: "Anna Grey",
    profession: "UFC FIGHTER",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae reprehenderit facere a, saepe minus quam praesentium soluta dolorum ad libero accusantium eum voluptatibus dolores nulla, est aliquid illo odio excepturi?",
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg')",
    name: "Branson Cook",
    profession: "ACTOR",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae reprehenderit facere a, saepe minus quam praesentium soluta dolorum ad libero accusantium eum voluptatibus dolores nulla, est aliquid illo odio excepturi?",
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg')",
    name: "Julius Grohn",
    profession: "PROFESSIONAL CHILD",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae reprehenderit facere a, saepe minus quam praesentium soluta dolorum ad libero accusantium eum voluptatibus dolores nulla, est aliquid illo odio excepturi?",
  },
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  //(+ or -)
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 0,
    });
  }

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`,
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`,
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0,
  });

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1,
    });
  }
}

function setNextCardLeft() {
  if (currentPerson === 3) {
    currentPerson = 0;
    slide("left", currentPerson);
  } else {
    currentPerson++;
  }

  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 3;
    slide("right", currentPerson);
  } else {
    currentPerson--;
  }

  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
  if (chicken.style.opacity === "0") {
    chicken.style.opacity = "1";
    imgDiv.classList.add("move-head");
    surpriseMeBtn.innerText = "Remove the chicken";
    surpriseMeBtn.classList.remove("surprise-me-btn");
    surpriseMeBtn.classList.add("hide-chicken-btn");
    isChickenVisible = true;
  } else if (chicken.style.opacity === "1") {
    chicken.style.opacity = "0";
    imgDiv.classList.remove("move-head");
    surpriseMeBtn.innerText = "Surprise me";
    surpriseMeBtn.classList.add("surprise-me-btn");
    surpriseMeBtn.classList.remove("hide-chicken-btn");
    isChickenVisible = false;
  }
});

window.addEventListener("resize", () => {
  description.style.height = "100%";
});
