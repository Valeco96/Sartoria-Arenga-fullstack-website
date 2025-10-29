# 🧵 Sartoria Arenga - Backend

## 📖 About

Server **Node.js + Express** con **MongoDB** per la gestione di utenti, prenotazioni e portfolio.
Include autenticazione tramite **JWT**, upload su **Cloudinary** e invio di email automatiche con **SendGrid**.

---

## ⚙️ Tecnologie principali

- **Express + Mongoose** — API REST e connessione a MongoDB
- **JWT** — Autenticazione e protezione delle rotte
- **Bcrypt** — Hashing delle password
- **Multer + Cloudinary** — Upload e gestione immagini
- **SendGrid / Nodemailer** — Invio email automatiche
- **Dotenv** — Gestione variabili d’ambiente

---

## 📚 Struttura delle cartelle

- `/models` → Schemi MongoDB (User, Booking, Portfolio, ecc.)
- `/routes` → Endpoint REST per CRUD
- `/controllers` → Logica di gestione delle richieste
- `/middlewares` → Autenticazione, autorizzazione e validazioni
- `/helpers` → Utility (JWT, upload, invio email, ecc.)
- `/config` → Connessione al database e variabili ambiente

---

## 🔐 Autenticazione

Le rotte protette richiedono un token JWT nel campo `Authorization` dell'header:

```bash
Authorization: Bearer <token>
```

---

## 🚀 Setup locale

```bash
cd backend
npm install
npm run dev  # Avvia il server con nodemon
```

---

## Crediti

Progetto sviluppato da **Valentina Correale** come parte del corso **Epicode Final Project**
