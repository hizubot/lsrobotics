const slides = [
    {   //Slide 1
        image: "../srcs/img5/img5_1.png",
        text: `Learn how to <strong>sense</strong> light with mBot2.`,
        className: ""
    },
    {   //Slide 2
        video: "../srcs/img5/img5_2.mp4",
        text: `What is a sensor? Do we have sensors?<br>
        What is their importance in robotics?`,
        className: ""
    },
    {   //Slide 3
        image: "../srcs/img5/img5_3.png",
        text: `How does mBot2 sense light?`,
        className: "anim-shake"
    },
    {   //Slide 4
        image: "../srcs/img5/img5_4.png",
        text: `The mBot2 uses a <strong>light sensor</strong> to sense light!<br>
        What is a light sensor? Where else do you find them?`,
        className: ""
    },
    {   //Slide 5
        image: "../srcs/img5/img5_5.png",
        text: `Let’s start coding!<br>
        Create a program that measure the light!`,
        className: ""
    },
    {   //Slide 6
        image: "../srcs/img5/img5_6.png",
        text: `Check the <strong>ambient light intensity</strong> box, a variable will appear in the stage.<br>
        Is it constant?`,
        className: ""
    },
    {   //Slide 7
        image: "../srcs/img5/img5_7.png",
        text: `Move your robot, cover its back and tilt it in different directions.<br>
        How does the <strong>variable</strong> change?`,
        className: ""
    },
    {   //Slide 8
        image: "../srcs/img5/img5_8.png",
        text: `Make a variable with the name <strong>light</strong>. This variable will store the sensor data.`,
        className: ""
    },
    {   //Slide 9
        image: "../srcs/img5/img5_9.png",
        text: `New blocks will appear, and the variable will be displayed in the upper left corner of the stage.`,
        className: ""
    },
    {   //Slide 10
        image: "../srcs/img5/img5_10.png",
        text: `Drag the following blocks. This script will store the <strong>ambient light intensity</strong> in the variable <strong>light</strong>.`,
        className: ""
    },
    {   //Slide 11
        image: "../srcs/img5/img5_11.png",
        text: `Add a <strong>forever loop</strong> to update constantly the variable. Otherwise, it will store the value only once.`,
        className: ""
    },
    {   //Slide 12
        image: "../srcs/img5/img5_12.png",
        text: `We will use the screen to display the light value.<br>
        This is the label block, it can display up to 8 different labels.`,
        className: ""
    },
    {   //Slide 13
        image: "../srcs/img5/img5_13.png",
        text: `There are three labels with different text, position and size. Analyze their differences.`,
        className: ""
    },
    {   //Slide 14
        image: "../srcs/img5/img5_14.png",
        text: `Add a <strong>show label</strong> block and set the text to the variable.`,
        className: ""
    },
    {   //Slide 15
        image: "../srcs/img5/img5_15.png",
        text: `Drag the <strong>join</strong> block and change its first text, the second text will be the variable.`,
        className: ""
    },
    {   //Slide 16
        image: "../srcs/img5/img5_16.png",
        text: `Test your light detector by moving your mBot2.<br>
        What are its maximum and minimum values?`,
        className: ""
    },
    {   //Slide 17
        image: "../srcs/img5/img5_17.png",
        text: `Analyze this <strong>flowchart</strong>, there is a <strong>conditional</strong> structure and a <strong>loop</strong>.<br>
        Can you explain it?`,
        className: ""
    },
    {   //Slide 18
        image: "../srcs/img5/img5_18.png",
        text: `Compare this mBlock script with the previous flowchart. Understand its structure.`,
        className: ""
    },
    {   //Slide 19
        image: "../srcs/img5/img5_19.png",
        text: `Considering 50 as the threshold; light could be <strong>less than</strong>, <strong>greater than</strong> or <strong>equal</strong>. `,
        className: ""
    },
    {   //Slide 20
        image: "../srcs/img5/img5_20.png",
        text: `Drag the following blocks. This is the conditional structure using the light variable and LED blocks.`,
        className: ""
    },
    {   //Slide 21
        image: "../srcs/img5/img5_21.png",
        text: `Drag the conditional structure under the label block and test your mBot2!`,
        className: ""
    },
    {   //Slide 22
        video: "../srcs/img5/img5_22.mp4",
        text: `<strong>Challenge:</strong> Play your voice recording when the light sensor detects a high value.`,
        className: ""
    },
];

const imageCache = [];
let currentSlide = 0;
let endSlideOn = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("slide-total").textContent = slides.length;
    preloadMedia();
    updateSlide();
});

function preloadMedia() {
    slides.forEach((slide, index) => {
        if (slide.image) {
            imageCache[index] = new Image();
            imageCache[index].src = slide.image;
        }
    });
    const extraImage = new Image();
    extraImage.src = "../srcs/trophy.png";
}

function updateSlide() {
    const container = document.querySelector(".image-center");
    let mediaElement = document.getElementById("slide-media");
    const currentSlideData = slides[currentSlide];

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

    document.getElementById("slide-number").textContent = String(currentSlide + 1).padStart(2, '0');
    mediaElement.className = currentSlideData.className || "";
}

function endSlide() {
    const container = document.querySelector(".image-center");
    let mediaElement = document.getElementById("slide-media");

    if (!mediaElement || mediaElement.tagName !== "IMG") {
        container.innerHTML = `<img id="slide-media" alt="End slide image">`;
        mediaElement = document.getElementById("slide-media");
    }

    mediaElement.src = "../srcs/trophy.png";
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
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    } else {
        endSlide();
        endSlideOn=1;
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        if (endSlideOn) {
            currentSlide++;
            endSlideOn=0;
        }
        updateSlide();
    }
}