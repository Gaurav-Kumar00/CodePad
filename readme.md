# 🚀 CodePad – Online Code Editor with Extended Features

### 🔗 **[Live Demo](https://codepad-qwpz.onrender.com/)**

CodoFile is an advanced web-based code editor that allows users to write and execute code in **JavaScript**, **Python**, and **Dart** (coming soon). Along with coding, it also provides utility tools like:

---

## ✨Key Features

1. **Multi-language Code Execution**

    - Supports JavaScript.
    - Real-time output execution inside the browser.

2. **Image to Text (OCR)**

    - Upload an image and extract any readable text using OCR technology.

3. **Voice to Text (Speech Recognition)**

    - Speak into your mic and convert voice into written text live in the browser.

4. **Authentication System**

    - Includes user login and registration.

5. **Feedback Collection**
    - Feedback form available on the homepage for user input.

---

## 🌐 Tech Stack

-   **Frontend:** React.js, HTML, CSS, GSAP
-   **Backend:** Node.js, Express
-   **Other Tools:** SpeechRecognition API, Tesseract.js (for OCR)

---

## ⚙️ Requirements

-   Internet connection
-   Latest version of Chrome, Edge, or Brave recommended
-   ⚠️ _Voice to Text_ is **not supported** in Mozilla Firefox
-   Initial load may take time (especially for backend deployment on free hosting)
-   Dart compiler temporarily unavailable due to SDK integration – **coming soon**

---

## 🛠️ Installation

```bash
# Clone the repository
git clone

# Navigate to project root
cd CodePad

# Install root dependencies
npm install

# Frontend setup
cd frontend
npm install
npm i gsap

# Backend setup
cd ../backend
npm install
npm install dotenv

# Run both frontend and backend
cd ..
npm run both
```

## 🚀 Deployment (Render)

**Reload / direct URL 404 fix:** The app uses client-side routing (React Router). If you reload on a route like `/editor/javascript`, the server must serve `index.html` for that path (SPA fallback) so the React app can load and handle the route.

- **Single service (recommended):** Use the included `render.yaml`. The backend builds the frontend and serves it; all non-API routes serve `index.html`. Set `DB`, `SECRET_KEY`, etc. in the Render Dashboard → Environment.
- **Separate static site + backend:** If the frontend is a separate Static Site on Render, add a **Rewrite** rule in the Dashboard: Source `/*` → Destination `/index.html` so every path serves the SPA. See [Render redirects/rewrites](https://render.com/docs/redirects-rewrites).

## 👨‍💻 Author

This project is maintained by:

**Gaurav Kumar**
📍 [LinkedIn](https://www.linkedin.com/in/gaurav-kumar-9b5689250/)
💻 [GitHub](<(https://github.com/Gaurav-Kumar00)>)
✉️ Email: [gk94129@gmail.com](mailto:gk94129@gmail.com)

---

## 🧾 License

© 2024–2025 **Gaurav Kumar**
All Rights Reserved.
