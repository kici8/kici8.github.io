// DOM Strings
{
DOMStings = {
  nav: {
    logo: "#header__logo",
    logoName: "#header__logo__name",
    menu: "#nav",
    trigger: "#nav--trigger",
    toggle: {
      active: "active", // no class selector
      show: "show" // no class selector
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



// Header on scroll position
var transformHeaderOnScroll = function() {
  var y = window.scrollY;
  if (y >= 200) {
    removeClass (DOMStings.nav.logoName, DOMStings.nav.toggle.show);
    removeClass (DOMStings.nav.logo, DOMStings.nav.toggle.show);
  } else {
    addClass (DOMStings.nav.logoName, DOMStings.nav.toggle.show);
    addClass (DOMStings.nav.logo, DOMStings.nav.toggle.show);
  }
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


window.addEventListener("scroll", transformHeaderOnScroll);


