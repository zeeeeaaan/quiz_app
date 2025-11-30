## 📌 Overview

This project is an interactive quiz application designed for students. It provides a smooth user experience, evaluates quiz responses, and stores student results in a CSV file for easy record-keeping. The interface is clean, colorful, and user-friendly, making it suitable for classrooms, training programs, and learning modules.

---

## 🌟 Features

### 🧑‍💻 Student Login

* Students enter their names before starting the quiz.
* Name is used for score tracking.

### 📝 Multiple-Choice Questions

* Quiz contains MCQs with checkbox-based answer selection.
* Smooth navigation between questions using **Next** buttons.

### 📊 Score Calculation

* Final score displayed only after quiz completion.
* Prevents students from checking answers mid-quiz.

### 💾 Result Storage

* Student name and score are saved in a **CSV file** (`results.csv`).
* PHP backend handles data saving.

### 📱 Responsive UI

* Optimized for desktop and mobile screens.
* Clean, colorful, stress-free layout.

---

## 🚀 How to Run the Project

### **1️⃣ Using XAMPP (Recommended)**

Follow these steps to set up the project on a local server.

#### **Install XAMPP**

Download from:
👉 [https://www.apachefriends.org/](https://www.apachefriends.org/)

#### **Move Project Files**

Place the project folder inside:

```
C:\xampp\htdocs\quiz_app\
```

Your directory structure should look like:

```
xampp/
└── htdocs/
    └── quiz_app/
        │── index.html               # Main quiz UI
        │── style.css                # Styling for UI
        │── script.js                # Quiz logic (JS)
        │── save_quiz_result.php     # PHP backend for saving results
        └── results.csv              # Student scores storage
```

#### **Start Apache Server**

1. Open **XAMPP Control Panel**
2. Start **Apache**

#### **Open in Browser**

Navigate to:

👉 **[http://localhost/quiz_app/index.html](http://localhost/quiz_app/index.html)**

---

## 🌐 Hosting & Sharing the Quiz App

### **Option 1: Share Inside Local Network (LAN/WiFi)**

Useful for sharing with students connected to the same WiFi.

#### **Find Your Local IP**

Open CMD and type:

```
ipconfig
```

Look for **IPv4 Address**, for example:

```
192.168.1.10
```

Now, share your quiz using:

👉 **[http://192.168.1.10/quiz_app/index.html](http://192.168.1.10/quiz_app/index.html)**

Any device connected to the same WiFi/LAN can access the quiz through this link.

---

## ➕ Adding More Quiz Questions

You can add or modify questions directly in **index.html** under the quiz section.
Ensure each question block follows the same HTML structure for consistency.

---

## 📂 Project Structure

```
quiz_app/
│── index.html               # Main UI
│── style.css                # Page design & layout
│── script.js                # Quiz mechanics & scoring
│── save_quiz_result.php     # Saves results to CSV
└── results.csv              # Stores name + score
```

---

## 📄 License

This project is free to use, modify, and expand for educational or personal use.


Just tell me!
