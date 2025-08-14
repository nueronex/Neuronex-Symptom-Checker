# Neuronex-Symptom-Checker
An AI-powered, interactive chatbot that helps users check symptoms and suggests possible causes and over-the-counter medicines. This project simulates the knowledge of an MD-level diagnosis assistant using trained JavaScript logic. Ideal for early self-assessment and educational purposes.
🔍 Features
### 🤖 AI Chatbot: Detects user symptoms based on keywords.

#### 💊 Smart Suggestions: Provides diagnosis and medicine recommendations.

### 🧠 Trained Database: Covers 78+ symptoms including:

Fever, Headache, Cough, Diarrhea, Sore throat

Heart Attack symptoms (chest pain, breathlessness)

Tuberculosis (persistent cough, blood in sputum)

Eye problems (blurry vision, itching)

Skin rashes, Body pain, Joint pain, and more.

#### 💬 Real-Time Chat Interface: With Enter-key support and smooth scrolling.

#### 🎨 Animated UI: Medical-themed background and transitions.

🗣️ Hi Detection: If you say “hi” or “hello”, it replies “Hi, how can I help you?”

🛠️ Tech Stack
HTML5 + CSS3 — Frontend UI

JavaScript — AI logic and symptom matching

Responsive Design — Mobile & desktop compatible

#### 📁 Project Structure
bash
Copy
Edit
📦 AI-Symptom-Checker/
├── index.html
├── style.css
└── script.js


### 🚀 How to Run
Clone or download the repository:

bash
Copy
Edit
git clone https://github.com/your-username/AI-Symptom-Checker.git
Open index.html in any web browser.

Type your symptoms or just say “hi”.


#### 📌 Use Case
This chatbot is intended for preliminary symptom analysis only. It does not replace medical consultation and is purely educational.

##### 💡 Future Improvements
Voice input (Web Speech API)

Backend database (Firebase or Node.js)

Admin panel for updating symptoms

Real-time patient triage system

🙌 Developed By
Neuronex Team
Powered by AI & Innovation


⚙️ Setup Instructions
1. Clone the repository

git clone https://github.com/nueronex/mental_health_monitoring
cd mental_health_monitoring
2. Set up the virtual environment (optional)
bash
Copy
Edit
python -m venv venv
venv\Scripts\activate     # Windows
source venv/bin/activate  # macOS/Linux
3. Install dependencies
bash
Copy
Edit
pip install flask flask-cors openai python-dotenv
4. Add .env file
Create a .env file in the root directory and add your OpenAI API key:

env
Copy
Edit
OPENAI_API_KEY=your_openai_api_key_here
5. Run the Flask server
bash
Copy
Edit
python app.py
Server runs at: http://127.0.0.1:5000

📡 API Endpoint
POST /chat
Sends a user message and receives a chatbot reply.

Example Request:
bash
Copy
Edit
curl -X POST http://127.0.0.1:5000/chat \
  -H "Content-Type: application/json" \
  -d '{ "message": "Hello" }'
🌐 Frontend Preview
Open your browser and go to: http://127.0.0.1:5000

Interact with the chatbot in a fun, modern black & blue themed interface.

### 👨‍💻 Developed By
Team Nueronex

A project that merges conversational AI with elegant frontend design for delightful customer interactions.

### 📄 License
This project is open-source and free to use under the MIT License.

🙌 Contributions
Pull requests and feature suggestions are welcome!

javascript
Copy
Edit
   
