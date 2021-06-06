const panels = document.querySelectorAll('.panel')

window.onload = function() {
    document.getElementById("music").play();
}
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    })

})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}