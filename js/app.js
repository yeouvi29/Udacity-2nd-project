/** @module addList */

/** will be module:addList~NAVUL */
const NAVUL = document.querySelector(".nav-ul");
/** will be module:addList~FRAGMENT */
const FRAGMENT = document.createDocumentFragment();

/**
 *  Create list elements & append to module:addList~FRAGMENT & add class "nav-li".
 */
const menu = ["Home", "About", "Story", "Likes", "Connect"];
menu.forEach((menu, i) => {
  const NEWLIST = document.createElement("li");

  NEWLIST.innerText = menu;

  FRAGMENT.appendChild(NEWLIST);
  NEWLIST.classList.add("nav-li");
});
/**
 * Append module:addList~FRAGMENT to module:addList_NAVUL
 */
NAVUL.appendChild(FRAGMENT);

/** @module sectionActive */

/* will be module:sectionActive~SECTIONS */
const SECTIONS = document.querySelectorAll("section");

/**
 * @description Make section active
 * @constructor
 * @return Add a class to the active section & remove  a class to other sections.
 */
function activeSection() {
  /**
   * Get each section in module:SectionaActive~SECTIONS' boundary position.
   * Find the section that one's top position is within a range & add a class.
   * Remove classes from other sections.
   */
  for (const section of SECTIONS) {
    const sectionPosition = section.getBoundingClientRect();
    const sectionTop = sectionPosition.top;

    if (sectionTop > -950 && sectionTop <= 0) {
      document.getElementById(section.id).classList.add("highlight");
    } else {
      document.getElementById(section.id).classList.remove("highlight");
    }
  }
}

/**
 * @description A event that calls back the function actveSection() when scroll event occurs
 *
 * @event DOMContentLoadded
 * @event scroll
 * @callback activeSection
 *
 */
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("scroll", function () {
    setTimeout(activeSection(), 0);
  });
});

/** @module clickEvent */

/**
 * @description A list in navigation is clicked, scroll to the designated section
 *
 * @event click
 * @fires scroll to the section with id "title"
 */
document
  .querySelector(".nav-ul li:nth-child(1)")
  .addEventListener("click", function () {
    document
      .getElementById("title")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });

document
  .querySelector(".nav-ul li:nth-child(2)")
  .addEventListener("click", function () {
    document
      .getElementById("about")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });

document
  .querySelector(".nav-ul li:nth-child(3)")
  .addEventListener("click", function () {
    document
      .getElementById("story")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });

document
  .querySelector(".nav-ul li:nth-child(4)")
  .addEventListener("click", function () {
    document
      .getElementById("like")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });

document
  .querySelector(".nav-ul li:nth-child(5)")
  .addEventListener("click", function () {
    document
      .getElementById("connect")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
