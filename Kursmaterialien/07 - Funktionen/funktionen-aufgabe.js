"use strict";

const courses = [
  ["Christian", "Annika"], // Kurs 1 mit 2 Teilnehmern
  ["Julian", "Lisa", "Tobias"] // Kurs 2 mit 3 Teilnehmern
];

// Aufgabe 1
//
// Die Sprachschule, die wir betreuen, hat herausgefunden,
// dass es Funktionen gibt!
// 
// Die Kurse, die aktuell gerade unterrichtet werden,
// sind in der Variable "courses" gespeichert.
// 
// Wir sollen daher ein paar Funktionen schreiben, die die 
// Arbeit mit den Teilnehmern der Kurse erleichtern:
//
// 1a) Ergänze die Funktion, die ermittelt, welcher Kurs
//     bisher am wenigsten Teilnehmer hat. 
//     
//     Wenn 2 Kurse genau gleich viele Teilnehmer haben, ist
//     es egal, welcher Index zurückgegeben wird.
// 
//     Beispiel (für die Variable "courses" von oben): 
//      >> console.log(getSmallestCourse()) 
//      >> Rückgabewert: 0, weil der 1. Kurs (Kurs mit Index 0) am 
//                       wenigsten Teilnehmer hat

/**
 * 
 * @desc Den Kleinsten Kurs herausfinden
 * @returns {String} Gibt den Index vom Kurs mit den wenigsten Teilnehmern an
 */
function getSmallestCourse() {
    let smallest = 0;
    for(let i in courses){
        if(courses[i].length < courses[smallest].length){
            smallest = i;
        }
    }
    return smallest;
  // Ergänze den Code hier! Du darfst die Variable "courses"
  // von außerhalt hier drinnen weiterverwenden!
}
console.log(getSmallestCourse());
console.log("-".repeat(20));

// 1b) Ergänze die Funktion, die einen Teilnehmer in den Kurs
//     einfügt, der bisher am wenigsten Teilnehmer hat!
//     Wir nutzen hier das Ergebnis aus Teilaufgabe 1a weiter!

/**
 * 
 * @desc Einen Teilnehmer in einen Kurs einschreiben
 * @param {string} name Name des Teilnehmers der in den am wenigsten besuchten Kurs hinzugefügt werden soll 
 * @returns {string} 
 */
function addStudent(name) {
  // Hier ermitteln wir, welcher Kurs bisher am wenigsten
  // Teilnehmer hat!
  const smallestCourse = getSmallestCourse();
  courses[smallestCourse].push(name);
  return "Der Teilnehmer " + name + " wurde erfolgreich zu Kurs " + smallestCourse + " hinzugefügt";
  // Ergänze den Code hier!
}
console.log(addStudent("Tom"));
console.log(courses);
console.log("-".repeat(20));

// Aufgabe 2
// 
// Mit Hilfe von Funktionen sollen wir ein einfaches Wörterbuch
// entwickeln. 
// 
// Die entsprechenden Sprachbausteine findest du in den Variablen 
// "LANGUAGE_DE" bzw. "LANGUAGE_EN". Das sind übrigends ganz normale
// Variablennamen, und mit der kompletten Großschreibung deuten wir
// für andere Programmierer nochmal zusätzlich an, dass diese Variablen
// nie abgeändert werden sollen.

const LANGUAGE_DE = [
  "hallo",
  "heute",
  "sprachkurs",
  "willkommen",
  "mikrofon",
  "und"
];

const LANGUAGE_EN = [
  "hello",
  "today",
  "language course",
  "welcome",
  "microphone",
  "and"
];

