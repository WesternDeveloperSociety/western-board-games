# Western Board Games Rental

A Django REST API backend with React frontend for managing board game rentals.

## Prerequisites

- Python 3.10 or higher
- Node.js 16 or higher
- PostgreSQL

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/WesternDeveloperSociety/western-board-games.git
cd western-board-games
```

### 2. Backend Setup (Django)

#### Create and activate virtual environment:
```bash
python -m venv wbg-env
wbg-env\Scripts\activate
```

#### Install Python dependencies:
```bash
pip install -r requirements.txt
```

#### Create environment file:
Create a `.env` file in the project root with your database credentials:
```env
DEBUG=True
SECRET_KEY=your-secret-key-here
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=5432
```

#### Run database migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

#### Create superuser (optional):
```bash
python manage.py createsuperuser
```

#### Start Django development server:
```bash
python manage.py runserver
```

### 3. Frontend Setup (React)

#### Navigate to the React frontend directory:
```bash
cd westernBoardGames\wbg_react_frontend
```

#### Install Node.js dependencies:
```bash
npm install
```

#### Start React development server:
```bash
npm run dev
```

### 4. Development Workflow

1. **Backend**: Django server runs on `http://localhost:8000/`
2. **Frontend**: React app runs on `http://localhost:5173/`
3. **Admin Panel**: Access Django admin at `http://localhost:8000/admin/`

## Project Structure

- `westernBoardGames/` - Django project root
  - `bg_admin/` - Board game administration app
  - `games/` - Games management app
  - `rentals/` - Rental management app
  - `user/` - User management app
  - `frontend/` - Frontend integration app
  - `wbg_react_frontend/` - React frontend application

## Quick Start Commands

```bash
# Activate virtual environment
wbg-env\Scripts\activate

# Start backend
python manage.py runserver

# In new terminal - start frontend
cd westernBoardGames\wbg_react_frontend
npm run dev
```

## Deactivating Environment

```bash
deactivate
```

