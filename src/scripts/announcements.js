 // announcements contained in array
 const announcementsArray = [{
     date: "Tuesday, September 23",
     items: [
         "Welcome to Codify's full stack education program!",
         "This week we will go over the basics of HTML, CSS, and Git.", 
         "HW1 and Project 1 due by 9/29"
     ]
 }, {
    date: "Tuesday, September 30", 
    items: [
        "This week we will be covering JavaScript and the DOM", 
        "HW2 and 2nd portion of Project 1 have not been released yet!"
    ]
 }, {
    date: "Tuesday, October 7",
    items: [
        "Lecture 3 cancelled! Study for Midterms and Rest!",
        "HW2 and 2nd portion of Project 1 have not been released yet!"
    ]
 }, {
    date: "Tuesday, October 14", 
    items: [
        "We will be covering TypeScript",
        "HW 2 and 3 will be combined together, there will be an extension available if needed"
    ]
 }];

 // elements 
 const olderBttn = document.getElementById("older-bttn");
 const newerBttn = document.getElementById("newer-bttn");
 const announcement = document.getElementById("announcements-text");
 const ul = document.getElementById("announcements-list");

 // track which announcement show most recent first 
 let currentIndex = announcementsArray.length - 1;

 // render helper with transition
 function render(withTransition = false) {
     const a = announcementsArray[currentIndex];
     
     if (withTransition) {
         // Start fade out
         announcement.style.opacity = '0';
         announcement.style.transform = 'translateY(-10px)';
         ul.style.opacity = '0';
         ul.style.transform = 'translateY(-10px)';
         
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
             
             // Use requestAnimationFrame to ensure the DOM updates before fading in
             requestAnimationFrame(() => {
                 announcement.style.opacity = '1';
                 announcement.style.transform = 'translateY(0)';
                 ul.style.opacity = '1';
                 ul.style.transform = 'translateY(0)';
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
     }

     olderBttn.disabled = currentIndex === 0;
     newerBttn.disabled = currentIndex === announcementsArray.length - 1;
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
