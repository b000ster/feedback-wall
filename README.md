Feedback Wall 📝✨
A simple full-stack web app to submit and view feedback messages. Built with Node.js and Express for the backend, serving a static frontend. Feedback is stored in a JSON file locally.

🚀 Live Demo
Check it out live on Render: https://feedback-wall.onrender.com

🎯 Features
📨 Submit anonymous feedback messages

👀 View all previously submitted feedback

⚙️ Backend REST API with Node.js and Express

🌐 Frontend served as static files from the backend

📂 Feedback stored locally in a JSON file (feedback.json)

🛠 Tech Stack
Backend: Node.js, Express, CORS

Frontend: HTML, CSS, JavaScript

Storage: Local JSON file

Deployment: Render.com

💻 Installation & Running Locally
Prerequisites
Node.js (v14+ recommended) ✔️

npm (comes with Node.js) ✔️

MongoDB: Not needed for this project ❌

Steps
Clone the repo:

bash
git clone https://github.com/yourusername/feedback-wall.git
cd feedback-wall/backend
Install dependencies:

bash
npm install
Ensure feedback.json exists with empty array contents:

json
[]
Start the server:

bash
node server.js
Open your browser and visit:

text
http://localhost:5000
Use the frontend to submit and view feedback! 🎉

📂 Project Structure
text
feedback-wall/
  backend/
    server.js           # Express backend server
    feedback.json       # Local JSON file to store feedback
  public/               # Frontend static files (HTML, CSS, JS)
🚀 Deployment
Deployed on Render.com, serving both backend API and frontend.

To deploy yourself:

Push your code to GitHub.

Connect your repo to Render.

Set root directory to backend; build command: npm install; start command: node server.js.

⚠️ Notes
Beginner-friendly project to practice full-stack development.

Using JSON file storage, which is not recommended for production with many concurrent users. Consider upgrading to a database in future projects.

🤝 Contributing
Contributions welcome! Feel free to open issues or pull requests.

📝 License
MIT License — open source and free to use!
