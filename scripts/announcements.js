// Plan of Attack 
// annoucments contained in array
const announcementsArray = [
    {
        date: "Tuesday, September 23", 
        items: [
            "Welcome to Codify's full stack education program!"
        ]
    },
    {
        date: "Tuesday, September 30",
        items:[ "TBD"
        ]
    },
    {
        date: "Tuesday, October 7",
        items: ["TBD"
        ]
    },
    {
        date: "Tuesday, October 14",
        items: ["TBD"
        ]
    },
    {
        date: "Tuesday, October 21",
        items: ["TBD"
        ]
    },
    {
        date: "Tuesday, October 28",
        items: ["TBD"
        ]
    },
    {
        date: "Tuesday, November 4",
        items: ["TBD"
        ]
    },
]; 
// elements 
const olderBttn = document.getElementById("older-bttn"); 
const newerBttn = document.getElementById("newer-bttn"); 
const announcement = document.getElementById("announcements-text");
const li = document.getElementById("announcements-list");
const ul = document.getElementById("announcements-list");

// track which announcement show most recent first 
let currentIndex = announcementsArray.length - 1

// render helper 
function render() {
    const a = announcementsArray[currentIndex];
    announcement.textContent = 'Announcement: ${a.date}'; 

    // clear then repopulate
    li.textContent = ""; 
    a.items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item; 
        ul.appendChild(li); 
    });
    
    olderBttn.disabled = currentIndex === 0; 
    newerBttn.disabled = currentIndex === announcementsArray.length - 1; 
    
}

// insert announcment for that week 
ul.textContent = "";
announcement.textContent = "Announcements: " + announcementsArray[currentIndex];
announcementList.textContent = announcementsArray[currentIndex].items; 

// button logic 

olderBttn.addEventListener("click", () => {
    // In the case we are at the 1st week and there are no weeks before the 1st 
    if (currentIndex > 0) {
        currentIndex--; 
        render();
    }  
    
})

newerBttn.addEventListener("click", () => {
    if (currentIndex < announcementsArray.length - 1) {
        currentIndex++;
        render(); 
    }
});