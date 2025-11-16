# Western Board Games Rental

A Django REST API backend with React frontend for managing board game rentals.


## Contribution

1. Create a branch off of `dev` branch named in the format `<name>/type-title-of-this-branch` 

```bash
    git branch <your-name>/type-title-of-this-branch.  
    git <your-name>/type-title-of-this-branch.
```
notes:
- remove all "<>" from the commands
- valid types include:
    - feat: feature
    - fix: bug fix
    - refact: refactor
    - docs: documentation
    - chore: a chore



2. Once development is concluded, open a pull request from your branch back to the `dev` branch.

## Branches

- `dev`: where contributions are made
- `qa`: contains a functional version of code to be tested
- `prod`: production ready code to be released

## Development



### Prerequisites

- Python 3.10 or higher
- Node.js 16 or higher
- PostgreSQL

### Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/WesternDeveloperSociety/western-board-games.git
cd western-board-games
```

#### 2. Backend Setup (Django)

##### Create and activate virtual environment:
For Linux and MacOS:
```bash
python -m venv wbg-env
wbg-env\Scripts\activate
```
For Windows:
```bash
py -m venv wbg-env
wbg-env\Scripts\activate
```

##### Install Python dependencies:
```bash
pip install -r requirements.txt
```

##### Create environment file:
**IMPORTANT**: ALL API KEYS SHOULD PUT IN THIS FILE AND **NOT** IN THE CODEBASE ITSELF.
Create a `.env` file in the project root with your local database credentials:
```env
LOCAL_DB_NAME=your_local_database_name
LOCAL_DB_USER=your_local_database_user
LOCAL_DB_PASSWORD=your_local_database_password
LOCAL_DB_HOST=localhost
LOCAL_DB_PORT=5432
```

##### Run database migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

##### Start Django development server:
```bash
python manage.py runserver
```

#### 3. Frontend Setup (React)

##### Navigate to the React frontend directory:
```bash
cd westernBoardGames\wbg_react_frontend
```

##### Install Node.js dependencies:
```bash
npm install
```

##### Start React development server:
```bash
npm run dev
```

#### 4. Development Workflow

1. **Backend**: Django server runs on `http://localhost:8000/`
2. **Frontend**: React app runs on `http://localhost:5173/`
3. **Admin Panel**: Access Django admin at `http://localhost:8000/admin/`

### Project Structure

- `westernBoardGames/` - Django project root
  - `bg_admin/` - Board game administration app
  - `games/` - Games management app
  - `rentals/` - Rental management app
  - `user/` - User management app
  - `frontend/` - Frontend integration app
  - `wbg_react_frontend/` - React frontend application

### Quick Start Commands

```bash
# Activate virtual environment
wbg-env\Scripts\activate

# Start backend
python manage.py runserver

# In new terminal - start frontend
cd westernBoardGames\wbg_react_frontend
npm run dev
```

### Deactivating Environment

```bash
deactivate
```


## Deployment
TBD
## Contributors

*give yourself some credit*

Team Leads:
- Radmehr
- Shayaan

Developers:
- Alex
- Candice
- Daniel
- Emily
- Violet

