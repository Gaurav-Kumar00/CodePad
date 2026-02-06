// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });
// const mongoose = require("mongoose");
// const express = require("express");
// const app = new express();
// const PORT = process.env.PORT;

// require("./db/conn");

// app.use(cors());
// app.use(express.json());
// app.use(require("./router/auth"));

// const consoleURL = (req, res, next) => {
//     console.log(`User at URL : localhost:${PORT}${req.url}`);
//     next();
// };

// app.get("/", consoleURL, (req, res) => {
//     // res.cookie("test","test", {);
//     res.send("Hello world");
// });
// app.get("*", consoleURL, (req, res) => {
//     res.send(
//         `<center><h1>404 </h1><h3>The Page you are Looking for is Not Found</h3></center>`
//     );
// });

// app.listen(PORT, () => {
//     console.log(`localhost:${PORT}`);
// });

const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const express = require("express");
const app = express(); // no need for `new`
const PORT = process.env.PORT;

require("./db/conn");

// Replace with your actual frontend URL
const FRONTEND_URL = "https://codepad-qwpz.onrender.com";

// CORS setup to allow frontend access
app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true,
    })
);

app.use(express.json());
app.use(require("./router/auth"));

const consoleURL = (req, res, next) => {
    console.log(`User at URL : localhost:${PORT}${req.url}`);
    next();
};

// SPA fallback: serve React build so client-side routes work on reload
const buildPath = path.join(__dirname, "../frontend/build");
const buildExists = fs.existsSync(buildPath);

if (buildExists) {
    app.use(express.static(buildPath));
    // Any GET that isn't an API route or static file → serve index.html (React Router handles it)
    app.get("*", consoleURL, (req, res) => {
        res.sendFile(path.join(buildPath, "index.html"));
    });
} else {
    app.get("/", consoleURL, (req, res) => {
        res.send("Hello world");
    });
    app.get("*", consoleURL, (req, res) => {
        res.send(
            `<center><h1>404 </h1><h3>The Page you are Looking for is Not Found</h3></center>`
        );
    });
}

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
});
