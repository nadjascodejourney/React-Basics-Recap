# React Recap

- Setup Package.json

{
"name": "self-react-recap", // Name des Projekts
"private": true, // Paket soll nicht veröffentlicht werden
"version": "0.0.0", // aktuelle Version meines Projekts, kann später geändert werden
"type": "module", // Dateien in diesem Projekt sind ES-Module; ermöglicht import und export Syntax
"scripts": { // Objekt, das Skripte definiert, die mit npm oder yarn ausgeführt werden können
"dev": "vite", // Anwendung im Entwicklungsmodus mit vite starten
"build": "vite build", // Anwendung für die Produktion
"lint": "eslint . --ext js, jsx --report-unused-disable-directives--max-warnings 0", // Skript, das ESLint verwendet, um den Code auf Fehler zu überprüfen
"preview": "vite preview" // Script um Produktionsversion zu betrachten
},
"dependencies": { // Objekt mit den Abhängigkeiten zur Ausführung der Anwendung
"react": "^18.2.0", // React-Bibliothek, die für die Entwicklung von React-Komponenten benötigt wird.
"react-dom": "^18.2.0" // React-DOM-Library, die für Interaktion mit dem DOM in einer React Anwendung erforderlich ist
},
"devDependencies": { // Objekt mit Entwicklungsabhängigkeiten, die nur für das Developement benötigt werden
"@vitejs/plugin-react": "^4.2.1", // Vite-Plugin, das die Integration von React in Vite-Projekte erleichtert.
"eslint": "^8.57.0", // Tool zur statischen Codeanalyse, das hilft, Fehler in JavaScript-Code zu finden.
"eslint-plugin-react": "^7.34.1", // ESLint-Plugin, das spezifische Regeln für React-Code bereitstellt.
"eslint-plugin-react-hooks": "^4.6.0", // ESLint-Plugin, das Regeln für die Verwendung von React Hooks bereitstellt.
"eslint-plugin-react-refresh": "0.4.6", // Ein ESLint-Plugin, das spezifische Regeln für die Verwendung von React Fast Refresh bereitstellt.
"vite": "^5.2.0" // schnelles Frontend-Build-Tool, das für die Entwicklung von React-Anwendungen optimiert ist.
}
}

- Ergänzungen:

- "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"

Der Befehl "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0" in der package.json-Datei ist ein Skript, das ESLint verwendet, um den Code auf Fehler zu überprüfen. Hier ist eine detaillierte Erklärung der einzelnen Teile dieses Befehls:

eslint: Dies ist das Hauptprogramm, das ausgeführt wird. ESLint ist ein Tool zur statischen Codeanalyse, das hilft, Fehler in JavaScript-Code zu finden.
.: Dieser Teil des Befehls gibt an, dass ESLint im aktuellen Verzeichnis (und in allen Unterverzeichnissen) nach Dateien suchen soll, die überprüft werden sollen.

--ext js,jsx: Diese Option gibt an, dass ESLint Dateien mit den Erweiterungen .js und .jsx überprüfen soll. Dies ist nützlich, um sicherzustellen, dass sowohl JavaScript- als auch JSX-Dateien (die in React-Projekten verwendet werden) überprüft werden.

--report-unused-disable-directives: Diese Option bewirkt, dass ESLint Direktiven wie // eslint-disable-line oder /_ eslint-disable _/ berichtet, wenn keine Fehler auf dieser Zeile gemeldet worden wären. Dies kann hilfreich sein, um zukünftige Fehler zu verhindern, indem veraltete eslint-disable- und eslint-enable-Kommentare bereinigt werden, die nicht mehr anwendbar sind. Wenn diese Option verwendet wird, kann es sein, dass neue Fehler gemeldet werden, wenn ESLint oder benutzerdefinierte Regeln aktualisiert werden.

--max-warnings 0: Diese Option legt fest, dass der Befehl mit einem Nicht-Null-Exit-Code beendet wird, wenn mehr als 0 Warnungen gemeldet werden. Das bedeutet, dass der Befehl als fehlgeschlagen betrachtet wird, wenn irgendwelche Warnungen auftreten, was in einem CI/CD-Pipeline-Setup nützlich sein kann, um sicherzustellen, dass der Code keine Warnungen enthält.

Zusammengefasst führt dieser Befehl eine strenge Überprüfung des Codes in JavaScript- und JSX-Dateien durch, berichtet über ungenutzte ESLint-Direktiven und stellt sicher, dass keine Warnungen gemeldet werden, was für die Einhaltung von Code-Qualitätsstandards in einem Projekt wichtig sein kann.

- ESLint Plugin React Refresh
  eslint-plugin-react-refresh ist ein ESLint-Plugin, das entwickelt wurde, um sicherzustellen, dass Ihre React-Komponenten sicher mit Fast Refresh aktualisiert werden können. Fast Refresh ist eine Funktion, die in React-Entwicklungsumgebungen wie Create React App verwendet wird, um die Entwicklungserfahrung zu verbessern, indem sie es ermöglicht, Änderungen in Ihrem Code zu sehen, ohne die gesamte Seite neu zu laden. Das Plugin überprüft, ob Ihre Komponenten korrekt für Fast Refresh konfiguriert sind. Es gibt einige Einschränkungen, die es berücksichtigt:

  - Standardmäßig wird das Plugin nur auf .tsx und .jsx Dateien angewendet, um falsche Positive zu vermeiden. Es gibt Optionen, um es auch auf JS-Dateien anzuwenden.
  - Es basiert auf Namenskonventionen (z.B. PascalCase für Komponenten, camelCase für Hilfsfunktionen). Daher gibt es einige Einschränkungen
  - export \* wird nicht unterstützt und wird als Fehler gemeldet.
  - Anonyme Funktionen werden nicht unterstützt (z.B. export default function() {}).
  - Klassenkomponenten werden nicht unterstützt.
  - Eine Funktion, die vollständig in Großbuchstaben exportiert wird, wird als Fehler betrachtet, es sei denn, es wird ein direkter benannter Export verwendet (z.B. const CMS = () => <></>; export { CMS }).

  - Um das Plugin zu installieren, verwenden Sie den Befehl
    npm i -D eslint-plugin-react-refresh.
    Die Konfiguration der .eslintrc Datei könnte auch so aussehen:

{
"plugins": ["react-refresh"],
"rules": {
"react-refresh/only-export-components": "warn"
}
}

Im Gegensatz zur package-lock.json enthält die package.json-Datei die Paketabhängigkeiten, die Sie explizit in Ihrem Projekt definiert haben, aber ohne spezifizieren der genauen Versionen. Stattdessen können Sie Versionen mit Versionsbereichen angeben, wie z.B. ^1.0.0 oder ~1.0.0, was bedeutet, dass npm die neueste Version innerhalb dieses Bereichs auswählen kann.

Die package-lock.json-Datei ist also eine detaillierte Version der package.json-Datei, die zusätzliche Informationen über die installierten Pakete enthält, einschließlich:

Die genauen Versionen der installierten Pakete.
Informationen über die Abhängigkeiten der Pakete.
Ein Hash-Wert für jedes Paket, der sicherstellt, dass die Pakete nicht manipuliert wurden.
Diese Datei wird verwendet, um die Reproduzierbarkeit der Installationen zu gewährleisten, indem sie sicherstellt, dass jedes Mal, wenn Sie npm install ausführen, die genauen gleichen Paketversionen installiert werden, die zum Zeitpunkt der Erstellung der package-lock.json-Datei verwendet wurden. Dies ist besonders wichtig in Produktionsumgebungen, um Konsistenz und Vorhersehbarkeit zu gewährleisten

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
