const container = document.querySelector(".container");
const text = document.querySelector("#text");
const pointer = document.querySelector(".pointer");
const circle = document.querySelector(".circle");

// console.log(document.baseURI);

var audio = new Audio(document.baseURI + "assets/om-edited.mp3");
audio.loop = true;
audio.muted = true;

const totalTime = 6000;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = " Inhale ";
  // console.log('Breath In.........');
  // document.body.style.background = 'linear-gradient(135deg,red 5%,green 75%)';
  container.className = "container grow";
  pointer.style.backgroundColor = "rgb(250, 108, 108";
  circle.style.backgroundColor = "#21120f";

  setTimeout(() => {
    text.innerText = " Pause ";
    pointer.style.backgroundColor = "rgb(243, 233, 100";
    circle.style.backgroundColor = "#252412";
    // console.log('Hoollllllld!');
    // document.body.style.background = 'linear-gradient(135deg,green 5%,red 75%)';

    setTimeout(() => {
      text.innerText = " Exhale Slowly ";
      pointer.style.backgroundColor = "rgb(149, 207, 82)";
      circle.style.backgroundColor = "#101d0f";
      // console.log('Breathe Out........');
      // document.body.style.background = 'linear-gradient(135deg,blue 5%,purple 75%)';
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);

window.addEventListener("online", () =>
  window.alert("Now You can experience this app at it's Best 👍")
);
window.addEventListener("offline", () =>
  window.alert(
    "For full immersive experience use with an internet connection ⚡"
  )
);


window.addEventListener("load", function () {
  audio.muted = false;
  audio.play();

  const b = document.getElementById("b");
  if (!navigator.onLine) {
    window.alert(
      "For full immersive experience use with an internet connection ⚡"
    );
    b.style.background =
      "url(assets/fallback-bg.jpg)  no-repeat center/cover";
  }

  // const permission = confirm('Allow to Play Audio for Immersive Experience');
  // if(permission){
  //     audio.muted = false;
  //     audio.play();
  // }
});
