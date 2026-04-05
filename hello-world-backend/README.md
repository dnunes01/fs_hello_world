# Hello World Project
## Creating the Most Robust “Hello World” I’ve Built to Date  
I’m currently learning several new technologies, and I wanted a hands‑on project that ties them together in a meaningful way. Rather than building a traditional “Hello World,” I decided to create a small but full‑stack system that forces me to practice real‑world development patterns, troubleshooting, and deployment workflows.

As part of this learning process, I am also intentionally incorporating Microsoft Copilot and GitHub Copilot in VS Code. These AI tools help me explore unfamiliar technologies, generate boilerplate code, improve documentation, and accelerate problem‑solving. I want to be transparent about my use of AI throughout the project, both to demonstrate modern development practices and to show how AI can be integrated responsibly into a real engineering workflow

The goal of this project is simple in output but rich in learning:  
display “Hello World” on my Android phone, using a backend I develop on my desktop and eventually host in the cloud.  
This project gives me practical experience with backend development, containerization, networking, mobile interaction, CI/CD automation, and documentation — all within a manageable scope.

## 🎯 Project Goals
- Build a functional Spring Boot backend that returns a simple message.
- Containerize the backend using Docker for portability and reproducibility.
- Expose the backend so it can be accessed from my Android device.
- Create a minimal Android app (Kotlin) that retrieves and displays the message.
- Implement a Jenkins CI/CD pipeline to automate build, test, and containerization.
- Prepare the project for future cloud hosting.
- Document the entire process using Markdown.

## 🧰 Technologies Used
- Java — Core language for backend logic
- Spring Boot — REST API framework for serving the “Hello World” endpoint
- Docker — Containerization for consistent deployment
- Maven — Build and dependency management
- VS Code — Primary development environment for backend
- Android Studio + Kotlin — Native Android app for consuming the API
- Jenkins — CI/CD automation for building, testing, and containerizing the backend
- Markdown — Documentation and project notes

## 🏗️ High‑Level Architecture
### Backend (Spring Boot)
- Exposes a simple REST endpoint: /api/hello
- Packaged with Maven
- Containerized using Docker
- Designed to run locally, in Docker, or in the cloud
### Mobile App (Android + Kotlin)
- Simple UI with a button
- Makes an HTTP GET request to the backend
- Displays the returned “Hello World” message
- Runs on a Samsung S23 Ultra (or any Android device)
### CI/CD (Jenkins)
- Pipeline‑as‑code using a Jenkinsfile
- Stages include:
- Checkout
- Build (Maven)
- Test (JUnit)
- Package
- Docker Build
- Optional Deploy
- Runs on a single Jenkins node (no HA, no distributed agents)
- Designed to demonstrate enterprise‑style automation without unnecessary complexity
### Networking
- Backend exposed on local network for mobile device access
