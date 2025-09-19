 // announcements contained in array
 const announcementsArray = [{
     date: "Tuesday, September 23",
     items: [
         "Welcome to Codify's full stack education program!",
         "This week we will go over the basics of HTML, CSS, and Git."
     ]
 }];

 // elements 
 const olderBttn = document.getElementById("older-bttn");
 const newerBttn = document.getElementById("newer-bttn");
 const announcement = document.getElementById("announcements-text");
 const ul = document.getElementById("announcements-list");

 // track which announcement show most recent first 
 let currentIndex = announcementsArray.length - 1;

 // render helper 
 function render() {
     const a = announcementsArray[currentIndex];
     announcement.textContent = `Announcements: ${a.date}`;

     // clear then repopulate
     ul.innerHTML = "";
     a.items.forEach(item => {
         const li = document.createElement("li");
         li.textContent = item;
         ul.appendChild(li);
     });

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
         render();
     }
 });

 newerBttn.addEventListener("click", () => {
     if (currentIndex < announcementsArray.length - 1) {
         currentIndex++;
         render();
     }
 });