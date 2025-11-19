# 🚨 Emergency Service Directory

A modern and responsive **Emergency Service web application** where users can quickly access important national emergency numbers, call them, copy them, and view call history in real time.  
Built with **HTML, Tailwind CSS (CDN), Font Awesome & Vanilla JavaScript**.

---

## 🚀 Live Demo

🔗 **https://rummaninfo.github.io/assignment-5/**

---

## 🖼️ Screenshot

![App Screenshot](https://your-screenshot-link.com)

> Replace this link with an actual screenshot URL.

---

## 📝 Overview

This project is an interactive **Emergency Contacts Directory** that includes:

- National Emergency Service (999)
- Police
- Fire Service
- Ambulance
- Women & Child Helpline
- Anti-Corruption
- Electricity Outage
- NGO Helpline
- Bangladesh Railway

Each service card includes a **Copy** button and a **Call** button with live counters and a call history panel.

---

## ⭐ Features

- ❤️ **Increase Likes**  
  Clicking any heart icon adds +1 to the total heart counter.

- 📞 **Call Button With Coin System**  
  - Each call costs **20 coins**.  
  - If coins are less than 20 → a Bangla warning alert appears.  
  - On calling → shows alert with service name + number.  
  - Deducts 20 coins live.

- 🧾 **Call History Panel**  
  - Adds name + number + real-time clock on every call.  
  - Time updates every second automatically.  
  - **Clear** button removes all history instantly.

- 📋 **Copy Button**  
  - Copies phone number using `navigator.clipboard.writeText()`  
  - Shows Bangla alert: “নতুন কপি করা হয়েছে {number}”  
  - Increases copy count in the navbar.

- 🎨 **Responsive UI**  
  - Tailwind CSS CDN for clean responsive layout  
  - Grid layout on desktop, stacked layout on mobile

---

## 🛠️ Tech Stack

### Frontend
- HTML5  
- Tailwind CSS (CDN)  
- Font Awesome Icons  
- Vanilla JavaScript    

### No Backend Required  
This is a fully static frontend project.

---

## 📂 Main Files

- **index.html** → Main UI  
- **link.js** → All JavaScript logic  
- **assets/** → Images and icons  
- **tailwind.config.js** (optional)

---

## 🔍 Core JavaScript Logic

### ❤️ Heart (Love) Counter
```js
let btn = document.getElementsByClassName("heart-icon");
for (let button of btn) {
    button.addEventListener('click', function () {
        let love = document.getElementById("love").innerText;
        document.getElementById("love").innerText = Number(love) + 1;
    });
}
