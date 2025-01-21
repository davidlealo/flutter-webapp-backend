const express = require('express');
const admin = require('firebase-admin');
const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Inicializar Firebase
admin.initializeApp({
    credential: admin.credential.cert(require(process.env.FIREBASE_SERVICE_ACCOUNT))
});

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend funcionando');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
