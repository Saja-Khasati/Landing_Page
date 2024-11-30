#  Landing Page Project

This project showcases advanced DOM manipulation using vanilla JavaScript (ES6). It includes dynamic navigation building, smooth scrolling, section highlighting, and responsive design. The project follows best practices in web development, such as clean code, modular architecture, and accessibility.

---

##  Features

###  Dynamic Functionality
- **Dynamic Navigation Bar:**  
  Navigation links are programmatically generated based on the number of sections in the page.
  
- **Smooth Scrolling:**  
  Clicking on a navigation link scrolls smoothly to the corresponding section.

- **Section Highlighting:**  
  The section currently in the viewport is highlighted, along with its corresponding navigation link.

- **Add Sections Dynamically:**  
  A button allows users to add new sections to the page, with the navigation menu updating automatically.

- **Scroll-to-Top Button:**  
  A floating button appears when scrolling down, enabling users to return to the top.

---

###  Styling Highlights
- **Responsive Design:**  
  Includes a hamburger menu for mobile devices and responsive typography.

- **Gradient Backgrounds and Animations:**  
  Active sections are highlighted with gradient backgrounds and subtle animations.

- **Smooth Transitions:**  
  Hover and focus effects on navigation and buttons for better interactivity.

---

##  Technologies Used
- **HTML5**: Semantic and accessible structure.
- **CSS3**: Responsive design with SMACSS-based architecture.
- **JavaScript (ES6)**: Dynamic behavior and event handling.

---

##  Project Structure
├── css/
│ └── styles.css # SMACSS-based stylesheet
├── js/
│ └── app.js # JavaScript functionality
├── index.html # Main HTML file

---

## 💻 Sample Code

### Dynamic Section Creation

```javascript
function createSection(num) {
  const sectionId = `section${num}`;
  const sectionNav = `Section ${num}`;
  const sectionHTML = `
    <section id="${sectionId}" data-nav="${sectionNav}">
      <div class="landing__container">
        <h2>${sectionNav}</h2>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
    </section>`;
  mainContent.insertAdjacentHTML("beforeend", sectionHTML);
  buildTheNav(document.getElementById(sectionId));
}

---

### Navigation Highlight on Scroll

function addActiveClass(sectionID) {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".menu__link");

  sections.forEach((sec) => sec.classList.remove("your-active-class"));
  navLinks.forEach((link) => link.classList.remove("link_active"));

  const section = document.getElementById(sectionID);
  if (section) {
    section.classList.add("your-active-class");
    const navLink = document.querySelector(`.menu__link[href="#${sectionID}"]`);
    if (navLink) {
      navLink.classList.add("link_active");
    }
  }
}

---

### Smooth Scroll

elements.addEventListener("click", function (evt) {
  evt.preventDefault();
  const sectionID = document.getElementById(evt.target.dataset.sectionId);
  sectionID.scrollIntoView({ behavior: "smooth" });
  addActiveClass(sectionID.id);
});

---

🌟 How to Run
1. Clone the Repository:

git clone https: https://github.com/Saja-Khasati/Landing_Page.git
cd landing-page

2. Open the Project:
Open index.html in your browser.

3. Test the Features:
  Add new sections using the button.
  Scroll through the page to see the section highlighting.
  Try the responsive navigation on smaller screens.

