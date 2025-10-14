 // announcements contained in array
 const announcementsArray = [{
     date: "Tuesday, September 23",
     items: [
         "This week we will go over the basics of HTML, CSS, and Git.", 
         "HW1 and Project 1 due by 9/29"
     ],
     assignments: {
         homework: {
             text: "HW1: Intro to Git, HTML, CSS",
             url: "https://github.com/Codify-Education-Program/Intro-to-Git-HTML-CSS"
         },
         project: {
             text: "Project 1",
             url: "https://github.com/Codify-Education-Program/Project-1"
         }
     }
 }, {
    date: "Tuesday, September 30", 
    items: [
        "This week we will be covering JavaScript and the DOM", 
        "HW2 and 2nd portion of Project 1 have not been released yet!"
    ],
    assignments: {
        homework: {
            text: "HW2: JavaScript",
            url: "https://classroom.github.com/a/WCTQlTRG"
        }
    }
 }, {
    date: "Tuesday, October 7",
    items: [
        "Lecture 3 cancelled! Study for Midterms and Rest!",
        "HW2 and 2nd portion of Project 1 have not been released yet!"
    ],
    assignments: {
        homework: {
            text: "HW2: JavaScript",
            url: "https://classroom.github.com/a/WCTQlTRG"
        }
    }
 }, {
    date: "Tuesday, October 14", 
    items: [
        "We will be covering TypeScript",
        "HW 2 and 3 will be combined together, there will be an extension available if needed"
    ],
    assignments: {
        homework: {
            text: "HW3: TypeScript",
            url: "https://classroom.github.com/a/2Tbiw7ZY"
        }
    }
 }];

 // elements 
 const olderBttn = document.getElementById("older-bttn");
 const newerBttn = document.getElementById("newer-bttn");
 const announcement = document.getElementById("announcements-text");
 const ul = document.getElementById("announcements-list");
 const assignmentContainer = document.getElementById("assignment-bttn-container");
 const darkModeToggle = document.getElementById("dark-mode-toggle");

 // track which announcement show most recent first 
 let currentIndex = announcementsArray.length - 1;

 // helper function to update assignment buttons
 function updateAssignmentButtons(assignments) {
     // Clear existing buttons
     assignmentContainer.innerHTML = "";
     
     // Add homework button if it exists
     if (assignments.homework) {
         const hwButton = document.createElement("button");
         hwButton.className = "assignment-bttn";
         hwButton.textContent = assignments.homework.text;
         hwButton.onclick = () => window.location.href = assignments.homework.url;
         assignmentContainer.appendChild(hwButton);
     }
     
     // Add project button if it exists
     if (assignments.project) {
         const projectButton = document.createElement("button");
         projectButton.className = "assignment-bttn";
         projectButton.textContent = assignments.project.text;
         projectButton.onclick = () => window.location.href = assignments.project.url;
         assignmentContainer.appendChild(projectButton);
     }
 }

 // render helper with transition
 function render(withTransition = false) {
     const a = announcementsArray[currentIndex];
     
     if (withTransition) {
         // Start fade out
         announcement.style.opacity = '0';
         announcement.style.transform = 'translateY(-10px)';
         ul.style.opacity = '0';
         ul.style.transform = 'translateY(-10px)';
         assignmentContainer.style.opacity = '0';
         assignmentContainer.style.transform = 'translateY(-10px)';
         
         // Wait for fade out animation, then update content
         setTimeout(() => {
             announcement.textContent = `Announcements: ${a.date}`;
             
             // clear then repopulate
             ul.innerHTML = "";
             a.items.forEach(item => {
                 const li = document.createElement("li");
                 li.textContent = item;
                 ul.appendChild(li);
             });
             
             // Update assignment buttons
             updateAssignmentButtons(a.assignments);
             
             // Use requestAnimationFrame to ensure the DOM updates before fading in
             requestAnimationFrame(() => {
                 announcement.style.opacity = '1';
                 announcement.style.transform = 'translateY(0)';
                 ul.style.opacity = '1';
                 ul.style.transform = 'translateY(0)';
                 assignmentContainer.style.opacity = '1';
                 assignmentContainer.style.transform = 'translateY(0)';
             });
         }, 300); // Match CSS transition duration
     } else {
         // Initial render without transition
         announcement.textContent = `Announcements: ${a.date}`;
         
         ul.innerHTML = "";
         a.items.forEach(item => {
             const li = document.createElement("li");
             li.textContent = item;
             ul.appendChild(li);
         });
         
         // Update assignment buttons
         updateAssignmentButtons(a.assignments);
     }

     olderBttn.disabled = currentIndex === 0;
     newerBttn.disabled = currentIndex === announcementsArray.length - 1;
 }

 // Dark mode functionality
 function initDarkMode() {
     // Check localStorage for saved theme preference
     const savedTheme = localStorage.getItem('theme');
     
     if (savedTheme === 'dark') {
         document.documentElement.classList.add('dark-mode');
         document.body.classList.add('dark-mode');
     } else if (savedTheme === 'light') {
         document.documentElement.classList.remove('dark-mode');
         document.body.classList.remove('dark-mode');
     } else {
         // Check user's system preference if no saved preference
         if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
             document.documentElement.classList.add('dark-mode');
             document.body.classList.add('dark-mode');
         }
     }
 }

 function toggleDarkMode() {
     document.documentElement.classList.toggle('dark-mode');
     document.body.classList.toggle('dark-mode');
     
     // Save preference to localStorage
     if (document.body.classList.contains('dark-mode')) {
         localStorage.setItem('theme', 'dark');
     } else {
         localStorage.setItem('theme', 'light');
     }
 }

 // Initialize dark mode on page load
 initDarkMode();

 // Add event listener for dark mode toggle
 darkModeToggle.addEventListener('click', toggleDarkMode);

 // Listen for system theme changes
 if (window.matchMedia) {
     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
         // Only apply system preference if user hasn't set a preference
         if (!localStorage.getItem('theme')) {
             if (e.matches) {
                 document.documentElement.classList.add('dark-mode');
                 document.body.classList.add('dark-mode');
             } else {
                 document.documentElement.classList.remove('dark-mode');
                 document.body.classList.remove('dark-mode');
             }
         }
     });
 }

 // Initialize the page with the most recent announcement
 render();

 // button logic 
 olderBttn.addEventListener("click", () => {
     // In the case we are at the 1st week and there are no weeks before the 1st 
     if (currentIndex > 0) {
         currentIndex--;
         render(true); // Enable transition
     }
 });

 newerBttn.addEventListener("click", () => {
     if (currentIndex < announcementsArray.length - 1) {
         currentIndex++;
         render(true); // Enable transition
     }
 });
