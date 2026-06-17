# Multi-tier App

This sample multi-tier application contains:

- Postgres database service
- Flask backend service
- Nginx frontend serving static files and proxying /api to backend

Run:

```bash
docker compose up --build
```

Frontend: http://localhost:8080
Backend: http://localhost:5000
Database: postgres container (5432 exposed only to compose network)
