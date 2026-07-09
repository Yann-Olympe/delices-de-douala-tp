# 🍽️ Délices de Douala

> Système de notation de restaurants et menu interactif — Douala, Cameroun

![Angular](https://img.shields.io/badge/Angular-19-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

---

## 🌐 Demo

🔗 **[Voir l'application en live](https://delices-de-douala-tp-ten.vercel.app/)**

---

## 📸 Aperçu

| Page Restaurants | Page Menu |
|-----------|-----------|
|<img width="2048" height="1752" alt="delices-de-douala-tp-ten vercel app_ (4)" src="https://github.com/user-attachments/assets/372cff4e-82bd-49d7-9129-9e1ab006667b" />|<img width="2048" height="2456" alt="delices-de-douala-tp-ten vercel app_ (5)" src="https://github.com/user-attachments/assets/243c4a1e-69a9-44c0-9a8a-7a011596b8e1" />
 |

---

## 📖 Description

**Délices de Douala** est une application web Angular 22 permettant de :
- Noter les meilleurs restaurants de Douala (système 5 étoiles)
- Consulter le menu avec filtres par catégorie et recherche en temps réel
- Découvrir un plat du jour qui change automatiquement toutes les 5 secondes

Projet réalisé dans le cadre de l'**Angular Talent Lab 2026** — Sessions J7 et J8.

---
<img width="1536" height="3240" alt="delices-de-douala-tp-ten vercel app_ (2)" src="https://github.com/user-attachments/assets/6459e09d-71a7-40ad-accb-171df059c512" />

<img width="640" height="2456" alt="delices-de-douala-tp-ten vercel app_" src="https://github.com/user-attachments/assets/4219c8fa-ec6c-4883-b88c-95600d99c675" />



## ✨ Fonctionnalités

### 🏠 Page Restaurants
- Affichage de 6 restaurants camerounais en grille
- Notation interactive de 1 à 5 étoiles avec effet hover
- Compteur en temps réel des restaurants notés
- Calcul automatique de la moyenne des notes
- Persistence de la note après re-notation

### 🍽️ Page Menu
- Chargement du menu depuis une API JSON via `httpResource()`
- Gestion des 3 états : chargement / erreur / données
- Filtre par catégorie (Toutes, Plats, Grillades, Végétarien, Boissons)
- Recherche par nom en temps réel
- Plat du jour rotatif toutes les 5 secondes
- Affichage des prix en FCFA


### 📱 Design & UX
- Dark mode complet
- Design responsive (Mobile, Tablette, Desktop)
- Bottom navigation sur mobile
- Animation flux doré sous la navbar vue desktop
- Transitions et effets hover sur les cartes

---

## 🏗️ Architecture

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Titre + compteur restaurants notés
│   │   ├── restaurant-list/ # Grille des 6 restaurants
│   │   ├── restaurant-card/ # Carte individuelle d'un restaurant
│   │   ├── star-rating/     # Composant étoiles interactif
│   │   └── carte/           # Page menu avec filtres
│   ├── services/
│   │   ├── restaurant.service.ts  # État global des restaurants
│   │   └── menu.service.ts        # Chargement menu via httpResource
│   └── models/
│       ├── restaurant.ts    # Interface Restaurant
│       ├── plat.ts          # Interface Plat
│       └── rating-event.ts  # Interface RatingEvent
├── environments/
│   ├── environment.ts
│   └── environment.development.ts
└── public/
    └── api/
        └── plats.json       # Données du menu
```

---

## 🛠️ Stack Technique

| Technologie | Usage |
|-------------|-------|
| Angular 19 | Framework principal |
| TypeScript | Typage statique |
| Signals | Gestion d'état réactive |
| httpResource() | Requêtes HTTP modernes |
| toSignal() | Conversion Observable → Signal |
| RxJS interval() | Plat du jour rotatif |
| Angular Router | Navigation entre pages |
| CSS Grid / Flexbox | Mise en page responsive |

---

## 🔑 Concepts Angular Appliqués

- ✅ **Standalone Components** — aucun NgModule
- ✅ **input() / output()** — communication parent/enfant moderne
- ✅ **signal() / computed()** — état réactif
- ✅ **httpResource()** — chargement HTTP avec 3 états
- ✅ **inject()** — injection de dépendances moderne
- ✅ **toSignal()** — interop RxJS/Signals
- ✅ **@if / @for** — control flow moderne
- ✅ **Services partagés** — état centralisé
- ✅ **RouterLink / RouterLinkActive** — navigation déclarative

---

## 🚀 Installation & Lancement

```bash
# Cloner le repo
git clone https://github.com/Yann-Olympe/delices-de-douala-tp.git
cd delices-de-douala-tp

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start 

# Ouvrir dans le navigateur
http://localhost:8080
```

---

## 📦 Build Production

```bash
ng build
```

---

## 🗂️ Données

Les restaurants et plats sont des établissements et spécialités **réels de Douala** :

**Restaurants :**
- Le Calao Doré — Akwa (Ndolé aux crevettes)
- Chez Madame Ngono — Bonapriso (Eru aux pieds de bœuf)
- La Fourchette Camerounaise — Bonanjo (Poulet DG)
- Saveurs du Wouri — Bonamoussadi (Poisson braisé)
- L'Akwa Gourmand — Akwa (Bobolo et sauce arachide)
- Le Royal de Bali — Bali (Koki et plantain)

**Plats du menu :** Ndolé, Poulet DG, Poisson braisé, Eru, Koki, Bissap, Gingembre

---

## 👤 Auteur

**MBOH YANN JUNIOR** — Étudiant en Génie Logiciel  
🐙 [GitHub](https://github.com/Yann-Olympe)

---

## 📄 Licence

Projet réalisé dans le cadre de la formation ODC  **Angular Talent Lab 2026**.
