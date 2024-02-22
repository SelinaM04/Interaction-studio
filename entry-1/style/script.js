document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const secondContent = document.getElementById('second-Content');
    const thirdContent = document.getElementById('third-Content');
    const mask = document.querySelector('.mask');

    // Hide the second and third paragraphs initially
    secondContent.style.display = 'none';
    secondContent.style.opacity = '0';
    thirdContent.style.display = 'none';
    thirdContent.style.opacity = '0';

    function fadeOut(element, callback) {
        let op = 1; // initial opacity
        const timer = setInterval(() => {
            if (op <= 0.01) {
                clearInterval(timer);
                element.style.opacity = '0';
                element.style.display = 'none';
                callback && callback(); // Execute callback after fade out if provided
            } else {
                element.style.opacity = op;
                op -= op * 0.1;
            }
        }, 15);
    }

    function fadeIn(element) {
        element.style.display = 'block';
        let op = 0.01; // initial low opacity for fade in
        const timer = setInterval(() => {
            if (op >= 1) {
                clearInterval(timer);
                element.style.opacity = '1';
            } else {
                element.style.opacity = op;
                op += op * 0.1;
            }
        }, 10);
    }

    // Add click event listeners to paragraphs for fading
    content.addEventListener('click', () => fadeOut(content, () => fadeIn(secondContent)));
    secondContent.addEventListener('click', () => fadeOut(secondContent, () => fadeIn(thirdContent)));

    // Adjust the mask effect based on mouse movement
    document.addEventListener('pointermove', (event) => {
        const x = parseInt(event.clientX / window.innerWidth * 100);
        const y = parseInt(event.clientY / window.innerHeight * 100);
        mask.style.setProperty('--mouse-x', `${x}%`);
        mask.style.setProperty('--mouse-y', `${y}%`);
    });
});


console.log('Script is running');
