const slides = [
    {   //Slide 1
        image: "srcs/img1/img1_1.png",
        text: `This is mBot2, an educational robot!<br>
        What is a robot? Do you know other robots?`,
        className: "anim-shake"
    },
    {   //Slide 2
        image: "srcs/img1/img1_2.png",
        text: `Let’s review the principal components of mBot2.<br>
        How many of them do you recognize?`,
        className: ""
    },
    {   //Slide 3
        image: "srcs/img1/img1_3.png",
        text: `This is CyberPi, the main controller of mBot2. It has all the operation logic.`,
        className: ""
    },
    {   //Slide 4
        image: "srcs/img1/img1_4.png",
        text: `These are the sensors, they take data from the environment and send it to the controller.`,
        className: ""
    },
    {   //Slide 5
        image: "srcs/img1/img1_5.png",
        text: `These are the actuators, specifically the motors. They make the mBot move.`,
        className: ""
    },
    {   //Slide 6
        image: "srcs/img1/img1_6.png",
        text: `This is the mBot2 shield, it has a battery and many ports to connect sensors and actuators.`,
        className: ""
    },
    {   //Slide 7
        image: "srcs/img1/img1_7.png",
        text: `This is the mBot2 chassis, it is made of aluminum. It gives a strong structure to the robot.`,
        className: ""
    },
    {   //Slide 8
        image: "srcs/img1/img1_8.png",
        text: `These are the screws, their function is to join parts together. Look at their differences.`,
        className: ""
    },
    {   //Slide 9
        image: "srcs/img1/img1_9.png",
        text: `These are the cables, they connect the actuators and sensors to the mBot2 shield.`,
        className: ""
    },

    {   //Slide 10
        image: "srcs/img1/img1_10.png",
        text: `The tires, wheels and mini wheel allows the robot to move freely.`,
        className: ""
    },
    {   //Slide 11
        image: "srcs/img1/img1_11.png",
        text: `To start coding, turn on your mBot2.<br>
        Remember to turn it off at the end of the class.`,
        className: ""
    },
    {   //Slide 12
        image: "srcs/img1/img1_12.png",
        text: `<div><a href='https://ide.mblock.cc' target='_blank' rel='noopener noreferrer'>Click here</a> to open mBlock IDE, press <strong>Ctrl+Tab</strong> to return here.<br>
        What is an <span color="blue" title="Integrated Development Environment">IDE</span>?</div>`,
        className: ""
    },
    {   //Slide 13
        image: "srcs/img1/img1_13.png",
        text: `This is mBlock IDE.<br>
        Let’s review the principal areas.`,
        className: ""
    },
    {   //Slide 14
        image: "srcs/img1/img1_14.png",
        text: `In the Devices area, Delete CyberPi and Add mBot2.`,
        className: ""
    },
    {   //Slide 15
        image: "srcs/img1/img1_15.png",
        text: `Set mBot2 as mostly used device. Next time mBot2 will appear as default device in mBlock.`,
        className: ""
    },
    {   //Slide 16
        image: "srcs/img1/img1_16.png",
        text: `Click Bluetooth, select your mBot2 and Pair.<br>
        You should be in Live mode.`,
        className: ""
    },
    {   //Slide 17
        image: "srcs/img1/img1_17.png",
        text: `<div>Open Setting and activate <strong>Block Area Fixed Pattern</strong>.<br>
        Now you always see the available blocks.</div>`,
        className: ""
    },
    {   //Slide 18
        image: "srcs/img1/img1_18.png",
        text: `Create your mBlock account!<br>
        Click in Panda icon and select Google.`,
        className: ""
    },
    {   //Slide 19
        image: "srcs/img1/img1_19.png",
        text: `Select your Markham account and continue the process.<br>
        You will see your profile icon.`,
        className: ""
    },
    {   //Slide 20
        image: "srcs/img1/img1_20.png",
        text: `Remember to log in to all classes to save your projects to the cloud.<br>
        Notice the change in the icon.`,
        className: ""
    },
    {   //Slide 21
        image: "srcs/img1/img1_21.png",
        text: `<div>Click <strong>play hi until done</strong> block.<br>
        What does mBot2 do?<div>`,
        className: ""
    },
];

const imageCache = [];
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("slide-total").textContent = slides.length;
    preloadImages();
    updateSlide();
});

function preloadImages() {
    slides.forEach((slide, index) => {
        imageCache[index] = new Image();
        imageCache[index].src = slide.image;
    });
    const extraImage = new Image();
    extraImage.src = "srcs/trophy.png";
}

function updateSlide() {
    const imgElement = document.getElementById("slide-image");
    imgElement.src = slides[currentSlide].image;

    let textElement = document.getElementById("slide-text");
    textElement.innerHTML = slides[currentSlide].text;
    textElement.style.backgroundColor = "white";
    textElement.style.color = "black";

    document.getElementById("slide-number").textContent = String(currentSlide + 1).padStart(2, '0');

    imgElement.className = slides[currentSlide].className || "";
}

function endSlide() {
    const imgElement = document.getElementById("slide-image");
    imgElement.src = "srcs/trophy.png";
    imgElement.className = "anim-glow-shake";
    let rootStyles = getComputedStyle(document.documentElement);
    let colorBlue = rootStyles.getPropertyValue("--color-blue").trim();
    let textElement = document.getElementById("slide-text");
    textElement.innerHTML = "🎉 Congratulations! 🎉<br>You have successfully completed all the steps! 🚀";
    textElement.style.backgroundColor = colorBlue;
    textElement.style.color = "white";
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