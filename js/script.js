// toggle icon



// scroll sections
window.onscroll = () => {
    // sticky header for change color
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}