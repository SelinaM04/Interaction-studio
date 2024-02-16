document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link-container .link');

    links.forEach(link => {
        link.addEventListener('mouseenter', function(event) {
           
            addBlurToOtherLinks(event);
          
            scaleUpLink(event);
        });
        link.addEventListener('mouseleave', function(event) {
            
            removeBlurFromLinks();
           
            resetLinkScale(event);
        });
    });



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

    function scaleUpLink(event) {
        event.target.style.transform = 'scale(1.5)';
        event.target.style.transition = 'transform 0.3s ease';
    }

    function resetLinkScale(event) {
        event.target.style.transform = 'scale(1)';
    }
});
