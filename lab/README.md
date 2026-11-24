# Experiment 15: Django To-Do Application

## Objective
Install, set up, and build a simple To-Do application using Django and SQLite to understand Django project structure, `manage.py` subcommands, and CRUD operations[cite: 74].

## Theory & Key Concepts
- **Django & MVT:** Django is a high-level Python web framework following the Model-View-Template (MVT) pattern, with built-in ORM, admin panel, and URL routing[cite: 77].
  - **Model:** Defines the database schema (`Task` with `title`, `completed`, and `created_at`)[cite: 77, 88].
  - **View:** Handles HTTP requests and business logic (`task_list`, `add_task`, `toggle_task`, `delete_task`)[cite: 77, 90].
  - **Template:** Renders HTML responses (`base.html`, `navbar.html`, `task_list.html`, `add_task.html`)[cite: 77, 91, 92].
- **Key `manage.py` Commands:** `startapp`, `makemigrations`, `migrate`, `createsuperuser`, and `runserver`[cite: 82, 83, 84, 95].

## Setup & Run Commands
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install django
python manage.py makemigrations todo
python manage.py migrate
python manage.py runserver
