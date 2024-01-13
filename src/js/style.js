const scrollButton = document.querySelector('#scroll-button');
const navbarLinks = document.querySelectorAll('.navbar-link');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});
scrollButton.addEventListener('click', () => {
    document.body.scrollTop = 0;    // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
});

function createTimedLink(element, callback, timeout) {
    setTimeout(function () {
        callback(element);
    }, timeout);
    return false;
}

function goToHref(element) {
    /* Block code, without 'return false' */
    window.location = element.href;
}

// Add click event to each link
function addClickEvent(link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Avoid default redirection behavior
        createTimedLink(link, goToHref, 500);
    });
}

navbarLinks.forEach(addClickEvent);