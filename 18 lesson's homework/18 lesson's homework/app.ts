﻿
let pilot1: Pilot = new Pilot;
document.write(`Pilot:<br/><br/>`);
pilot1.firstName = "Avi";
pilot1.lastName = "Levi";
pilot1.licensNumber = "465847";
pilot1.seniority = 5;
pilot1.getInfo();

let flightAttendant1: FlightAttendant = new FlightAttendant;
document.write(`Flight attendant:<br/><br/>`);
flightAttendant1.firstName = "Ruth";
flightAttendant1.lastName = "Cohen";
flightAttendant1.seniority = 5;
flightAttendant1.countryOfOrigin = "Israel";
flightAttendant1.travelClass = "business";
flightAttendant1.getInfo();

let steward1: Steward = new Steward;
document.write(`Steward:<br/><br/>`);
steward1.firstName = "Yoni";
steward1.lastName = "Levi";
steward1.countryOfOrigin = "Canda";
steward1.groundJob = "Host";
steward1.seniority = 7;
steward1.getInfo();

let passenger1: Passenger = new Passenger;
document.write(`Passenger:<br/><br/>`);
passenger1.firstName = "Dana";
passenger1.lastName = "Cohen";
passenger1.passportNumber = "0489752";
passenger1.getInfo();

