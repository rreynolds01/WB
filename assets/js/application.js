
$(document).ready(function () {

	init();
	
	$("#plot").prop('disabled',true);
	//$("#btnFullFuel").prop('disabled',true);

})

function init() {

	switch (TheAircraftType) {

		case "C172":
			objAircraft.type = "Cessna 172";
			objAircraft.colour = "warning";
			objAircraft.chart = BuildChart(TheAircraftType);
			buildAircraftMenu(TheAircraftType);
			buildWorksheet(TheAircraftType);
			break;

		case "BE76":
			objAircraft.type = "Duchess";
			objAircraft.colour = "danger";
			objAircraft.chart = BuildChart(TheAircraftType);
			buildAircraftMenu(TheAircraftType);
			buildWorksheet(TheAircraftType);
			break;

		case "PA34":
			objAircraft.type = "Seneca";
			objAircraft.colour = "primary";
			objAircraft.chart = BuildChart(TheAircraftType);
			buildAircraftMenu(TheAircraftType);
			buildWorksheet(TheAircraftType);
			break;

		default:
			objAircraft.type = "Cessna 152";
			objAircraft.colour = "success";
			objAircraft.chart = BuildChart(TheAircraftType);
			buildAircraftMenu(TheAircraftType);
			buildWorksheet(TheAircraftType);

	};

	$("#calcHeader").removeClass().addClass("card-header bg-" + objAircraft.colour);
	$("#plotHeader").removeClass().addClass("card-header bg-" + objAircraft.colour);

	$("#calcHeader").html("<span class='fa fa-calculator fa-lg'></span> " + objAircraft.type + " Worksheet");
	$("#plotHeader").html("<span class='fa fa-line-chart fa-lg'></span> " + objAircraft.type + " Centre of Gravity Envelope Graph");

	drawGraph();
	
}

function plotData(toWgt, toCG, lndWgt, lndCG, zfWgt, zfCG) {

	var newSeries = {
		name: "Values",
		type: "line",
		lineThickness: 2,
		indexLabel: "{label}",
		indexLabelFontSize: 14,
		indexLabelFontColor: "black",
		markerBorderColor: "white",
		markerBorderThickness: 2,
		markerSize: 12,
		toolTipContent: "{indexLabel}: <strong>{y} lbs</strong> <br/>CofG: <strong>{x}\"</strong>",
		yValueFormatString: "0000",
		xValueFormatString: "00.0",
		dataPoints: [
			{ x: toCG, y: toWgt, markerColor: "green", indexLabel: "Take Off" },
			{ x: lndCG, y: lndWgt, markerColor: "blue", indexLabel: "Landing" },
			{ x: zfCG, y: zfWgt, markerColor: "red", indexLabel: "Zero Fuel" }
		]
	};

	chart.options.data.push(newSeries);
	chart.render();
}

function clicked() {

	switch (TheAircraftType) {

		case "C172":
			plotData(2300, 44, 2100, 43.5, 1900, 42);
			break;

		case "BE76":
			plotData(3885, 110.9, 3600, 108.5, 3210, 108);
			break;

		case "PA34":
			plotData(4100, 93, 4000, 88, 3100, 84);
			break;

		case "C152":
			plotData(1670, 35, 1550, 34.5, 1500, 33);
			break;
	};
}

function buildAircraftMenu(aircraftType) {

	var theString;
	var theWorksheet;

	switch (TheAircraftType) {

		case "C172":

			theString = "<button type='button' class='btn btn-success' id='GDNA' onclick=\"getAircraftIDent('GDNA')\">GDNA</button>" +
				"<button type='button' class='btn btn-success' id='GCKA' onclick=\"getAircraftIDent('GCKA')\">GCKA</button>";
			break;

		case "BE76":

			theString = "<button type='button' class='btn btn-default disabled' id='GTYG'>GTYG</button>";
			break;

		case "PA34":

			theString = "<button type='button' class='btn btn-default disabled' id='GTYH'>GTYH</button>";
			break;

		case "C152":

			theString = "<button type='button' class='btn btn-primary' id='GTYQ' onclick=\"getAircraftIDent('GTYQ')\">GTYQ</button>" +
				"<button type='button' class='btn btn-primary' id='GTYI' onclick=\"getAircraftIDent('GTYI')\">GTYI</button>" +
				"<button type='button' class='btn btn-primary' id='GTYR' onclick=\"getAircraftIDent('GTYR')\">GTYR</button>" +
				"<button type='button' class='btn btn-primary' id='GTYB' onclick=\"getAircraftIDent('GTYB')\">GTYB</button>";
			break;
	};

	$("#aircraftMenu").html(theString);

}

function buildWorksheet(aircraftType) {

	var theWorksheet;

	switch (TheAircraftType) {

		case "C172":

			theWorksheet = "CalculationTables/C172table.html";
			break;

		case "BE76":

			theWorksheet = "CalculationTables/BE76table.html";
			break;

		case "PA34":

			theWorksheet = "CalculationTables/PA34table.html";
			break;

		case "C152":

			theWorksheet = "CalculationTables/C152table.html";
			break;
	};

	$("#calctable").load(theWorksheet);

}

