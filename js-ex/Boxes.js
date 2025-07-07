//        Given 5 boxes, Assign a random color and a random background to each box using DOM concepts
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    // Generate a random color
    const randomColor = `#${Math.round(Math.random() * 16777215).toString(16)}`;
    // Generate a random background color
    const randomBackground = `#${Math.round(Math.random() * 16777215).toString(16)}`;

    // Assign the random color and background to the box
    box.style.color = randomColor;
    box.style.backgroundColor = randomBackground;
});