"use strict";

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs");
const launches = JSON.parse(
  fs.readFileSync("spacex/launches.json", {encoding: "utf-8"})
);

console.log("Anzahl launches:", launches.length);

// Aufgaben:
// 
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
// 
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
// 
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht! 
//
let success = 0;
let miss = 0;
let start18 = 0;
let year = "2018";
for(let start of launches){
    if(start.launch_year === year){
        start18++;
        if(start.launch_success) {
            success++;
        } else {
            miss++;
        }
    }
}
console.log(year + " hat spaceex " + start18 + " Raketen gestartet. " + success + " davon erfolgreich, " + miss + " nicht Erfolgreich.");
// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall 
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//  
//    Hinweis: 
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!
let mass = 0;
for(let start of launches){
    if(start.launch_year === year){
        if(start.launch_success) {
            for(let i in start.rocket.second_stage["payloads"]){
                mass += start.rocket.second_stage["payloads"][i]["payload_mass_kg"];
            }
        }
    }
}
console.log("Spaceax hat im Jahr " + year + " " + mass + "kg Nutzlast erfolgreich ins All befördert");
