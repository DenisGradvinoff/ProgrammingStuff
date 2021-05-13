(() => {

 const elements = document.querySelectorAll('.lighter__light');
 const ACTIVE_CLASS_NAME = 'lighter__light_active';

 function toggleOff() {
    for (const element of elements) {
        element.classList.remove(ACTIVE_CLASS_NAME);
    }
}

function toggleOn() {
    toggleOff();
    this.classList.add(ACTIVE_CLASS_NAME);
}


for (const element of elements) {
    console.log(element);
    element.addEventListener('click', toggleOn);
}
})();