 (() => {
function lighter(rootElementId) {
    const rootElement = document.querySelector("#" + rootElementId);
    const elements = rootElement.querySelectorAll('.lighter__light');
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
     
     element.addEventListener('click', toggleOn);
    }
}



lighter('lighter1');
lighter('lighter2');
lighter('lighter3');
})();  