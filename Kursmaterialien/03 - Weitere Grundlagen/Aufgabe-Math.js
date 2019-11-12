"use strict";

// Aufgabe 1:
// 
// Für eine Tankstelle soll eine automatische Rückgeld-Ausgabe implementiert
// werden. Für dieses Beispiel soll ein Betrag von 15,37€ zurückgegeben werden.
//
// Wandle zuerst den Betrag in die englische Schreibweise um (15.37). Ersetze
// dazu mit Hilfe von .replace() das Komma durch einen Punkt.
//
// Lese anschließend den String mit Hilfe der parseFloat()-Funktion ein, und
// rechne ihn in Cent um. 
// 
// Gebe dann aus, mit welchen Münzen dieser Betrag bezahlt werden kann. Der 
// Einfachheit halber wird dieser Betrag ausschließlich mit Münzen bezahlt
// (vereinfacht den Code etwas).
// 
// Kombiniere dazu geschickt den Modulo, Rundungsfunktionen sowie ggf. den 
// Rest. Versuche, zuerst große Münzen auszugeben!
//
// Tipp: Rechne den Betrag am besten zuerst in Cents um. Sonst treten leicht
// Rundungsfehler auf, die das Programm unnötig kompliziert machen!
//
// Natürlich soll das Programm so geschrieben werden, dass jeder
// Beliebige Betrag zurückgegeben werden kann.
// 
// Beispielausgabe: 
//  - 7x 2€ Münze
//  - 1x 1€-Münze
//  - 0x 50 Cent-Münze
//  - 1x 20 Cent-Münze
//  - 1x 10 Cent-Münze
//  - 1x 5 Cent-Münze
//  - 1x 2 Cent-Münze
//  - 0x 2 Cent-Münze

let amountStr = "15,37";
amountStr = amountStr.replace(",",".");
amountStr = parseFloat(amountStr);
let amountCent = amountStr * 100;
let coin = amountCent % 200;
let temp = (amountCent - coin)/200;
console.log("- " + temp + "x 2€-Münze");

amountCent = coin;
coin = amountCent % 100;
temp = (amountCent - coin)/100;
console.log("- " + temp + "x 1€-Münze");

amountCent = coin;
coin = amountCent % 50;
temp = (amountCent - coin)/50;
console.log("- " + temp + "x 50 Cent-Münze");

amountCent = coin;
coin = amountCent % 20;
temp = (amountCent - coin)/20;
console.log("- " + temp + "x 20 Cent-Münze");

amountCent = coin;
coin = amountCent % 10;
temp = (amountCent - coin)/10;
console.log("- " + temp + "x 10 Cent-Münze");

amountCent = coin;
coin = amountCent % 5;
temp = (amountCent - coin)/5;
console.log("- " + temp + "x 5 Cent-Münze");

amountCent = coin;
coin = amountCent % 2;
temp = (amountCent - coin)/2;
console.log("- " + temp + "x 2 Cent-Münze");

amountCent = coin;
coin = amountCent % 1;
temp = (amountCent - coin)/1;
console.log("- " + temp + "x 1 Cent-Münze");

console.log("-".repeat(20));

/////////////////////////////////////////////////////////////////////////////

// Aufgabe 2
// 
// In Amerika ist es üblich, in Restaurants ca. 15-20% Trinkgeld zu geben. 
// Schreibe ein Programmn welches ca. 15-20% Tringeld auf eine Restaurant-
// Rechnung aufschlägt. 
//
// Versuche, dass der Betrag, der insgesamt bezahlt wird, möglichst nicht 
// zu krumm ist.
//
// Kombiniere dazu geschickt die Rundungsfunktionen, Divisionen oder 
// Multiplikationen.
//
// Zudem soll eine Ausgabe erfolgen, bei dem der Gesamtbetrag mit 2 Nachkommastellen
// ausgegeben wird. Beispiel: "Der Gesamtbetrag beträgt 20.00$"
//
// - Beispiel: Rechungsbetrag 17.00$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 16.50$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 10.00$    -> Der Gesamtbetrag beträgt 12.50$
//
// Das Programm muss nicht perfekt sein. Es reicht, wenn es ungefähr 
// funktioniert!
let bill1 = 17.00;
let bill2 = 16.50;
let bill3 = 10.00;
let bill1Temp = Math.round(bill1 * 1.15);
let bill2Temp = Math.round(bill2 * 1.2);
let bill3Temp = bill3 * 1.25;
console.log("Der Gesambtbetrag beträgt " + bill1Temp + "$");
console.log("Der Gesambtbetrag beträgt " + bill2Temp + "$");
console.log("Der Gesambtbetrag beträgt " + bill3Temp + "$");
