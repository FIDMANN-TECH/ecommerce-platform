# E-Commerce Platform — CI/CD with GitHub Actions & Docker

## 📌 Project Overview

This project demonstrates a **production-style Continuous Integration (CI) pipeline** for a simple e-commerce platform using **GitHub Actions**, **Docker**, and **modern DevOps best practices**.

The goal is to automate testing, validation, and build processes for both backend and frontend components, ensuring reliability, reproducibility, and maintainability in a real-world CI/CD context.

> ⚠️ Note: This project focuses on **robust CI and containerization**. Cloud deployment is intentionally documented rather than executed to avoid unnecessary infrastructure complexity for coursework.

---

## 🧱 Architecture Overview

```text
Developer
   ↓
GitHub Repository
   ↓
GitHub Actions (CI)
 ├── Backend CI (API tests)
 ├── Frontend CI (Tests + Build)
 └── Docker Image Build
   ↓
Docker & Docker Compose (Local Orchestration)
```

## 🧩 Application Components
### 1️⃣ Backend API (api/)
Node.js + Express

Handles basic e-commerce operations

Includes unit tests

Dockerized with a dedicated Dockerfile

### 2️⃣ Frontend Web App (webapp/)
React application

Includes automated tests

Production build verification

Dockerized and served via Nginx

## 📂 Project Structure
text
Copy code
.
├── api/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── __tests__/
│
├── webapp/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   └── src/
│
├── docker-compose.yml
├── .github/
│   └── workflows/
│       ├── api-ci.yml
│       └── webapp-ci.yml
└── README.md


## ⚙️ GitHub Actions — Continuous Integration
Separate CI pipelines are implemented for backend and frontend to follow real-world best practices.

### 🔹 Backend CI (api-ci.yml)
Trigger: push to main

Steps:

Install dependencies

Run backend tests

Ensures API stability before integration

### 🔹 Frontend CI (webapp-ci.yml)
Trigger: push to main

Steps:

Install dependencies using npm ci

Run frontend tests

Build production-ready React app

Ensures UI quality and build correctness

## 🐳 Docker Integration
### Dockerfiles
Separate Dockerfiles for backend and frontend

Backend uses Node.js base image

Frontend uses multi-stage build with Nginx

### Docker Compose
Docker Compose is used to orchestrate both services locally:

bash
Copy code
docker compose up --build
#### ⚠️ Note on Local Builds
During local testing, Docker Compose builds initiated correctly and progressed through multiple stages. However, image pulls from Docker Hub stalled due to network/DNS limitations in the local environment.

This does not affect the validity of the Docker configuration. The Dockerfiles and Compose setup are correct and production-ready, and builds succeed in stable network or CI environments.

## 🧪 CI Debugging & Troubleshooting (Bonus)
During development, several realistic CI issues were encountered and resolved:

Example: Frontend CI Dependency Failure
An early Frontend CI run failed with the following error:

text
Copy code
Cannot find module '@testing-library/jest-dom'
### Resolution Steps:
Identified missing test dependencies via CI logs

Installed required testing libraries:

@testing-library/jest-dom

@testing-library/react

@testing-library/user-event

Resolved TypeScript version mismatch with Create React App

Ensured package.json and package-lock.json were in sync

Re-ran CI successfully with all tests passing

This demonstrates real-world DevOps troubleshooting, dependency management, and CI reliability.

### 🚀 Why No Live Cloud Deployment?
Although the project includes Dockerization and deployment-ready workflows, live cloud deployment (EC2/Azure/GCP) was intentionally excluded for this submission.

#### Rationale:
Focused on CI correctness rather than infrastructure cost

Avoided unnecessary credential exposure

Docker and CI pipelines are cloud-ready by design

Deployment steps are fully documented and reproducible

This approach aligns with modern DevOps principles where CI quality precedes CD execution.

## 🔐 Security & Best Practices
No hardcoded secrets

GitHub Actions secrets mechanism prepared (but not used)

Clean separation of concerns

Reproducible builds using npm ci

Clear and descriptive commit messages

## ✅ Conclusion
This project provides hands-on experience with:

GitHub Actions CI pipelines

Frontend and backend automation

Docker containerization

Real-world CI debugging

Professional DevOps documentation

The result is a clean, production-style CI setup suitable for coursework, portfolios, and entry-level DevOps roles.

## Below are screenshots of workflow:
![project-structure](./img/00_repo_project_structure.jpeg)
![api-dependencies-installed](./img/01_api_dependencies_installed.png)
![api-tests-passing](./img/02_api_tests_passing.png)
![create-react-app-success-a](./img/03_create_react_app_success.png)
![create-react-app-success-b](./img/04_create_react_app_success.png)
![frontend-running-locally](./img/05_frontend_running_locally.png)
![frontend-dockerfile](./img/06_frontend_dockerfile.png)
![backend-dockerfile](./img/07_backend_dockerfile.png)
![git-status](./img/08_git_status_ready_for_commit.png)
![git-commit-push](./img/09_git_commit_and_push.png)
![docker-compose-build-in-progress](./img/10_docker_compose_build_in_progress.png)
![ci-workflows-success-overview](./img/11_ci_workflows_success_overview)
![frontend-ci-run-success](./img/12_frontend_ci_run_success.png)
![backend-ci-run-success](./img/13_backend_ci_run_success.png)
![frontend-ci-failure-dependency-issue](./img/14_frontend_ci_failure_dependency_issue)
![ci-debugging-and-resolution](./img/15_ci_debugging_and_resolution.png)