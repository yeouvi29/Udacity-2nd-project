/*             Section Active State                     */

/** 
* @description Add and remonve class "new" 
* When 'scroll' event happens, function 'activeNav()' runs.
* The function activNav() checks every section in the document and caculate the each section's position such as width, height, top, bottom,
* and when the scroll position is in certain section, find the list element in navigation that its name has meet the requirement, and add class "new" to it.
* Every other list elements in navigation's class "new" is also removed.
*/


const sections = document.querySelectorAll("section");


function activeNav() {
    for (const section of sections) {

        const sectionPosition = section.getBoundingClientRect();
        const sectionTop = sectionPosition.top;

        let navId = "menu-" + section.id ;

        if (sectionTop > -810.0625 && sectionTop <= 5) {
            document.getElementById(navId).classList.add("new");           
        } else {
            document.getElementById(navId).classList.remove("new");
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
        document.addEventListener("scroll", function() {
            setTimeout(activeNav(), 0);
        });

    });










