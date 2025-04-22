const slides = [
    {   //Slide 1
        image: "srcs/mbot2/img5/img5_1.png",
        text: `Learn how to <strong>sense</strong> light with mBot2.`,
        className: ""
    },
    {   //Slide 2
        video: "srcs/mbot2/img5/img5_2.mp4",
        text: `What is a sensor? Do we have sensors?<br>
        What is their importance in robotics?`,
        className: ""
    },
    {   //Slide 3
        image: "srcs/mbot2/img5/img5_3.png",
        text: `How does mBot2 sense light?`,
        className: "anim-shake"
    },
    {   //Slide 4
        image: "srcs/mbot2/img5/img5_4.png",
        text: `The mBot2 uses a <strong>light sensor</strong> to sense light!<br>
        What is a light sensor? Where else do you find them?`,
        className: ""
    },
    {   //Slide 5
        image: "srcs/mbot2/img5/img5_5.png",
        text: `Let’s start coding!<br>
        Create a program that measure the light!`,
        className: ""
    },
    {   //Slide 6
        image: "srcs/mbot2/img5/img5_6.png",
        text: `Check the <strong>ambient light intensity</strong> box, a variable will appear in the stage.<br>
        Is it constant?`,
        className: ""
    },
    {   //Slide 7
        image: "srcs/mbot2/img5/img5_7.png",
        text: `Move your robot, cover its back and tilt it in different directions.<br>
        How does the <strong>variable</strong> change?`,
        className: ""
    },
    {   //Slide 8
        image: "srcs/mbot2/img5/img5_8.png",
        text: `Make a variable with the name <strong>light</strong>. This variable will store the sensor data.`,
        className: ""
    },
    {   //Slide 9
        image: "srcs/mbot2/img5/img5_9.png",
        text: `New blocks will appear, and the variable will be displayed in the upper left corner of the stage.`,
        className: ""
    },
    {   //Slide 10
        image: "srcs/mbot2/img5/img5_10.png",
        text: `Drag the following blocks. This script will store the <strong>ambient light intensity</strong> in the variable <strong>light</strong>.`,
        className: ""
    },
    {   //Slide 11
        image: "srcs/mbot2/img5/img5_11.png",
        text: `Add a <strong>forever loop</strong> to update constantly the variable. Otherwise, it will store the value only once.`,
        className: ""
    },
    {   //Slide 12
        image: "srcs/mbot2/img5/img5_12.png",
        text: `We will use the screen to display the light value.<br>
        This is the label block, it can display up to 8 different labels.`,
        className: ""
    },
    {   //Slide 13
        image: "srcs/mbot2/img5/img5_13.png",
        text: `There are three labels with different text, position and size. Analyze their differences.`,
        className: ""
    },
    {   //Slide 14
        image: "srcs/mbot2/img5/img5_14.png",
        text: `Add a <strong>show label</strong> block and set the text to the variable.`,
        className: ""
    },
    {   //Slide 15
        image: "srcs/mbot2/img5/img5_15.png",
        text: `Drag the <strong>join</strong> block and change its first text, the second text will be the variable.`,
        className: ""
    },
    {   //Slide 16
        image: "srcs/mbot2/img5/img5_16.png",
        text: `Test your light detector by moving your mBot2.<br>
        What are its maximum and minimum values?`,
        className: ""
    },
    {   //Slide 17
        image: "srcs/mbot2/img5/img5_17.png",
        text: `Analyze this <strong>flowchart</strong>, there is a <strong>conditional</strong> structure and a <strong>loop</strong>.<br>
        Can you explain it?`,
        className: ""
    },
    {   //Slide 18
        image: "srcs/mbot2/img5/img5_18.png",
        text: `Compare this mBlock script with the previous flowchart. Understand its structure.`,
        className: ""
    },
    {   //Slide 19
        image: "srcs/mbot2/img5/img5_19.png",
        text: `Considering 50 as the threshold; light could be <strong>less than</strong>, <strong>greater than</strong> or <strong>equal</strong>.`,
        className: ""
    },
    {   //Slide 20
        image: "srcs/mbot2/img5/img5_20.png",
        text: `Drag the following blocks. This is the conditional structure using the light variable and LED blocks.`,
        className: ""
    },
    {   //Slide 21
        image: "srcs/mbot2/img5/img5_21.png",
        text: `Drag the conditional structure under the label block and test your mBot2!`,
        className: ""
    },
    {   //Slide 22
        video: "srcs/mbot2/img5/img5_22.mp4",
        text: `<strong>Challenge:</strong> Play your voice recording when the light sensor detects a high value.`,
        className: ""
    },
];