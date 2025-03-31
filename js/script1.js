const slides = [
    {   //Slide 1, 12x18 white box transparent
        image: "../srcs/img1/img1_1.png",
        text: `This is <strong>mBot2</strong>, an educational robot!<br>
        What is a robot? Do you know other robots?`,
        className: "anim-shake"
    },
    {   //Slide 2, 20x10 video board
        image: "../srcs/img1/img1_2.png",
        text: `Let’s review the principal components of mBot2.<br>
        How many of them do you recognize?`,
        className: ""
    },
    {   //Slide 3
        image: "../srcs/img1/img1_3.png",
        text: `This is <strong>CyberPi</strong>, the main controller of mBot2. It has all the operation logic.`,
        className: ""
    },
    {   //Slide 4
        image: "../srcs/img1/img1_4.png",
        text: `These are the <strong>sensors</strong>, they take data from the environment and send it to the controller.`,
        className: ""
    },
    {   //Slide 5
        image: "../srcs/img1/img1_5.png",
        text: `These are the <strong>actuators</strong>, specifically the motors. They make the mBot move.`,
        className: ""
    },
    {   //Slide 6
        image: "../srcs/img1/img1_6.png",
        text: `This is the mBot2 shield, it has a battery and many ports to connect sensors and actuators.`,
        className: ""
    },
    {   //Slide 7
        image: "../srcs/img1/img1_7.png",
        text: `This is the mBot2 chassis, it is made of aluminum. It gives a strong structure to the robot.`,
        className: ""
    },
    {   //Slide 8
        image: "../srcs/img1/img1_8.png",
        text: `These are the screws, their function is to join parts together. Look at their differences.`,
        className: ""
    },
    {   //Slide 9
        image: "../srcs/img1/img1_9.png",
        text: `These are the cables, they connect the actuators and sensors to the mBot2 shield.`,
        className: ""
    },

    {   //Slide 10
        image: "../srcs/img1/img1_10.png",
        text: `The tires, wheels and mini wheel allows the robot to move freely.`,
        className: ""
    },
    {   //Slide 11
        image: "../srcs/img1/img1_11.png",
        text: `To start coding, turn on your mBot2.<br>
        Remember to turn it off at the end of the class.`,
        className: ""
    },
    {   //Slide 12
        image: "../srcs/img1/img1_12.png",
        text: `<a href='https://ide.mblock.cc' target='_blank' rel='noopener noreferrer'>Click here</a> to open mBlock IDE, press <strong>Ctrl+Tab</strong> to return here.<br>
        What is an <i title="Integrated Development Environment">IDE</i>?`,
        className: ""
    },
    {   //Slide 13
        image: "../srcs/img1/img1_13.png",
        text: `This is mBlock IDE.<br>
        Let’s review the principal areas.`,
        className: ""
    },
    {   //Slide 14
        image: "../srcs/img1/img1_14.png",
        text: `In the Devices area, delete CyberPi and add mBot2.`,
        className: ""
    },
    {   //Slide 15
        image: "../srcs/img1/img1_15.png",
        text: `Set mBot2 as mostly used device. Next time mBot2 will appear as default device in mBlock.`,
        className: ""
    },
    {   //Slide 16
        image: "../srcs/img1/img1_16.png",
        text: `Click Bluetooth, select your mBot2 and Pair.<br>
        You should be in Live mode.`,
        className: ""
    },
    {   //Slide 17
        image: "../srcs/img1/img1_17.png",
        text: `Open Setting and activate <strong>Block Area Fixed Pattern</strong>.<br>
        Now you always see the available blocks.`,
        className: ""
    },
    {   //Slide 18
        image: "../srcs/img1/img1_18.png",
        text: `Create your mBlock account!<br>
        Click in panda icon and select Google.`,
        className: ""
    },
    {   //Slide 19
        image: "../srcs/img1/img1_19.png",
        text: `Select your Markham account and continue the process.<br>
        You will see your profile icon.`,
        className: ""
    },
    {   //Slide 20
        image: "../srcs/img1/img1_20.png",
        text: `Remember to log in to all classes to save your projects to the cloud.<br>
        Notice the change in the icon.`,
        className: ""
    },
    {   //Slide 21
        image: "../srcs/img1/img1_21.png",
        text: `Click <strong>play hi until done</strong> block.<br>
        What does mBot2 do?`,
        className: ""
    },
];

const imageCache = [];
let currentSlide = 0;

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
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}