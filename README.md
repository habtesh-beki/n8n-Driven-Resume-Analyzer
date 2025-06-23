# n8n-Driven Resume Analyzer (Secure & AI-Powered)

A fullstack, containerized resume analysis system using Node.js, n8n, OpenAI, and PostgreSQL—all orchestrated with Docker Compose.

---

## 🚀 Features

- **Secure API** for PDF resume uploads (JWT-protected)
- **n8n workflow** for:
  - PDF text extraction
  - OpenAI-powered information extraction
  - Storing structured data in PostgreSQL
- **User registration and authentication**
- **pgAdmin** for easy database management
- **Fully containerized**: No local Postgres or n8n install required

---

## 🗂️ Project Structure

```
.
├── Backend/                # Node.js backend (TypeScript)
├── docker-compose.yml      # Orchestration for all services
├── .env.example            # Environment variable template
├── README.md               # This file
```

---

## 🛠️ Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

---

## ⚡ Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/habtesh-beki/n8n-Driven-Resume-Analyzer.git
   cd n8n-Driven-Resume-Analyzer
   ```

2. **Copy and edit environment variables:**

   ```bash
   cp .env.example .env
   # Edit .env and fill any secrets
   ```

3. **Build and start all services:**

   ```bash
   docker-compose up --build
   ```

4. **Access the services:**
   - **Backend API:** [http://localhost:3000](http://localhost:3000)
   - **n8n:** [http://localhost:5678](http://localhost:5678) (default: admin/admin123)
   - **pgAdmin:** [http://localhost:5050](http://localhost:5050) (default: admin@admin.com/admin123)

---

## 📝 API Usage

### **Register/Login**

- `POST /api/register` — Register a new user
- `POST /api/login` — Get JWT token

### **Upload Resume**

- `POST /api/upload` — Upload a PDF (JWT required)
  - **Body:** `multipart/form-data` with a `file` field

---

## 🧠 n8n Workflow

- Receives PDF via webhook
- Extracts text from PDF
- Sends text to OpenAI for parsing (extracts name, email, phone, skills, etc.)
- Stores structured data in PostgreSQL

---

## 🗄️ Database

- **PostgreSQL** stores resumes and user data
- **pgAdmin** for database management

**Example table:**

```sql
CREATE TABLE resumes (
  id SERIAL PRIMARY KEY,
  filename TEXT,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  skills TEXT[],
  experience_years FLOAT,
  last_job_title TEXT,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🐳 Docker Compose Services

- **backend**: Node.js API server
- **n8n**: Automation/orchestration
- **postgres**: Database
- **pgadmin**: DB GUI

---

## 🔐 Security

- All API endpoints (except login/register) require JWT authentication
- n8n credentials are encrypted with a persistent key

---

## 🧪 Testing

- Use Postman or curl to test `/api/register`, `/api/login`, and `/api/upload`
- Check n8n UI for workflow execution
- View results in pgAdmin or via SQL

---

## 🧰 Troubleshooting

- **Port already in use:** Change the port in `docker-compose.yml`
- **n8n credential errors:** Make sure `N8N_ENCRYPTION_KEY` is set and persistent
- **Database connection issues:** Ensure all services use the correct service names (`postgres`, `n8n`, etc.)
