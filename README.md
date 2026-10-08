# FORGE — Gym Members Dashboard

A responsive dashboard for managing gym members and subscription records using HTML, CSS, JavaScript and browser localStorage.

## Features
- Add, edit and delete member records
- Search by member name or subscription type
- Store records locally in your browser
- Responsive interface with a new dark-and-lime gym design
- Form reset wired to the original `clearData()` function

## Original JavaScript preservation
**`main.js` is exactly the same file as in the original project** (including every comment, variable, function and whitespace). Only the HTML layout and CSS styling were redesigned. No external JavaScript functionality was rewritten.

## Run
Open `index.html` or deploy the repository root to GitHub Pages. Bootstrap, Font Awesome and SweetAlert2 are loaded from CDNs, so an internet connection is needed for their UI/alerts.

## Known original limitations
- The member image field is present but original `main.js` saves the same default image for every record.
- Member notes are required by the original `addProduct()` validation.
- Data is stored in browser localStorage, not a server. It is not shared across devices.
- This is a front-end demonstration, not a real gym backend.