// Die Indexe stimmen jeweils überein, also LANGUAGE_DE[0] 
// enthält das gleiche Wort in Deutsch, wie LANGUAGE_EN[0]
// auf Englisch.
//
// Hinweis: Der Code den wir hier schreiben, der wird zwangs-
// läufig eher ineffizient. Später lernst du noch mit Objekten
// eine sehr viel "effizientere" Möglichkeit für solche 
// Nachschlage-Aktionen kennen!
//
// 2a) Ergänze die Funktion, die ein einzelnes Wort von 
//     Deutsch nach Englisch übersetzt. Diese Funktion
//     soll das englische Wort über ein "return" 
//     zurückgeben.
//
//     Wichtig: Bitte beachte hier Groß- und Kleinschreibung.
//     Das Wörterbuch liegt ausschließlich in Kleinbuchstaben
//     vor - das Wort, was hier übergeben wird, musst
//     du also noch mit .toLowerCase() umwandeln!
// 
//     Kann ein Wort nicht übersetzt werden, so soll 1:1
//     das deutsche Wort zurückgegeben werden.
//     
//     >> translateWord("Sprachkurs")
//     >> // Rückgabewert: "language course"

/**
 * 
 * @desc Ein Wort übersetzen
 * @param {string} word Wort das in Englisch übersetzt werden soll
 * @returns {string} Übersetztes Wort  
 */
function translateWord(word) {
    for(let i in LANGUAGE_DE){
        if(word.toLowerCase() === LANGUAGE_DE[i]){
            return LANGUAGE_EN[i];
        }
    }
    return word;
}
console.log(translateWord("Sprachkurs"));

// 2b) Schreibe eine Funktion, die den ersten Buchstaben eines
//     Wortes in Großbuchstaben umwandeln kann.
// 
//     Bezüglich des Funktionsnamens, uc = uppercase, d.h. 
//     ucFirst = "mach' den ersten Buchstaben in Uppercase"
// 
//     Tipp: Zerlege hierfür das Wort, einmal in den ersten Buchstaben,
//     und einmal in den Rest des Wortes / Strings.
//     
//     Wandle anschließend den ersten Buchstaben in Großbuchstaben um
//     (.toUpperCase()), und baue den String wieder zusammen!
//
//     Beispiel:
//      >> ucFirst("sprachschule")
//      >> // Rückgabewert: "Sprachschule"
//     
//     Das Ergebnis soll per "return" zurückgegeben werden

/**
 * 
 * @desc Ersten buchstaben von einem Wort groß schreiben
 * @param {string} word Wort dessen erster Buchstabe groß geschrieben werden soll
 * @returns {String} Wort dessen erster Buchstabe groß geschrieben ist
 */
function ucFirst(word) {
    let firstLetter = word.charAt(0);
    word = word.replace(firstLetter, "");
    firstLetter = firstLetter.toUpperCase();
    word = firstLetter + word;
    return word;
}
console.log(ucFirst("test"));
// 2c) Aufbauend den Funktionen aus 2a und 2b, entwickle eine weitere
//     Funktion, die einen ganzen Satz übersetzen kann!
//     
//     Zerlege dazu den Satz in Wörter, übersetze diese einzeln
//     und setze den Satz wieder zusammen!
//
//     Zudem stelle sicher, dass der erste Buchstabe des Satzes in 
//     Großbuchstaben geschrieben wird!
//
//     Beispiel: 
//     >> translateSentence("Hallo und willkommen beim Sprachkurs")
//     >> // Rückgabewert: "Hello and welcome beim language course"
//
//    Hinweis: 
//      Es geht hier nur um eine "rudimentäre" Übersetzung, das
//      siehst du auch am Sprachfehler, das Wort "beim" wurde einfach 1:1 
//      übernommen. 
//      Tatsächliche Übersetzungstools sind sehr viel komplexer,
//      inzwischen so komplex, dass i.d.R. selbstlernende Programme wie z.B.
//      Neuronale Netze verwendet werden. Die würde man dann aber eher in 
//      C++ oder Python entwickeln als in JavaScript.
/**
 * 
 * @desc Satz übersetzen
 * @param {string} sentence Satz auf Deutsch
 * @returns {String} Satz auf Englisch
 */
function translateSentence(sentence) {
    sentence = sentence.split(" ");
    let sentenceEN =[];
    for(let i in sentence){
        sentenceEN.push(translateWord(sentence[i]));
    }
    sentenceEN[0] = ucFirst(sentenceEN[0]);
    sentenceEN = sentenceEN.join(" ");
    return sentenceEN;
}
console.log(translateSentence("Hallo und willkommen beim Sprachkurs"));