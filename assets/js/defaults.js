//C152s
var dGDNA = { bew: 1442.6, arm: 39.44, moment: 56.89 };
var dGCKA = { bew: 1430.6, arm: 39.40, moment: 56.30 };
//C172s
var dGTYQ = { bew: 1164.0, arm: 30.40, moment: 35.43 };
var dGTYI = { bew: 1159.6, arm: 30.00, moment: 34.77 };
var dGTYR = { bew: 1167.4, arm: 30.60, moment: 35.67 };
var dGTYB = { bew: 1187.4, arm: 30.20, moment: 35.92 };
//Twins
var dGTYG = { bew: 1680.65, arm: 110.49, moment: 2961.74 };
var dGTYH = { bew: 2947.0, arm: 84.87, moment: 2501.12 };

//Std Weight of Fuel
var fuelWeight = 6.0; 		//pounds per US Gallon
var fuelPrefVolume = true; // initally set global variable to Volume (true) vice Weight

function c152Defaults() {

	c152Defaults.prototype.wLandingWgtMax = 1670;
	c152Defaults.prototype.wTOWgtMax = 1670;
	c152Defaults.prototype.wRampWgtMax = 1675;

	c152Defaults.prototype.FuelBurn = 6;		// USG per hour
	c152Defaults.prototype.FuelQtyMax = 24.5;	// USG Usable
	c152Defaults.prototype.Runup = .8;			// Gallons of fuel used in runup
	//Stations

	//People
	c152Defaults.prototype.afrontRow = 39;
	//Fuel
	c152Defaults.prototype.aFuel = 42;
	//Baggage
	c152Defaults.prototype.abaggage1 = 64;
	c152Defaults.prototype.abaggage2 = 84;
	c152Defaults.prototype.wbaggageMax = 120;
}

function c172Defaults() {

	c172Defaults.prototype.wLandingWgtMax = 2300;
	c172Defaults.prototype.wTOWgtMax = 2300;
	c172Defaults.prototype.wRampWgtMax = 2305;

	c172Defaults.prototype.FuelBurn = 8;		// USG per hour
	c172Defaults.prototype.FuelQtyMaxStd = 38;	// USG
	c172Defaults.prototype.FuelQtyMaxLR = 48;	// USG
	c172Defaults.prototype.Runup = .8;			// Pounds of fuel used in runup
	//Stations

	//People
	c172Defaults.prototype.afrontRow = 37;
	c172Defaults.prototype.aRearRow = 73;
	//Fuel
	c172Defaults.prototype.aFuel = 48;

	//Oil
	c172Defaults.prototype.wOil = 15.0;
	c172Defaults.prototype.aOil = -14;
	c172Defaults.prototype.mOil = -0.2;


	//Baggage
	c172Defaults.prototype.abaggage1 = 95.0;
	c172Defaults.prototype.abaggage2 = 123.0;
	c172Defaults.prototype.wbaggageMax = 120;
}

function pa34Defaults() {

	pa34Defaults.prototype.wLandingWgtMax = 4000;
	pa34Defaults.prototype.wTOWgtMax = 4200;
	pa34Defaults.prototype.wRampWgtMax = 4224;

	pa34Defaults.prototype.FuelBurn = 18;
	pa34Defaults.prototype.FuelQtyMax = 93; 	// USG
	pa34Defaults.prototype.Runup = 1.5; 		// USG of fuel used in runup
	//Stations

	//People
	pa34Defaults.prototype.afrontRow = 85.5;
	pa34Defaults.prototype.aCenterRow = 118.1;
	pa34Defaults.prototype.aRearRow = 155.7;
	//Fuel
	pa34Defaults.prototype.aFuel = 93.6;
	//Baggage
	pa34Defaults.prototype.afwdBaggage = 22.5;
	pa34Defaults.prototype.abaggage1 = 178.7;
	pa34Defaults.prototype.wbaggagefwdMax = 100;
	pa34Defaults.prototype.wbaggage1Max = 100;
}

function be76Defaults() {

	be76Defaults.prototype.wLandingWgtMax = 3900;
	be76Defaults.prototype.wTOWgtMax = 3900;
	be76Defaults.prototype.wRampWgtMax = 3916;

	be76Defaults.prototype.FuelBurn = 16;
	be76Defaults.prototype.FuelQtyMax = 100; 	// USG
	be76Defaults.prototype.Runup = 1.5; 		// USG of fuel used in runup

	//Stations

	//People
	be76Defaults.prototype.afrontRow = 108.0;
	be76Defaults.prototype.aRearRow = 144.0;
	//Fuel
	be76Defaults.prototype.aFuel = 117.0;
	//Baggage
	be76Defaults.prototype.abaggage1 = 167.0;
	be76Defaults.prototype.wbaggageMax = 200;
}