document.addEventListener('DOMContentLoaded', function () {
    const titlePage = document.querySelector('.titlepage');
    const links = document.querySelectorAll('.link-container .link');
    const fluxContent = document.querySelector('.flux');
    const hintText = document.querySelector('.hint-text');
    const slider = document.getElementById("myRange");

    function showContentGradually() {
        links.forEach(link => link.style.opacity = 1);
        fluxContent.style.opacity = 1;
        hintText.style.opacity = 1;
        
        setTimeout(() => hintText.style.opacity = 0, 4000);
    }

    function adjustBrightness() {
        const lightness = slider.value;
        titlePage.style.filter = `brightness(${lightness}%)`;
    }

    adjustBrightness();

    slider.oninput = adjustBrightness;

    fluxContent.style.opacity = 0;
    hintText.style.opacity = 0;
    
    setTimeout(() => {
        titlePage.style.opacity = 1;
        setTimeout(showContentGradually, 2000);
    }, 500);

    links.forEach(link => {
        link.addEventListener('mouseenter', event => addBlurToOtherLinks(event));
        link.addEventListener('mouseleave', event => removeBlurFromLinks(event));
    });

    function addBlurToOtherLinks(event) {
        links.forEach(link => {
            if (link !== event.target) link.style.filter = 'blur(5px)';
        });
    }

    function removeBlurFromLinks() {
        links.forEach(link => link.style.filter = '');
    }

    function scaleUpLink(event) {
        event.target.style.transform = 'scale(1.5)'; 
        event.target.style.transition = 'transform 0.5s ease'; 
    }
    
    function resetLinkScale(event) {
        event.target.style.transform = 'scale(1)';
    }

});

links.forEach(link => {
    link.addEventListener('mouseenter', scaleUpLink);
    link.addEventListener('mouseleave', resetLinkScale);
});






