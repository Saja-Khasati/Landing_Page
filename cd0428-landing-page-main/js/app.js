/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 */
const navbar = document.querySelector(".navbar__menu");
// select the main ul list
const navList = document.querySelector("#navbar__list");

// select all sections
const sections = document.querySelectorAll("section");

// select the main element
const mainContent = document.getElementsByTagName("main")[0];

// Select the hamburger menu icon
const hamburger = document.querySelector(".hamburger");

// Get the scroll to top button element
const scrollToTop = document.getElementById("scrollToTopBtn");

// change title's text and style
const mainHeading = document.querySelector("h1");
mainHeading.textContent = "Landing Page Project";
mainHeading.style.fontStyle = "italic";

// remove active class fron all sections at the begining
sections.forEach((sec) => sec.classList.remove("your-active-class"));
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// create new section
function createSection(num) {
  // Create a unique section ID based on the section number
  const sectionId = `section${num}`;
  // Set the display name for the section
  const sectionNav = `section ${num}`;
  // HTML structure for the new section
  const sectionHTML = `<section id="${sectionId}" data-nav="${sectionNav}">
      <div class="landing__container">
        <h2>${sectionNav}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>`;
  // insert the new section at the end of the main content
  mainContent.insertAdjacentHTML("beforeend", sectionHTML);

  // Add a corresponding navigation item for the new section
  buildTheNav(document.getElementById(sectionId));
}

function addNewSection() {
  // Get the last element within the main content
  const lastSection = mainContent.lastElementChild;

  let lastSectionId ;

  // Get the id for last element if it exists
  if(lastSection){
     lastSectionId =  lastSection.id;
  }else{
    lastSectionId =  null;
  }
  // Initialize section number to 1 by default
  let sectionNumber = 1;

  if (lastSectionId) {
    // If there is a last section, extract its number and increment by 1
    sectionNumber = Number(lastSectionId.replace("section", "")) + 1;
  }

  // Create the new section with the calculated section number
  createSection(sectionNumber);
}

// build the nav for new section
function buildTheNav(section) {
  //create list item element
  const elements = document.createElement("li");
  // Get the section's unique ID and data-nav attribute
  const sectionId = section.id;
  const sectionNav = section.dataset.nav;
  // add html to li
  elements.innerHTML = `<a href="#${sectionId}" class="menu__link" data-section-id="${sectionId}">${sectionNav}</a>`;
  // append new Li to the UL
  navList.appendChild(elements);
  // Call a function to get the specific new section
  getSection(elements);
}

/**
 * End Helper Functions
 * 
  // -----------------------------------------------------------------------------------------------

 * Begin Main Functions
 *
 */
function buildTheMainNav() {
  // Loop through each section in the sections NodeList
  sections.forEach((section) => {
    //create list item element
    const elements = document.createElement("li");
    // Get the unique ID and data-nav attribute of the section
    const sectionId = section.id;
    const sectionNav = section.dataset.nav;
    // add html to li
    elements.innerHTML = `<a href="#${sectionId}" class="menu__link" data-section-id="${sectionId}">${sectionNav}</a>`;
    // append new Li to the UL
    navList.appendChild(elements);
    // Call getSection to get the specific section
    getSection(elements);
  });
}
//---------------------------------------------------------------------------------------------------

function getSection(elements) {
  // Add a click event listener to the navigation item
  elements.addEventListener("click", function (evt) {
    // Prevent the default link behavior (jumping instantly)
    evt.preventDefault();
    // Get the section ID from the clicked link's data attribute
    const sectionID = document.getElementById(evt.target.dataset.sectionId);
    // Scroll the corresponding section into view smoothly
    sectionID.scrollIntoView({ behavior: "smooth" });
    // Call a function to highlight the active section and corresponding navigation link
    addActiveClass(sectionID.id);
  });
}
// --------------------------------------------------------------------------------------------------

// Add class 'active' to section when near top of viewport
function addActiveClass(sectionID) {
  // Select all sections and their corresponding navigation links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".menu__link");

  // Remove the active class from all sections
  sections.forEach((sec) => sec.classList.remove("your-active-class"));

  // Remove the active class from all navigation links
  navLinks.forEach((link) => link.classList.remove("link_active"));

  // Get the current section by ID
  const section = document.getElementById(sectionID);

  if (section) {
    // Add the active class to the current section
    section.classList.add("your-active-class");

    // Select the corresponding navigation link using its href attribute
    const navLink = document.querySelector(`.menu__link[href="#${sectionID}"]`);

    if (navLink) {
      // Add the active class to the current navigation link
      navLink.classList.add("link_active");
    }
  }
}

// -----------------------------------------------------------------------------------------------

/**
 * End Main Functions
 * Begin Events
 *
 */

// Function to throttle scroll events (limits execution of the function)
function throttle(func, delay) {
  // Tracks the last time the function was executed
  let lastTime = 0;
  return function () {
    // Get the current timestamp
    const now = new Date().getTime();
    // Check if the delay period has passed
    if (now - lastTime >= delay) {
      // Update the last execution time
      lastTime = now;
      // Call the function with the correct context and arguments
      func.apply(this, arguments);
    }
  };
}

// Scroll event listener to highlight sections and nav links
window.addEventListener(
  "scroll",
  throttle(() => {
    // Get all section elements
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect(); // Get the position of the section relative to the viewport
      // Check if the section is in view (i.e., its top is within the viewport)
      if (rect.top >= -150 && rect.top <= window.innerHeight / 2) {
        // Call function to set the active class for the current section and its nav link
         addActiveClass(section.id);
      }
    });
  }, 100) // Throttle the event to run at most once every 100ms
);
//----------------------------------------------------------------------------------------------
// Build menu

buildTheMainNav();

// ---------------------------------------------------------------------------------------------


// Show the button when the user scrolls down 50px from the top of the document
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 50 || 
    document.documentElement.scrollTop > 50
  ) {
    scrollToTop.style.display = "block"; // Show the button
  } else {
    scrollToTop.style.display = "none"; // Hide the button
  }
});

// Smooth scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll effect
  });
});

//-----------------------------------------------------------------------
/**
 * Event listener for the hamburger menu click.
 * Toggles the 'active' class on both the hamburger icon and nav list
 * to show or hide the mobile menu.
 */
// select all nav links main and new added 
const navbarList = document.querySelector("#navbar__list");

hamburger.addEventListener("click", () => {
  // Toggles the active state for the hamburger icon
  hamburger.classList.toggle("active");
  // Toggles the active state for the navigation menu
  navbarList.classList.toggle("active");
});
// Select all nav links within the #navbar__list and loop through each
document.querySelectorAll("#navbar__list li a").forEach((link) =>
  link.addEventListener("click", () => {
    // When a nav link is clicked, close the mobile menu by removing 'active' classes
    hamburger.classList.remove("active");
    navbarList.classList.remove("active");
  })
);
