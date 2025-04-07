const slides = [
    {   //Slide 1
        video: "../srcs/img3/img3_1.mp4",
        text: `Learn how to control <strong>lights</strong> with mBot2.`,
        className: ""
    },
    {   //Slide 2
        image: "../srcs/img3/img3_2.png",
        text: `What is light? Why is it important?<br>
        Do you know some light sources?`,
        className: ""
    },
    {   //Slide 3
        image: "../srcs/img3/img3_3.png",
        text: `How does mBot2 emit light?`,
        className: "anim-shake"
    },
    {   //Slide 4
        image: "../srcs/img3/img3_4.png",
        text: `The mBot2 uses five <strong>LED</strong> to emit light!<br>
        What is an <i title="Light-Emitting Diode">LED</i>? Where else do you find them?`,
        className: ""
    },
    {   //Slide 5
        video: "../srcs/img3/img3_5.mp4",
        text: `Let’s start coding!<br>
        Create a program that plays an LED animation!`,
        className: ""
    },
    {   //Slide 6
        image: "../srcs/img3/img3_6.png",
        text: `Drag the following blocks to the workspace.<br>
        What happens when you press the Button A in mBot2?`,
        className: ""
    },
    {   //Slide 7
        image: "../srcs/img3/img3_7.png",
        text: `Try all the other animations.<br>
        Which is your favorite?`,
        className: ""
    },
    {   //Slide 8
        image: "../srcs/img3/img3_8.png",
        text: `Change the second block to the display block.<br>
        Press the Button A in mBot2 and see what happens.`,
        className: ""
    },
    {   //Slide 9
        image: "../srcs/img3/img3_9.png",
        text: `When you click in one color, an individual led editor will display.<br>
        Change the colors and try your code!`,
        className: ""
    },
    {   //Slide 10
        image: "../srcs/img3/img3_10.png",
        text: `Your mBot2 is living in Peru, so let’s display the Peruvian flag!`,
        className: ""
    },
    {   //Slide 11
        image: "../srcs/img3/img3_11.png",
        text: `This code will display the Peruvian flag!<br>
        Let’s try the Mexican flag, do you remember the colors?`,
        className: ""
    },
    {   //Slide 12
        image: "../srcs/img3/img3_12.png",
        text: `This code will display the Mexican flag!<br>
        Which flag is it like? Let’s try the French flag, do you remember the colors?`,
        className: ""
    },
    {   //Slide 13
        image: "../srcs/img3/img3_13.png",
        text: `This code will display the French flag!<br>
        Finally, let’s try the German flag, do you remember the colors?`,
        className: ""
    },
    {   //Slide 14
        image: "../srcs/img3/img3_14.png",
        text: `This code will display the German flag!<br>
        How does black look like?`,
        className: ""
    },
    {   //Slide 15
        video: "../srcs/img3/img3_15.mp4",
        text: `Let’s code a sequence of colors!<br>
        We will program a traffic light.`,
        className: ""
    },
    {   //Slide 16
        image: "../srcs/img3/img3_16.png",
        text: `Drag the following blocks to the workspace.<br>
        This code will display red color for 1 second, then turn of all LED.`,
        className: ""
    },
    {   //Slide 17
        image: "../srcs/img3/img3_17.png",
        text: `Add two more blocks. Change the time and color to match a traffic light!<br>
        What happens after yellow?`,
        className: ""
    },
    {   //Slide 18
        image: "../srcs/img3/img3_18.png",
        text: `From Control blocks, drag the <strong>forever loop</strong> and wrap all the display blocks.<br>
        What is a loop?`,
        className: ""
    },
    {   //Slide 19
        image: "../srcs/img3/img3_19.png",
        text: `Drag the following blocks to the workspace. Press the space key in your keyboard.<br>
        What is the difference?`,
        className: ""
    },
    {   //Slide 20
        image: "../srcs/img3/img3_20.png",
        text: `Red light will not turn off. Add a delay and change the color to green.<br>
        What is a delay?`,
        className: ""
    },
    {   //Slide 21
        image: "../srcs/img3/img3_21.png",
        text: `Complete the traffic light code with delays.<br>
        The last one is important?`,
        className: ""
    },
    {   //Slide 22
        video: "../srcs/img3/img3_22.mp4",
        text: `<strong>Challenge:</strong> Red light, green light!<br>
        mBot2 moves on green light and stops on red light.`,
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