function getAircraftIDent(ident) {

	if (ident == "GTYQ" || "GTYI" || "GTYR" || "GTYB") {

		var AC = ["GTYQ", "GTYI", "GTYR", "GTYB"];

		for (i = 0; i < 4; i++) {

			if (ident == AC[i]) {

				$("#" + AC[i] + "").removeClass().addClass('btn btn-warning active');

			} else {

				$("#" + AC[i] + "").removeClass().addClass('btn btn-primary');
			}
		};
	};

	if (ident == "GDNA" || "GCKA") {

		var AC = ["GDNA", "GCKA"];

		for (i = 0; i < 2; i++) {

			if (ident == AC[i]) {

				$("#" + AC[i] + "").removeClass().addClass('btn btn-warning active');

			} else {

				$("#" + AC[i] + "").removeClass().addClass('btn btn-success');
			}
		};
	};
	aircraftSelected(ident);
}

function aircraftSelected(theAircraft) {

	var testFuel;

	switch (theAircraft) {

		case "GDNA":

			var acGDNA = new c172Defaults();

			acGDNA.bew = dGDNA.bew;
			acGDNA.arm = dGDNA.arm;
			acGDNA.moment = dGDNA.moment;
			testFuel = (((acGDNA.FuelQtyMaxStd * fuelWeight) * acGDNA.aFuel)/ 1000);	// Pounds

			$("#bewWgt").text(acGDNA.bew.toFixed(2))
			$("#bewArm").text(acGDNA.arm.toFixed(1))
			$("#bewMom").text(acGDNA.moment.toFixed(2))

			$("#fuelArm").text(acGDNA.aFuel.toFixed(1))
			$("#fuelMom").text(presentValues(testFuel, 1))

			break;

		case "GCKA":

			var acGCKA = new c172Defaults();

			acGCKA.bew = dGCKA.bew;
			acGCKA.arm = dGCKA.arm;
			acGCKA.moment = dGCKA.moment;
			
			testFuel = (((acGCKA.FuelQtyMaxLR * fuelWeight) * acGCKA.aFuel)/ 1000);	// Pounds


			$("#bewWgt").text(presentValues(acGCKA.bew, 1))
			$("#bewArm").text(presentValues(acGCKA.arm, 1))
			$("#bewMom").text(presentValues(acGCKA.moment, 2))

			$("#fuelWgt").text(presentValues(1000.22, 1))

			$("#fuelArm").text(presentValues(acGCKA.aFuel, 1))
			$("#fuelMom").text(presentValues(testFuel, 1))

			$("#oilWgt").text(presentValues(acGCKA.wOil, 1))
			$("#oilArm").text(presentValues(acGCKA.aOil, 1))
			$("#oilMom").text(presentValues(acGCKA.mOil, 1))


			$("#fsArm").text(presentValues(acGCKA.afrontRow, 1))
			$("#rsArm").text(presentValues(acGCKA.aRearRow, 1))

			$("#bag1Arm").text(presentValues(acGCKA.abaggage1, 1))
			$("#bag2Arm").text(presentValues(acGCKA.abaggage2, 1))


			break;

		case "GTYQ":

			break;

		case "GTYI":

			break;

		case "GTYR":

			var acGTYR = new c152Defaults();
			acGTYR.bew = dGTYR.bew;

			break;

		case "GTYB":

			break;

		case "GTYG":

			break;

		default: //case "GTYH":
	};
	
	$("#plot").prop('disabled',false);
	$("#btnFullFuel").prop('disabled',false);
}

//format output of the inputted value to one or two numbers after the decimal. Used to display values on the worksheet.
function presentValues(theValue, thePrecision) {

	return theValue.toFixed(thePrecision);

}

function toggleFuel(toggleSelection) {

	if (toggleSelection == "USG") {

		$("#USG").removeClass().addClass('btn btn-danger');
		$("#WGT").removeClass().addClass('btn btn-outline-primary');
		
		fuelPrefVolume = true;
		
		$("#fuelLoaded").val(presentValues(123.45, 1))

	//	fuelManage("Volume");
	} else {

		$("#WGT").removeClass().addClass('btn btn-danger');
		$("#USG").removeClass().addClass('btn btn-outline-primary');
		
		fuelPrefVolume = false;
		
		$("#fuelLoaded").val(presentValues(444.45, 1))


	//	fuelManage("Weight");

	}
}

//function to control the fuel weight or fuel volume. Additionally a utility function to change inputs from Volume to Weight and back.
// This function is called when ever a user updates the fuel being loaded, switches from/to weight oe volume, or presses full fuel

function fuelManage(fuelEvent) {
	
	$("#fuelWgt").text(presentValues(888.45, 1))

	switch (fuelEvent) {

		case "Set Full": //Set Full Fuel button is pressed

			setVolumeWeight(24);
			break;

		case "Fuel Load": // clicks on number selector or types in a fuel value

			break;

		case "Volume":

			fuelPref = "V";

			break;

		case "Weight":

			fuelPref = "W";

			break;
	}

	function setVolumeWeight(fuelAmount) {

		if (fuelPref == "V") {

			fuelAmount = fuelAmount;

		} else {

			fuelAmount = fuelAmount * fuelWeight;

		}
		console.log(fuelAmount);

		return fuelAmount;
	}
};