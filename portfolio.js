//big screen aboutme box
let aboutMeBtn = document.querySelector("#aboutmebtn");
let aboutMe = document.querySelector(".aboutme1");

let bigScreen = true;
aboutMeBtn.addEventListener("click", function() {
  bigScreen = !bigScreen;
  if (!bigScreen) {
    aboutMe.style.display = "block";
    aboutMe.style.width = "98vw";
    aboutMe.style.height = "80vh";
    /* aboutMe.style.marginRight = "2%"; */
    aboutMe.style.position = "absolute";
    aboutMe.style.background = "rgba(23,53,63,1)";
    aboutMe.style.color = "white";
    aboutMe.style.zIndex = "200";
  } else if (bigScreen) {
    document.location.reload();
  }
});

//big screen work experience
myWorkBtn = document.querySelector("#workbtn");
myWorkExperience = document.querySelector(".work-experience");

let myWorkExp = true;
myWorkBtn.addEventListener("click", function() {
  myWorkExp = !myWorkExp;
  if (!myWorkExp) {
    myWorkExperience.style.display = "block";
    myWorkExperience.style.width = "98vw";
    myWorkExperience.style.height = "80vh";
    myWorkExperience.style.padding = "1% 3%";
    /* myWorkExperience.style.marginLeft = "1%"; */
    myWorkExperience.style.position = "absolute";
    myWorkExperience.style.background = "rgba(23,53,63,.9)";
    myWorkExperience.style.color = "white";
    myWorkExperience.style.zIndex = "200";
  } else if (myWorkExp) {
    document.location.reload();
  }
});

//big screen web-experience
myWorkBtn1 = document.querySelector("#workbtn1");
myWorkExperience1 = document.querySelector(".web-experience");

let myWorkExp1 = true;
myWorkBtn1.addEventListener("click", function() {
  myWorkExp1 = !myWorkExp1;
  if (!myWorkExp1) {
    myWorkExperience1.style.display = "block";
    myWorkExperience1.style.width = "98vw";
    myWorkExperience1.style.height = "80vh";
    myWorkExperience1.style.padding = "1% 3%";
    /* myWorkExperience1.style.marginLeft = "1%"; */
    myWorkExperience1.style.position = "absolute";
    myWorkExperience1.style.background = "rgba(23,53,63,.9)";
    myWorkExperience1.style.color = "white";
    myWorkExperience1.style.zIndex = "200";
  } else if (myWorkExp1) {
    document.location.reload();
  }
});

//big screen general education box
let educationBox = document.querySelector(".general-education");
let educationBtn = document.querySelector("#edubtn");

let myFunction = true;

educationBtn.addEventListener("click", function() {
  myFunction = !myFunction;
  if (!myFunction) {
    educationBox.style.display = "block";
    educationBox.style.width = "98vw";
    educationBox.style.height = "80vh";
    educationBox.style.padding = "1% 3%";
    /* educationBox.style.marginLeft = "1%"; */
    educationBox.style.position = "absolute";
    educationBox.style.background = "rgba(23,53,63,.9)";
    educationBox.style.color = "white";
    educationBox.style.zIndex = "200";
  } else if (myFunction) {
    document.location.reload();
  }
});

//big screen web related education
let myRelatedBtn = document.querySelector("#relatedbtn");
let myWebBox = document.querySelector(".web-related");

let mouseover = true;
myRelatedBtn.addEventListener("click", function() {
  mouseover = !mouseover;
  if (!mouseover) {
    myWebBox.style.display = "block";
    myWebBox.style.width = "98vw";
    myWebBox.style.height = "80vh";
    myWebBox.style.padding = "1% 3%";
    /*  myWebBox.style.marginLeft = "1%"; */
    /* myWebBox.style.marginRight = "100px"; */
    myWebBox.style.position = "absolute";
    myWebBox.style.background = "rgba(23,53,63,.9)";
    myWebBox.style.color = "white";
    myWebBox.style.zIndex = "200";
  } else if (mouseover) {
    document.location.reload();
    //window.location.reload()";
  }
});

//unavailable cv
let myCv = document.querySelector(".cv-absent"); //like btn
let myMssgClick = document.querySelector("#cv-button");

let mssg = true;
myMssgClick.addEventListener("click", function() {
  mssg = !mssg;
  if (!mssg) {
    myCv.style.display = "block";
    myCv.style.zIndex = "200";
  } else if (mssg) {
    document.location.reload();
    //window.location.reload()";
  }
});

/* close box */
let close_box = document.querySelector(".close-box");

close_box.addEventListener("click", function() {
  document.location.reload();
});

/* digital-cv unavailable */
let myIconButton = document.querySelector("#ithree");
let myDigitalCv = document.querySelector(".digitalCv-absent");

let btn = true;
myIconButton.addEventListener("click", function() {
  btn = !btn;
  if (!btn) {
    myDigitalCv.style.display = "block";
    myDigitalCv.style.zIndex = "200";
    myDigitalCv.style.width = "98vw";
    myDigitalCv.style.height = "40vh";
    myDigitalCv.style.padding = "1% 3%";
    myDigitalCv.style.position = "absolute";
    myDigitalCv.style.background = "rgba(123,153,63,.9)";
    myDigitalCv.style.color = "white";
  } else if (btn) {
    document.location.reload();
  }
});
/* close the box */
let closeMyBox = document.querySelector(".close-myBox");
closeMyBox.addEventListener("click", function() {
  document.location.reload();
});
