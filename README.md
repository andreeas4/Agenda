# 📔 Agenda Telefonică (Pixel Retro Theme)

O aplicație web simplă de tip agendă telefonică, construită cu HTML, CSS și JavaScript. Proiectul se axează pe stilizarea unică cu fonturi pixelate și implementarea unui sistem de comutare a temei Dark Mode.

## ✨ Funcționalități Principale

* **Adăugare Persoane:** Formular funcțional pentru introducerea și afișarea imediată a datelor în tabel, declanșând o animație de "loading" la fiecare adăugare.
* **Ștergere Elemente:** Buton "Delete" pe fiecare rând pentru eliminarea dinamică a persoanelor din listă.
* **Contorizare:** Actualizarea automată a numărului total de persoane din agendă.
* **Comutator de Temă (Dark Mode):** Trecere instantanee între tema **Light (Roz Turbat)** și tema **Dark (Retro Terminal Verde Neon)**.

***

## 🎨 Stil & Design

Proiectul folosește un design distinctiv, axat pe estetica retro 8-bit.

### 1. Fonturi
* **Font Principal:** **Press Start 2P** (font pixelat de pe Google Fonts), oferind un aspect de joc video clasic.

### 2. Tema Light (Implicită)
* **Culoare de Accent:** **Roz Turbat (`#FF0099`)**.
* **Interacțiuni:** Culoarea textului de pe input-uri și a placeholder-urilor este Roz Turbat.

### 3. Tema Dark Mode (Retro Terminal)
* **Culoare de Accent:** **Verde Neon Turbat (`#00FF00`)**.
* **Fundal:** Gri Închis/Negru (`#111111`, `#222222`), simulând un ecran de terminal Linux.

### 4. Animație
* **Loading Page:** O tranziție de **0.5s** aplicată pe `<body>` (folosind `@keyframes` și clasa `.is-loading`) care simulează o reîncărcare rapidă la adăugarea de date.

***

## ⚙️ Structura Proiectului

Proiectul este împărțit în cele trei fișiere standard, plus directorul de resurse:
***

## 🚀 Tehnologii Cheie & Implementare

| Componenta | Detalii de Implementare |
| :--- | :--- |
| **Styling** | Folosește **Variabile CSS (`:root`)** pentru gestionarea ușoară a schemelor de culori între teme. |
| **Tema** | Clasa **`.dark-mode`** este aplicată de JavaScript pe elementul `<body>` pentru a declanșa stilurile Dark Mode. |
| **Animație** | Utilizarea **`setTimeout()`** în JavaScript pentru a sincroniza adăugarea rândului cu durata animației CSS (`@keyframes`). |
| **Tabel** | Funcționalitatea de ștergere folosește **Delegarea de Evenimente** pe corpul tabelului (`<tbody>`) pentru performanță optimă. |

***

## ▶️ Cum Rulează (Local)

1.  Asigură-te că fișierele sunt salvate în structura menționată mai sus.
2.  Deschide fișierul **`index.html`** în orice browser modern.
<img width="1842" height="587" alt="agenda1" src="https://github.com/user-attachments/assets/904085db-845b-461a-a10d-0ad9cb02fed6" />
<img width="1843" height="652" alt="Screenshot 2025-10-25 213906" src="https://github.com/user-attachments/assets/986cd448-7cad-49c3-bbf6-5ec8abef2953" />
