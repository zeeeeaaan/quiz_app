📌 Project Overview

This is an interactive quiz application built using HTML, CSS, JavaScript, and PHP, designed to test students' knowledge. The app records student names, evaluates their quiz responses, and saves the results in a CSV file for administrative tracking. The user interface is colorful, engaging, and stress-free.

🎯 Features

Login Page: Students enter their names before attempting the quiz.

Multiple-Choice Questions (MCQs): Each question has checkboxes for answer selection.

Next Question Navigation: Students can navigate through questions one by one.

Final Score Calculation: Scores are displayed only after quiz completion.

Data Storage: Student details and scores are saved in a CSV file using PHP.

Responsive UI: Optimized for mobile and desktop screens.

🚀 How to Run the Project
1️⃣ Setup Local Server
Option 1: Using XAMPP
Download and install XAMPP from Apache Friends.
Place all project files inside htdocs/quiz_app/ (inside your XAMPP installation folder).
Start Apache Server using the XAMPP Control Panel.
Open a browser and visit:
🔗 http://localhost/quiz_app/index.html

if you're using XAMPP, the quiz app must be placed inside the htdocs folder.
📌 Correct Folder Structure (XAMPP)
Make sure your files are inside:

C:\xampp\htdocs\quiz_app\

🔹 Steps to Run in XAMPP

C:\xampp\htdocs\quiz_app\
Start XAMPP and Start Apache from the XAMPP Control Panel.
Open a browser and visit:
🔗 http://localhost/quiz_app/index.html

 How to Host and Share Your Quiz App Online
1️⃣ Option 1: Using XAMPP (Local Network - LAN/WiFi)
If you want to share within your local network (WiFi or LAN):

Find your local IP address:
Open Command Prompt (cmd) and type:
ipconfig
Look for the IPv4 Address (e.g., 192.168.1.10).

Share your hosted quiz by replacing localhost with your IP:
http://192.168.1.10/quiz_app/index.html
Other devices on the same WiFi can access the site using this link.
Structure of the directory is as follows:
xampp/htdocs/quiz_app/
│── index.html         # Main UI for the quiz
│── style.css         # Styles for UI/UX
│── script.js         # JavaScript for quiz logic
│── save_quiz_result.php # PHP file to store student results
│── results.csv       # CSV file storing student scores

You can add more quiz questions as per your needs in the html file.
