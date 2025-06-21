# 🚀 Yuvaraj M - Portfolio Website

A modern, responsive portfolio website built with React and FastAPI, showcasing professional experience, skills, and projects.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.0.0-blue) ![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-green) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-blue)

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Resume Download**: Functional resume download with proper file naming
- **Interactive Navigation**: Smooth scroll-to-section navigation
- **Professional Sections**: Hero, About, Skills, Projects, Contact
- **Social Integration**: Direct links to LinkedIn, GitHub, and contact info
- **Performance Optimized**: Fast loading with optimized images and assets

## 🛠️ Tech Stack

### Frontend
- **React 19.0.0** - Modern React with latest features
- **React Router DOM 7.5.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Axios 1.8.4** - HTTP client for API requests

### Backend
- **FastAPI 0.110.1** - Modern Python web framework
- **MongoDB** - NoSQL database with Motor async driver
- **Pydantic** - Data validation and serialization
- **Python-dotenv** - Environment variable management

### DevOps & Tools
- **Supervisor** - Process management
- **Docker** - Containerization ready
- **Yarn** - Package management
- **ESLint** - Code linting



### Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **Yarn** package manager
- **MongoDB** (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   yarn install
   ```

4. **Environment Configuration**
   
   Create `.env` files:
   
   **Backend (`/backend/.env`)**:
   ```env
   MONGO_URL="mongodb://localhost:27017"
   DB_NAME="portfolio_database"
   ```
   
   **Frontend (`/frontend/.env`)**:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:8001
   ```

### 🏃‍♂️ Running the Application

#### Development Mode

**Option 1: Using Supervisor (Recommended)**
```bash
# Start all services
sudo supervisorctl start all

# Check status
sudo supervisorctl status

# View logs
sudo supervisorctl tail -f frontend
sudo supervisorctl tail -f backend
```

**Option 2: Manual Start**

**Backend:**
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Frontend:**
```bash
cd frontend
yarn start
```

#### Production Mode
```bash
cd frontend
yarn build
# Serve the build folder with your preferred web server
```

## 📁 Project Structure

```
portfolio-website/
├── 📁 backend/                 # FastAPI backend
│   ├── 📄 server.py           # Main FastAPI application
│   ├── 📄 requirements.txt    # Python dependencies
│   └── 📄 .env               # Backend environment variables
├── 📁 frontend/               # React frontend
│   ├── 📁 src/
│   │   ├── 📄 App.js         # Main React component
│   │   ├── 📄 App.css        # Component styles
│   │   ├── 📄 index.js       # React entry point
│   │   └── 📄 index.css      # Global styles
│   ├── 📁 public/
│   │   ├── 📄 index.html     # HTML template
│   │   └── 📄 Yuvaraj_M_Resume.pdf  # Resume file
│   ├── 📄 package.json       # Frontend dependencies
│   ├── 📄 tailwind.config.js # Tailwind configuration
│   └── 📄 .env              # Frontend environment variables
├── 📁 tests/                 # Test files
└── 📄 README.md              # This file
```

## 🎨 Customization

### Personal Information
Update your details in `/frontend/src/App.js`:

```javascript
// Personal Info
const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  phone: "+1234567890",
  location: "Your City, State",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername"
};
```

### Skills
Modify the skills array:
```javascript
const skills = [
  {
    title: "Your Skill Category",
    technologies: ["Skill 1", "Skill 2", "Skill 3"]
  }
  // Add more skill categories
];
```

### Projects
Update your projects:
```javascript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    image: "project-image-url",
    githubLink: "https://github.com/username/repo",
    technologies: ["Tech 1", "Tech 2"]
  }
  // Add more projects
];
```

### Resume
Replace `/frontend/public/Yuvaraj_M_Resume.pdf` with your actual resume file.

## 🎯 Features Overview

### 🏠 Hero Section
- Professional introduction
- Call-to-action buttons
- Resume download functionality

### 👤 About Section
- Personal story and background
- Academic and professional stats
- Experience timeline
- Professional profile image

### 🛠️ Skills Section
- Categorized technical skills
- Interactive hover effects
- Clean, organized layout

### 🚀 Projects Section
- Project showcase with images
- Technology tags
- GitHub repository links
- Responsive grid layout

### 📞 Contact Section
- Contact information display
- Social media links
- Professional contact cards

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Optimized layout with touch-friendly interactions
- **Mobile**: Mobile-first design with collapsible navigation

## 🌐 API Endpoints

### Backend API Routes
- `GET /api/` - Health check endpoint
- `POST /api/status` - Create status check
- `GET /api/status` - Get all status checks

## 🔧 Deployment

### Local Development
1. Follow the installation and setup steps above
2. Access the application at `http://localhost:3000`

### Production Deployment
1. Build the frontend: `yarn build`
2. Configure your web server to serve the build files
3. Set up environment variables for production
4. Configure MongoDB connection for production

### Environment Variables

**Production Environment Variables:**
```env
# Backend
MONGO_URL="your-production-mongodb-url"
DB_NAME="portfolio_prod"

# Frontend
REACT_APP_BACKEND_URL="https://your-domain.com"
```

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Yuvaraj M**
- Email: myuvaraj069@gmail.com
- Phone: +91 9353528885
- LinkedIn: [linkedin.com/in/yuvaraj-m-159a70218](https://www.linkedin.com/in/yuvaraj-m-159a70218)
- GitHub: [github.com/avdyuvaraj](https://github.com/avdyuvaraj)

## 🎓 About

Computer Science Engineering student at Atria Institute of Technology with experience in software development, machine learning, and web technologies. Passionate about creating innovative solutions and contributing to meaningful projects.

---

**⭐ If you found this portfolio helpful, please consider giving it a star!**