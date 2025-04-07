const slides = [
    {   //Slide 1
        video: "../srcs/img4/img4_1.mp4",
        text: `Learn how to make <strong>sounds</strong> with mBot2.`,
        className: ""
    },
    {   //Slide 2
        image: "../srcs/img4/img4_2.jpg",
        text: `How is sound produced? Can we hear all sounds?<br>
        What makes sounds different?`,
        className: ""
    },
    {   //Slide 3
        image: "../srcs/img4/img4_3.png",
        text: `How does mBot2 produce sounds?`,
        className: "anim-shake"
    },
    {   //Slide 4
        image: "../srcs/img4/img4_4.png",
        text: `The mBot2 uses a <strong>speaker</strong> to produce sounds!<br>
        What is a speaker? Where else do you find them?`,
        className: ""
    },
    {   //Slide 5
        video: "../srcs/img4/img4_5.mp4",
        text: `Let’s start coding!<br>
        Create a program that plays a sound!`,
        className: ""
    },
    {   //Slide 6
        image: "../srcs/img4/img4_6.png",
        text: `Drag the following blocks to the workspace.<br>
        What happens when you press the <strong>space key</strong> in your keyboard?`,
        className: ""
    },
    {   //Slide 7
        image: "../srcs/img4/img4_7.png",
        text: `Try some of the other sounds.<br>
        Which ones do you like?`,
        className: ""
    },
    {   //Slide 8
        image: "../srcs/img4/img4_8.png",
        text: `Change the <strong>space</strong> key to the <strong>h</strong> key.<br>
        Now the sound will be activated with this key.`,
        className: ""
    },
    {   //Slide 9
        image: "../srcs/img4/img4_9.png",
        text: `Add more event and sound blocks.<br>
        Interact with your classmates using sounds!`,
        className: ""
    },
    {   //Slide 10
        image: "../srcs/img4/img4_10.png",
        text: `Drag these blocks to the workspace.<br>
        What does <strong>until done</strong> mean?`,
        className: ""
    },
    {   //Slide 11
        image: "../srcs/img4/img4_11.png",
        text: `Add the LED blocks to see the difference.<br>
        Red color appears before the sound, but green at the same time.`,
        className: ""
    },
    {   //Slide 12
        video: "../srcs/img4/img4_12.mp4",
        text: `Let’s create a voice recorder with mBot2!<br>
        We will speak and mBot2 will repeat.`,
        className: ""
    },
    {   //Slide 13
        image: "../srcs/img4/img4_13.png",
        text: `Drag the following blocks to the workspace<br>
        Button B will start the recording, the limit is 10 seconds.`,
        className: ""
    },
    {   //Slide 14
        image: "../srcs/img4/img4_14.png",
        text: `To visually identify the process, add a display red block, this color indicates that recording started.`,
        className: ""
    },
    {   //Slide 15
        image: "../srcs/img4/img4_15.png",
        text: `Drag these blocks to stop recording when button A is pressed. Green color indicates that recording is over.`,
        className: ""
    },
    {   //Slide 16
        image: "../srcs/img4/img4_16.png",
        text: `Drag these blocks to play recording when joystick is pressed. Blue color indicates that recording is being played.`,
        className: ""
    },
    {   //Slide 17
        image: "../srcs/img4/img4_17.png",
        text: `Test your program with your classmates.<br>
        Send them a nice message!`,
        className: ""
    },
    {   //Slide 18
        image: "../srcs/img4/img4_18.png",
        text: `Learn the difference between <strong>set</strong> and <strong>increase</strong> blocks. The minimum volume is 0 and the maximum is 100.`,
        className: ""
    },
    {   //Slide 19
        image: "../srcs/img4/img4_19.png",
        text: `If you check the volume box, a <strong>variable</strong> will appear in the stage. This number is the current volume.`,
        className: ""
    },
    {   //Slide 20
        image: "../srcs/img4/img4_20.png",
        text: `Drag the following blocks to increase the volume.<br>
        Is there a block to decrease the volume?`,
        className: ""
    },
    {   //Slide 21
        image: "../srcs/img4/img4_21.png",
        text: `To decrease the volume, change the <strong>10</strong> to <strong>-10</strong>.<br>
        Test your updated program!`,
        className: ""
    },
    {   //Slide 22
        image: "../srcs/img4/img4_22.png",
        text: `<strong>Challenge:</strong> Change the audio speed when the joystick is pulled left and right.<br>
        Add colors to all directions!`,
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