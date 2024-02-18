document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link-container .link');
    const titlePage = document.querySelector('.titlepage');

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
    
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
      output.innerHTML = this.value;
    }

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
