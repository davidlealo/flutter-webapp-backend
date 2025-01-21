const express = require('express');
const admin = require('firebase-admin');
const { OpenAI } = require('openai');  // Cambié esto a 'OpenAI' en lugar de 'OpenAIApi'
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Inicializar Firebase
admin.initializeApp({
    credential: admin.credential.cert(require(process.env.FIREBASE_SERVICE_ACCOUNT))
});

// Inicializar OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend funcionando');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
