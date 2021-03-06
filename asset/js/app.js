// DOM Strings
{
DOMStings = {
  nav: {
    menu: "#nav",
    trigger: "#nav--trigger",
    toggle: {
      active: "active", // no class selector
    }
  }
};



// Toggle a class of a target element
toggleClass = function(t, classToToggle) {
  var element = document.querySelector(t);
  element.classList.toggle(classToToggle);
};

addClass = function(t, classToToggle) {
  var element = document.querySelector(t);
  if (!element.classList.contains(classToToggle)) {
    element.classList.add(classToToggle);
  }
};

removeClass = function(t, classToToggle) {
  var element = document.querySelector(t);
  element.classList.remove(classToToggle);
};

/////////////////////////
// Event Listener

// Nav
document
  .querySelector(DOMStings.nav.trigger)
  .addEventListener("click", function() {
    toggleClass(DOMStings.nav.trigger, DOMStings.nav.toggle.active);
    toggleClass(DOMStings.nav.menu, DOMStings.nav.toggle.active);
  });
}



