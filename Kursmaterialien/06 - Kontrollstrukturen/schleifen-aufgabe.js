"use strict";

// Aufgabe 1:
//
// Strafaufgabe für einen Schüler an der Sprachschule!
// Er soll 25x schreiben: "Ich soll im Unterricht nicht stören".
// 
// Schreibe ein kleines Programm, was dies für den Schüler 
// erledigt ;)
for (let i=0; i < 25; i++){
    console.log (i+1, ": Ich soll im Unterricht nicht stören");
}

// Aufgabe 2: Sprachschule
//
// Ein Kurs ist zu groß geworden. Teile die Teilnehmer daher
// gleichmäßig in 2 Kurse auf!
//
// Sorge dafür, dass dein Code auch mit anderen Kursgrößen
// funktioniert!
//
// Hinweis: Hier gibt es verschiedene Lösungswege - solange
// der Kurs in 2 Kurse aufgeteilt wird, die ungefähr gleich 
// groß sind, ist deine Lösung richtig!
//
// Tipp: Modulo!
console.log("-".repeat(20));
let students = [
  "Max", 
  "Monika", 
  "Franziska", 
  "Bernd", 
  "Tobias", 
  "Andreas"
];
let kurs1=[];
let kurs2=[];
for(let j in students){
    if(j % 2 === 0){
        kurs1.push(students[j]);
    } else {
        kurs2.push(students[j]);
    }
}
console.log(kurs1);
console.log(kurs2);
// Aufgabe 3
// 
// Für eine Sprachschule soll ein Preisrechner entwickelt werden,
// der den Gesamtpreis bis hin zu einem bestimmten Level berechnet.
//
// Beispiel: Für das Level levels[0] = A1 beträgt der Preis exakt
// prices[0] = 400€.
//
// Für jeden Index kannst du also in der Variable "levels" nachschauen,
// wie dieses Level bezeichnt wird, und in der Variable "prices",
// wie viel dieses Kostet.
//
// Schreibe den Code für die folgenden Teilaufgaben möglichst universell,
// sodass wir z.B. ein Level A3 noch dazwischen schalten können, indem
// wir nur die Listen "levels" und "prices" anpassen!
// 
console.log("-".repeat(20));
// a) Wie viel kostet es für einen Teilnehmer, die Sprache bis 
//    einschließlich des Levels "C1" zu lernen? Schreibe deinen Code so
//    universell, dass er auch mit anderen Level-Bezeichnungen / Preisen
//    zurecht käme.
//
// b) Wie viel kostet es, einen Teilnehmer von (einschließlich) A2 bis
//    einschließlich C1 zu bringen?
// 
// c) Ein Teilnehmer möchte (maximal) 1500€ in seine Sprachkenntnisse 
//    investieren. Bis zu welchem Level (bei A1 angefangen) können wir
//    ihn dafür unterrichten?

let levels = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2"
];

let prices = [
  400,
  500,
  550,
  600,
  650,
  700
];
let startLevel = "A2";
let endLevel = "C1";
let price = 0;
for(let k in levels){
    if(startLevel === levels[k]){
        price += prices[k];
    } else if(endLevel === levels[k]){
        price += prices[k];
        break
    } else {
        continue
    }
    
}
console.log("Die Kurse Kosten dich " + price +"€");
let kurse = [];
let buget = 1500;
for(let l in prices){
    buget -= prices[l];
    if(buget >= 0){
        kurse.push(levels[l]);
    } else {
        break
    }
}
console.log("Du kannst die Kurse " + kurse + " belegen");
// Aufgabe 4
//
// Unsere Sprachschule wächst dank unserer Hilfe immer weiter.
// Inzwischen sollen weitere Kurse hinzugefügt werden, und unser
// Code soll darauf vorbereitet werden.
// 
// Die Teilnehmer werden ja pro Kurs gespeichert. Bisher hatten
// wir dafür immer separate Variablen verwendet.
//
// Hier in dem Beispiel wäre das in der Schreibweise von vorher,
// students1 wäre der erste Kurs, students2 der Zweite:
//  >> let students1 = ["Max", "Monika"]
//  >> let students2 = ["Erik", "Erika"]
//
// Damit die Sprachschule wachsen kann, wird die Struktur in eine
// verschachtelte Liste umgestellt. Dadurch kann später ein 3. 
// Kurs hinzugefügt werden:
let studentsPerCourse = [
  ["Max", "Monika"], // Erster Kurs
  ["Erik", "Erika"] // Zweiter Kurs
];
// Aufgaben:
// 
//  a) Berechne die Anzahl der Teilnehmer in allen Kursen zusammen!
console.log("-".repeat(20));
let anzahl = 0;
for(let courses of studentsPerCourse){
    anzahl += courses.length;
}
console.log("Es nehmen insgesamt " + anzahl + " Leute an den Sprachkursen teil.");
//  b) Der Teilnehmer "Max" musste seinen Sprachkurs absagen. Schreibe
//     ein Programm, was ihn aus seinem Kurs entfernt. Dieses Programm
//     soll auch in der Lage sein, z.B. "Erika" aus ihrem entsprechenden
//     Kurs entfernen zu können.
// 
//     Sorge auch dafür, dass wenn z.B. "Jens" seinen Sprachkurs absagen 
//     muss, dass darauf hingewiesen wird, dass Jens nicht ausgetragen
//     werden konnte, da er ja gar nicht eingeschrieben ist.
//
// Wichtig: Schreibe den Code so, dass er später auch mit 3 oder mehr
// Sprachkursen zurechtkommt!
console.log("-".repeat(20));
let toRemove = "Max";
for(let teilnehmer of studentsPerCourse){
    if(teilnehmer.indexOf(toRemove) !== -1){
        let index = teilnehmer.indexOf(toRemove);
        teilnehmer.splice(index, 1);
        break
    }
}
console.log(studentsPerCourse);
// Bonus-Aufgabe:
// 
//  c) Ein neuer Teilnehmer soll eingeschrieben werden. Schreibe ein 
//     Programm, welches diesen neuen Teilnehmern in den Sprachkurs 
//     platziert, der bisher noch am wenigsten Teilnehmer hat.
// 
//     Wie geht dein Programm mit dem Fall um, dass 2 Sprachkurse
//     genau gleich viele Teilnehmer haben? Ist das Verhalten
//     für eine Sprachschule akzeptabel?
console.log("-".repeat(20));
let toAdd = "Tom";
let indexAdd;
let anz;
for(let m in studentsPerCourse) {
    if(studentsPerCourse[m].length < anz || m === "0"){
        indexAdd = m;
        anz = studentsPerCourse[m].length;
    }
}
studentsPerCourse[indexAdd].push(toAdd);
console.log(studentsPerCourse);