    document.addEventListener('DOMContentLoaded', function () {
        
        const links = document.querySelectorAll('.link-container .link');

        function addBlurToOtherLinks(event) {
            links.forEach(link => {
                if (link !== event.target) {
                    link.style.filter = 'blur(5px)';
                }
            });
        }

     
        function removeBlurFromLinks() {
            links.forEach(link => {
                link.style.filter = '';
            });
        }

        links.forEach(link => {
            link.addEventListener('mouseenter', addBlurToOtherLinks);
            link.addEventListener('mouseleave', removeBlurFromLinks);
        });
    });


    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('.link-container .link');

        function scaleUpLink(event) {
            event.target.style.transform = 'scale(1.5)';
            event.target.style.transition = 'transform 0.3s ease'; 
        }

      
        function resetLinkScale(event) {
            event.target.style.transform = 'scale(1)'; 
        }

        links.forEach(link => {
            link.addEventListener('mouseenter', scaleUpLink);
            link.addEventListener('mouseleave', resetLinkScale);
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const slider = document.getElementById('brightness-slider');

        slider.addEventListener('input', function() {
            const brightnessValue = slider.value;
            document.documentElement.style.filter = `brightness(${brightnessValue}%)`;
        });
    });


    

