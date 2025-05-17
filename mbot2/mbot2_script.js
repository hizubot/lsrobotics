const activityTitles = {
    "1": "Meet mBot2!",
    "2": "Let's move!",
    "3": "LED show!",
    "4": "Listen to mBot2!",
    "5": "Sensing light!",
    "6": "Display control!",
    "7": "Ultrasonic!",
    "8": "Curved movements!",
  };

const imageCache = [];
let currentSlide = 1;
let endSlideOn = 0;

function getNivelFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('lvl') || "1";
  }

function loadSlidesScript(nivel) {
    const script = document.createElement("script");
    script.src = `mbot2/mbot2_${nivel}.js`;
    script.onload = () => {
        document.getElementById("slide-total").textContent = slides.length;
        preloadMedia();
        updateSlide();
    };
    script.onerror = () => {
        document.getElementById("slide-text").textContent = "This level has not yet been implemented...";
        const container = document.querySelector(".image-center");
        container.innerHTML = `<img id="slide-media" alt="Slide media">`;
        document.getElementById("slide-media").src = "srcs/comm/404.png";
    };
    document.body.appendChild(script);
  }

function preloadMedia() {
    slides.forEach((slide, index) => {
        if (slide.image) {
            imageCache[index] = new Image();
            imageCache[index].src = slide.image;
        }
    });
    const extraImage = new Image();
    extraImage.src = "srcs/comm/trophy.png";
}

function updateSlide() {
    const container = document.querySelector(".image-center");
    let mediaElement = document.getElementById("slide-media");
    const currentSlideData = slides[currentSlide - 1];

    if (currentSlideData.video) {
        if (!mediaElement || mediaElement.tagName !== "VIDEO") {
            container.innerHTML = `<video id="slide-media" autoplay loop muted playsinline></video>`;
            mediaElement = document.getElementById("slide-media");
        }
        mediaElement.src = currentSlideData.video;
    } 
    else if (currentSlideData.image) {
        if (!mediaElement || mediaElement.tagName !== "IMG") {
            container.innerHTML = `<img id="slide-media" alt="Slide media">`;
            mediaElement = document.getElementById("slide-media");
        }
        mediaElement.src = currentSlideData.image;
    }

    let textElement = document.getElementById("slide-text");
    textElement.innerHTML = currentSlideData.text;
    textElement.style.color = "black";

    let textContainer = document.querySelector(".info-box");
    textContainer.style.backgroundColor = "white";

    document.getElementById("slide-number").textContent = String(currentSlide).padStart(2, '0');
    mediaElement.className = currentSlideData.className || "";
}

function endSlide() {
    const container = document.querySelector(".image-center");
    let mediaElement = document.getElementById("slide-media");

    if (!mediaElement || mediaElement.tagName !== "IMG") {
        container.innerHTML = `<img id="slide-media" alt="End slide image">`;
        mediaElement = document.getElementById("slide-media");
    }

    mediaElement.src = "srcs/comm/trophy.png";
    mediaElement.className = "anim-glow-shake";

    let rootStyles = getComputedStyle(document.documentElement);
    let colorBlue = rootStyles.getPropertyValue("--color-blue").trim();

    let textElement = document.getElementById("slide-text");
    textElement.innerHTML = `🎉 Congratulations! 🎉<br>
    You have successfully completed all the steps! 🚀<br>
    Remember to save your project!`;
    textElement.style.color = "white";
    let textContainer = document.querySelector(".info-box");
    textContainer.style.backgroundColor = colorBlue;
}

function nextSlide() {
    if (currentSlide < slides.length) {
        currentSlide++;
        updateSlide();
    } else {
        currentSlide=slides.length+1;
        endSlide();
        endSlideOn=1;
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        if (endSlideOn) {
            endSlideOn=0;
        }
        updateSlide();
    }
}

async function irHome() {
    await registrarAccion("home");
    window.location.href = 'index.html';
}

async function accionNext() {
    await registrarAccion("next");
    nextSlide();
}

async function accionPrev() {
    await registrarAccion("previous");
    prevSlide();
}

document.addEventListener("DOMContentLoaded", function () {
    const nivel = getNivelFromURL();
    const title = activityTitles[nivel] || `Not available`;
    document.title = title;
    loadSlidesScript(nivel);
});