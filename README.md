# 🧵 Sartoria Arenga - Bespoke Tailoring Experience

## 📖 About

Un progetto **full-stack** realizzato per digitalizzare l'esperienza di una sartoria napoletana.
L'applicazione consente agli utenti di prenotare appuntamenti personalizzati e consultare i lavori del sarto, mentre un'area riservata permette la gestione amministrativa di portfolio e prenotazioni.

---

## 🚀 Deploy

- **Frontend (React + Vite)** → [https://sartoria-arenga.netlify.app](https://sartoria-arenga.netlify.app)
- **Backend (Node + Express + MongoDB)** → [https://sartoria-arenga.vercel.app/](https://sartoria-arenga.vercel.app/)

---

## 🏗️ Struttura del progetto

📂 SartoriaArenga/
┣ 📁 backend/ → Server Express, MongoDB, API CRUD, autenticazione JWT
┣ 📁 frontend/ → App React, gestione routing, interfaccia utente responsive
┗ 📄 README.md → (questo file)

---

## ⚙️ Tecnologie principali

### 🖥️ Frontend

- React 19
- React Router
- Bootstrap 5 + React-Bootstrap
- Axios per chiamate API
- Framer Motion per animazioni
- Date-fns per gestione date

### 🧠 Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT per autenticazione
- Bcrypt per hashing password
- Multer + Cloudinary per upload immagini
- SendGrid / Nodemailer per invio email
- Dotenv per configurazioni ambiente

---

## 💻 Installazione locale

1️⃣ **Clona la repository**

```bash
git clone https://github.com/ValeCo96/Epicode-finalProject-SartoriaArenga.git
cd Epicode-finalProject-SartoriaArenga
```

2️⃣ Installa le dipendenze:

### Backend

cd backend
npm install

### Frontend

cd frontend
npm install

3️⃣ Crea i file **.env** in ciascuna cartella:

PORT=2000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRESIN=30d
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloud_key
CLOUDINARY_SECRET=your_cloud_secret
SENDGRID_API_KEY=your_sendgrid_key
EMAIL_USER=your_email_address

4️⃣ Avvia i server in locale:

### Backend

cd backend
npm run dev

### Frontend

cd frontend
npm run dev

---

## 🧭 Funzionalità principali

# 👔 Utente

- Prenotazione appuntamenti tramite form dedicato
- Consultazione del portfolio dei capi sartoriali
- Invio email di conferma automatica

# 🧵 Admin

- Accesso autenticato tramite login JWT
- Gestione prenotazioni (CRUD)
- Gestione portfolio (aggiunta, modifica, eliminazione immagini e descrizioni)

---

## 🪶 Design e stile

L'interfaccia è ispirata all’eleganza sobria della sartoria napoletana:
colori neutri, tipografia raffinata e layout pulito, pensato per trasmettere la cura del dettaglio artigianale anche nel digitale.

---

## 👩‍💻 Comandi utili

### Frontend

- npm run dev # Avvia ambiente di sviluppo
- npm run build # Crea la build di produzione
- npm run preview # Anteprima della build
- npm run deploy # Deploy su GitHub Pages

### Backend

- npm run dev # Avvia server Express con nodemon

---

## 📦 Deployment

- Frontend: deploy automatico su **Netlify / GitHub Pages**
- Backend: deploy su **Vercel**, con connessione a **MongoDB Atlas**
- Autenticazione gestita tramite **JWT** conservato nel localStorage

---

## 📜 Licenza

Distribuito per scopi didattici e dimostrativi.

© 2025 — Progetto finale di Valentina Correale
