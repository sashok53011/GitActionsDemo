🚀 Einstieg in CI/CD mit GitHub Actions (Demo-Projekt)

Willkommen in diesem Demo-Repository! Dieses Projekt zeigt praxisnah, wie man den Weg von der manuellen „Integration Hell“ hin zu einer modernen, automatisierten CI/CD-Pipeline mit GitHub Actions meistert.

🎯 Was macht diese Pipeline?

Der Workflow in .github/workflows/ci-cd-demo.yml bildet ein automatisiertes Sicherheitsnetz für den Code und besteht aus zwei aufeinander aufbauenden Phasen (Jobs):

1. Continuous Integration (CI) – Das Quality Gate

Dieser Job läuft automatisch auf einem frischen virtuellen Ubuntu-Server (GitHub-hosted Runner), sobald neuer Code hochgeladen (push) oder ein Pull Request erstellt wird:

Code-Checkout: Lädt den aktuellen Stand des Repositories über die offizielle Action actions/checkout@v4.

Umgebung einrichten: Installiert Node.js (Version 20) über actions/setup-node@v4.

Syntax & Linter: Prüft automatisch, ob der Code den Formatierungsregeln entspricht.

Automatisierte Unit-Tests: Führt Tests aus, um Fehler sofort zu erkennen und fehlerhaften Code zu blockieren, bevor er in den Hauptbranch gelangt.

2. Continuous Delivery (CD) – Deployment auf Staging

Dieser Job startet nur dann, wenn:

Der CI-Job erfolgreich war (Quality Gate bestanden – grüner Haken).

Die Änderung direkt in den main-Branch integriert wurde (nicht bei offenen Pull Requests).

Hier wird die Auslieferung (Deployment) auf eine Staging-Umgebung simuliert – inklusive sicherer Einbindung von Umgebungsvariablen über GitHub Secrets.

📂 Projektstruktur

GitHub erkennt Workflows automatisch anhand einer fest vorgegebenen Verzeichnisstruktur im Stammverzeichnis:

.
├── .github/
│   └── workflows/
│       └── ci-cd-demo.yml   # Definition der CI/CD-Pipeline
└── README.md                # Projektdokumentation


🛠️ So probierst du das Demo aus

1. Pipeline automatisch auslösen (push)

Jede Änderung am main-Branch startet den gesamten CI/CD-Prozess sofort ohne manuelles Zutun.

2. Pull-Request-Workflow testen

Erstelle einen neuen Branch (z. B. feature/demo-test).

Ändere eine beliebige Datei und erstelle einen Pull Request gegen main.

Im Pull Request erscheint automatisch ein Status-Check. Sobald alle Tests durchgelaufen sind, signalisiert ein grüner Haken, dass der Code fehlerfrei gemergt werden kann. (Der CD-Schritt wird hierbei bewusst übersprungen).

3. Manueller Start (workflow_dispatch)

Öffne oben im Repository den Reiter Actions.

Wähle links den Workflow CI/CD Demo Pipeline (GitHub Actions) aus.

Klicke rechts auf Run workflow, um die Pipeline jederzeit manuell zu starten und den Ablauf live in den Logs zu verfolgen.

🔒 Integrierte Security Best Practices

Versionen pinnen: Alle eingebundenen Marketplace-Actions nutzen feste Versions-Tags (@v4), um Supply-Chain-Angriffe zu verhindern.

Least Privilege: Die Berechtigungen des automatischen GITHUB_TOKEN sind über permissions: contents: read auf ein Minimum reduziert.

GitHub Secrets: Sensible Daten (wie z. B. ein optionaler API_KEY) werden niemals im Code gespeichert, sondern sicher über Settings → Secrets and variables → Actions eingebunden und in den Logs automatisch maskiert.
