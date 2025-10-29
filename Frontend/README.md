# 🧵 Sartoria Arenga - Frontend

## 📖 About

Il progetto **Sartoria Arenga** è un'applicazione web che racconta e valorizza l'eccellenza della sartoria napoletana.
Attraverso un'interfaccia elegante e intuitiva, permette di esplorare il portfolio dei capi realizzati e gestire prenotazioni personalizzate.

---

## ⚙️ Tecnologie principali

- React 19
- React Router
- Bootstrap 5 + React-Bootstrap
- Axios per chiamate API
- Framer Motion per animazioni
- Date-fns per gestione date

---

## 🧭 Struttura del progetto

- `/components` → Componenti riutilizzabili (Navbar, Footer, ecc.)
- `/pages` → Pagine principali del sito (Homepage, Portfolio, Prenotazioni, Admin, ecc.)
- `/data` → Funzioni Axios per chiamate API
- `/context` → Gestione autenticazione JWT

---

## Note su React + Vite

- Questo progetto utilizza il template base di Vite + React, con HMR (Hot Module Replacement) attivo e configurazione ESLint minima.

Plugin principali:

@vitejs/plugin-react
→ utilizza Babel per il refresh veloce

@vitejs/plugin-react-swc
→ alternativa con SWC per prestazioni migliori

---

## 🚀 Setup locale

```bash
cd frontend
npm install
npm run dev      # Avvia ambiente di sviluppo
npm run build    # Crea la build di produzione
npm run preview  # Anteprima della build
npm run deploy   # Deploy su GitHub Pages


```
---

## Crediti

Progetto sviluppato da **Valentina Correale** come parte del corso **Epicode Final Project**
