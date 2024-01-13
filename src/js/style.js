const scrollButton = document.querySelector('#scroll-button');
const navbarLinks = document.querySelectorAll('.navbar-link');

// Display button after scrolling 350px
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Scroll to top
scrollButton.addEventListener('click', () => {
    document.body.scrollTop = 0;    // For Safari
    document.documentElement.scrollTop = 0;     // For Chrome, Firefox, IE and Opera
});

/*
Sets a timer to invoke a given callback function with a specific element 
after a specified time interval
*/
function createTimedLink(element, callback, timeout) {
    setTimeout(() => {
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
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Avoid default redirection behavior
        createTimedLink(link, goToHref, 500);
    });
}
navbarLinks.forEach(addClickEvent);