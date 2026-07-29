# Fullstack Developer & Designer Portfolio

Responsives Portfolio mit Next.js, TypeScript und CSS Modules.

## Lokal in VS Code starten

1. ZIP-Datei entpacken.
2. Den entpackten Ordner in VS Code öffnen.
3. Im Terminal die Abhängigkeiten installieren:

   ```bash
   npm install
   ```

4. Entwicklungsserver starten:

   ```bash
   npm run dev
   ```

5. `http://localhost:3000` im Browser öffnen.

## Produktion prüfen

```bash
npm run build
npm start
```

## Auf GitHub hochladen

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin DEINE_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Auf Vercel veröffentlichen

1. Das GitHub-Repository mit Vercel verbinden.
2. Vercel erkennt Next.js automatisch.
3. Die Standardwerte übernehmen und auf **Deploy** klicken.

Es werden keine Umgebungsvariablen benötigt.

## Inhalte anpassen

- Kontaktdaten: `components/Contact/Contact.tsx`
- Projekte: `components/ProjectReel/ProjectReel.tsx`
- Hero-Text: `components/Hero/Hero.tsx`
- Über-mich-Bereich: `components/About/About.tsx`
- Bilder: `public/images`

Hinweis: Die E-Mail-Adresse `hello@dein-portfolio.de` ist derzeit ein Platzhalter.
