# The Definitive CFP Rankings

Drag-and-drop College Football Playoff Top 25 with a live 12-team bracket, plus shared "rankings by user" stored in Firebase.

- Starts from the CFP committee's Nov 17, 2026 Top 25.
- Drag any team (press and hold on phones) or use the arrows to re-rank; the bracket rebuilds live.
- Bracket rules: SEC, Big Ten, Big 12 and ACC champions get auto bids, plus the top Group of 6 team (always the 12 seed) and Notre Dame if it's in the top 12. Seeds 1–4 get byes.
- Enter a name and submit your ranking; the **Cluck and Huddle Picks** tab shows every submission and a consensus ranking.

## Setup (Firebase, free Spark plan)

1. Create a project at https://console.firebase.google.com (Analytics not needed).
2. **Build → Authentication → Get started → Sign-in method → Anonymous → Enable.**
3. **Build → Firestore Database → Create database** (production mode, any region).
4. In Firestore **Rules**, paste the contents of `firestore.rules` and **Publish**.
5. **Project settings → Your apps → Web (`</>`)**, register an app, and copy the `firebaseConfig` object into `firebase-config.js`.
6. Commit and push. GitHub Pages serves the site from the `main` branch root.

## Admin (clear picks)

Tap **Admin sign-in** at the bottom of the page and sign in with an admin Google account (listed in `firebase-config.js` and `firestore.rules`). Admins get a ✕ on each submission and a **Clear all picks** button. One-time setup: enable the **Google** sign-in provider and add `chanathan03.github.io` under Authentication → Settings → Authorized domains.

`vendor/firebase.js` is the Firebase JS SDK 13.4.0 bundled into one file.
