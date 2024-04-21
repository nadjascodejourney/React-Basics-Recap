//>> React Anwendung initialisieren und App-Komponente (im StrictMode) in das HTML-Element mit der ID "root" rendern

// 1. React Modul importieren
import React from "react";
// 2. ReactDOM-Modul aus dem react-dom/client-Paket importieren. Dieses Modul bietet Methoden zum Rendern von React-Komponenten in das DOM.
import ReactDOM from "react-dom/client";
// 3. App Komponente importieren. Sie ist i.d.R. der Einstiegspunkt für React-Anwendungen mit der Hauptstruktur der Anwendung/Website
import App from "./App.jsx";

// 4. ReactDOM.createRoot() ist eine Methode, die seit React18 verwendet wird. Sie rendert die Komponenten auf eine neue Art und Weise, indem sie eine "Root"-Instanz erstellt, die dann die React-Komponente rendert.
// 5. In der Klammer steht ein Parameter => document.getElementById("root"). Damit wird das HTML-Element mit der id "root" ausgewählt, in das die Anwendung gerendert wird.
// .render() ist eine Methode eines Objekts, das vorher von createRoot() zurückgegeben wurde. Diese Methode rendert nun die App-Komponente in das ausgewählte "root"-HTML-Element.
ReactDOM.createRoot(document.getElementById("root")).render(
  // 6. React.StrictMode ist ein Wrapper. Er aktiviert zusätzliche Warnungen und Prüfungen für die darunterliegenden Komponenten. Es hilft dabei, Probleme in der Anwendung zu finden und zu identifizieren. Diese Prüfungen werden nur im Entwicklungsmodus ausgeführt.
  <React.StrictMode>
    <App />
    {/* 7. Hier wird die zuvor importierte App-Komponente dargestellt und zwar innerhalb von React.Strictmode, damit die Warnungen und Prüfungen aktiviert werden für alles was in <App /> steht */}
  </React.StrictMode>
);

//>> Zusammengefasst, dieser Code initialisiert eine React-Anwendung, indem er die App-Komponente in das HTML-Element mit der ID "root" rendert, wobei zusätzliche Entwicklungswarnungen und -prüfungen aktiviert sind, um potenzielle Probleme frühzeitig zu identifizieren. Die Einführung von ReactDOM.createRoot() in React 18 erfolgte, um eine neue Art und Weise des Renderns mit besserer Leistung, mehr Sicherheit und Unterstützung für den "Concurrent Mode" zu ermöglichen, indem es einen neuen Root-Container erstellt und eine Referenz darauf zurückgibt, anstatt direkt in ein bestimmtes DOM-Element zu rendern.

// -----------------------------------------------

//% Vor React.createRoot() hat man ReactDOM.render() genutzt:
//* ReactDOM.render(<App />, document.getElementById("root"));
// Wird in älteren Versionen von React verwendet, um eine Komponente direkt in ein bestimmtes DOM-Element zu rendern. Auch hier wird App direkt in das HTML-Element mit der Id "root" gerendert
// nimmt also zwei Paramenter gleichzeitig
// Bei Projekten, die noch damit geschrieben wurden, erscheint meistens diese Fehlermeldung:
//! "Deprecation notice: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it´s running React 17."

// -----------------------------------------------

//? Was ist der Concurrent Mode und wie kann man sicherstellen, dass die Implementierung des Concurrent Modes keine Inkonsistenzen im Zustandsmanagement verursacht?

//% Concurrent Mode:
// - Funktion in React, die es durch "Lanes" ermöglicht, mehrere UI Versionen gleichzeitig zu rendern => Concurrency oder auch Konkurrenz genannt
// "Lanes" sind virtuelle Nachrichtenwarteschlangen. Sie ermöglichen es React, Updates unabhänging zu priorisieren und zu rendern => Leistungsverbesserung, insb. bei komplexen UIs oder Benutzerinteraktionen, keine Unterbrechung der Nutzererfahrung, da Updates im Hintergrund vorbereitet werden können
// Weniger wichtige Updates bleiben solange in der Warteschlange, bis die wichtigeren Tasks abgeschlossen sind
// revolutioniert das Rendering in React, da es nun möglich ist, das Rendern auch zu unterbrechen, zu pausieren, es wieder fortzusetzen oder ganz abzuberechen => so kann React schnell auf Benutzerinteraktionen reagieren, welbst wenn es sich inmitten eines intensiven Rendertasks befindet

// Link: https://www.freecodecamp.org/news/react-18-new-features/

//% Vor React 18 und dem Concurrent Mode:
// das Rendern war eine einzelne, ununterbrochene, synchrone Transaktion
// Rendern konnte nicht unterbrochen werden

//% Umstellung auf React 18 und Implementierung des Concurrent Modes erfordert Sorgfältigkeit!
// Es ist wichtig, die Kompatibilität von State-Management-Libraries zu bewerten und darauf zu achten, dass es durch die Umstellung nicht zu Inkonsistenzen im Zustandsmanagement kommt. Dafür empfehlen sich folgende Strategien je nach Projekt:

// 1. Verwendung des StrictModes, da er eine Reihe von Warnungen und Prüfungen aktiviert, sodass Probleme frühzeitig erkannt und behoben werden können

// 2. Schrittweise Einführung des Concurrent Modes: Man könnte zunächst vom Legacy-Modus (wie in React 17) in einen Blocking-Modus wechseln. Dies ist eine Hybridform zwischen Legacy und Concurrent Mode, in dem alle StrictMode Warnungen und spezifisches Entwicklermodusverhalten aktiviert werden. So können Entwickler alle Probleme sehen und diese nach und nach lösen, während ihr Code weiterhin funtkioniert. Sobald alle Probleme behoben wurden, kann man auf den Concurrent Mode umstellen. Jedoch gibt es hier auch Nachteile, beispielsweise erscheint i.d.R. eine Flut an Warnungen.

// 3. Verwendung von Concurrent Features (empfohlen): Dies bedeutet, dass die App zunächst weiterhin standardmäßig synchron rendert, ähnlich wie in Legacy- oder Blocking-Modi. Die Einführung von Concurrent Features erfolgt durch die Aktivierung von StrictMode in den kleineren Teilen der App, in denen tatsächlich Concurrent Features verwendet werden, also wo tatsächlich gleichzeitig mehrere UI Versionen gerendert werden müssten. Auf diese Weise wird sichergestellt, dass die App nicht standardmäßig mehrere Rendering-Aufgaben parallel löst und StrictMode wird nur dort aktiviert, wo es benötigt wird.
