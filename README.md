# Hello World Project  
## Building a Full‑Stack, Web‑Based “Hello World” System  

I’m currently learning several new technologies, and I wanted a hands‑on project that ties them together in a meaningful way. Instead of creating a traditional “Hello World,” I decided to build a small but realistic full‑stack system that forces me to practice backend development, frontend development, CI/CD automation, networking, and documentation.

As part of this learning process, I am intentionally incorporating Microsoft Copilot and GitHub Copilot in VS Code. These AI tools help me explore unfamiliar technologies, generate boilerplate code, improve documentation, and accelerate problem‑solving. I want to be transparent about my use of AI throughout the project, both to demonstrate modern development practices and to show how AI can be integrated responsibly into a real engineering workflow.

The goal of this project is simple in output but rich in learning:  
display “Hello World” — and additional dynamic data — in a web application, backed by a Spring Boot API and supported by a Jenkins‑driven CI/CD pipeline.

This project gives me practical experience with backend development, frontend development, containerization, networking, automation, and documentation — all within a manageable scope.

---

## 🎯 Project Goals
- Build a functional Spring Boot backend exposing multiple REST endpoints:
  - `/api/hello`
  - `/api/time`
  - `/api/goodbye`
  - `/api/hello/{name}`
  - `/api/add?x=…&y=…`
- Build a modern Angular frontend that consumes these endpoints and displays the results.
- Containerize the backend using Docker for portability and reproducibility.
- Expose the backend on the local network for testing across devices.
- Implement a Jenkins CI/CD pipeline to automate build, test, packaging, and containerization.
- Prepare the backend for future cloud deployment (Azure, AWS, etc.).
- Document the entire process using Markdown, including architecture, troubleshooting, and lessons learned.

---

## 🧰 Technologies Used
- **Java** — Core language for backend logic  
- **Spring Boot** — REST API framework  
- **Maven** — Build and dependency management  
- **Docker** — Containerization for consistent deployment  
- **Angular** — Web frontend for interacting with the backend  
- **TypeScript** — Primary language for the Angular application  
- **VS Code** — Primary development environment for backend and frontend  
- **Jenkins** — CI/CD automation for building, testing, and containerizing the backend  
- **Markdown** — Documentation and project notes  
- **Microsoft Copilot + GitHub Copilot** — AI‑assisted development, documentation, and troubleshooting  

---

## 🏗️ High‑Level Architecture

### Backend (Spring Boot)
- Exposes multiple REST endpoints for testing, personalization, and simple computation.
- Packaged with Maven and runnable via:
  - Local JVM
  - Docker container
  - Future cloud hosting
- Designed to be stateless and easily portable.
- Accessible on the local network for frontend consumption.

### Frontend (Angular)
- Modern Angular 17+ application using:
  - Standalone components  
  - Signals  
  - Angular Material  
- Provides UI elements to:
  - Display “Hello World”
  - Show server time
  - Personalize messages
  - Perform simple computations
- Communicates with the backend via HTTP GET requests.
- Runs in any browser, including mobile browsers.

### CI/CD (Jenkins)
- Pipeline‑as‑code using a `Jenkinsfile`.
- Stages include:
  - Checkout  
  - Build (Maven)  
  - Test (JUnit)  
  - Package  
  - Docker Build  
  - Optional Deploy  
- Runs on a single Jenkins node (no HA, no distributed agents).
- Demonstrates enterprise‑style automation without unnecessary complexity.

### Networking
- Backend exposed on the local network for frontend access.
- Verified connectivity between:
  - Desktop (backend host)
  - Any device on the same network (frontend client)
- Includes troubleshooting steps for:
  - Firewalls  
  - Port exposure  
  - Local IP changes  
  - Docker networking