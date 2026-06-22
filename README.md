#  Student Management System

A complete Student Management System built using **HTML, CSS, and JavaScript** for **Frontend** and **C programming** for **Backend implementation**.
This project allows users to manage student records efficiently through a user-friendly interface and a file-based backend system. The application supports adding, searching, updating, deleting, and displaying student records while storing data permanently using file handling in C.

---

##  Project Overview

The Student Management System is designed to simplify the process of maintaining student information.

The project consists of:

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* C Programming
* File Handling using Binary Files (`students.dat`)

The frontend provides an interactive interface, while the backend manages data processing and permanent storage.

---

## 🚀 Features

### Student Record Management

* Add New Student
* Display All Students
* Search Student by Roll Number
* Update Existing Student Details
* Delete Student Records

### Student Information Fields

* Roll No.
* Student Name
* Phone No.
* Course
* Department / Branch
* Semester
* Marks
* Grade

### Additional Features

* Automatic Grade Calculation
* Duplicate Roll Number Prevention
* Permanent Data Storage
* Menu Driven Interface
* Structured Programming Approach
* File Handling Support

---

## 🛠 Technologies Used

| Technology         | Purpose                    |
| ------------------ | -------------------------- |
| C Programming      | Backend Logic              |
| File Handling      | Permanent Data Storage     |
| HTML5              | Structure of Web Interface |
| CSS3               | Styling and Layout         |
| JavaScript         | Frontend Functionality     |
| Code::Blocks 25.03 | Development Environment    |

---

## 📂 Project Structure

```text
Student-Management-System/
│
├── index.html
├── style.css
├── script.js
├── backend c language sms.c
├── students.dat
└── README.md
```

---

##  Functional Modules

### 1. Add Student

Stores a new student record including:

* Roll Number
* Name
* Phone Number
* Course
* Department
* Semester
* Marks
* Grade

### 2. Display Students

Displays all student records in a formatted table.

### 3. Search Student

Searches student details using Roll Number.

### 4. Update Student

Updates existing student information.

### 5. Delete Student

Removes a student record permanently.

---

##  Grade Calculation

Grades are calculated automatically based on marks.

| Marks Range  | Grade |
| ------------ | ----- |
| 90 and Above | A     |
| 75 - 89      | B     |
| 60 - 74      | C     |
| Below 60     | D     |

---

##  Data Storage

The project uses binary file handling in C.

```c
students.dat
```

All student records are stored permanently inside the file, allowing data to remain available even after the program is closed.

---

##  How to Run

### Frontend

1. Download all project files.
2. Open `index.html`.
3. Double-click the file.
4. The project will run in your browser.

### Backend

1. Open Code::Blocks 25.03.
2. Open `student.c`.
3. Build and Run the program.
4. Use the menu options to manage student records.

---

##  Sample Menu

```text
=====================================
     STUDENT MANAGEMENT SYSTEM
=====================================

1. Add Student
2. Display Students
3. Search Student
4. Update Student
5. Delete Student
6. Exit
```

---

##  Learning Outcomes

Through this project, the following concepts were implemented:

* Structures in C
* Functions
* File Handling
* Binary Files
* Menu Driven Programming
* Data Management
* HTML Forms
* CSS Styling
* JavaScript DOM Manipulation
* Frontend and Backend Integration Concepts

---

## Code Alpha Internship Project
Developed as part of my **Code Alpha internship task**.
