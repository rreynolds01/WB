var objAircraft = {};
var chart;
var TheAircraftType = (window.location.hash.substring(1));


function BuildChart(Aircraft){

	var options;

	switch(Aircraft) {

		// Cessna 172 chart parameters
		case "C172":
		options = {

			title:{
				text: "Weight & Balance Chart - C172",
				fontSize: 25             
			},

			legend:{
				fontSize: 14,
				fontFamily: "Calibri",
				dockInsidePlotArea: true,
				verticalAlign: "top",
				horizontalAlign: "right" 
			},

			axisX:{
				title: "Aircraft C of G Location - Inches aft of Datum",
				margin: 20,
				titleFontSize: 14,
				labelFontSize: 12,
				labelFontColor: "red",
				minimum: 34,
				maximum: 48,
				gridThickness: .5,
				interval: 1
			},

			axisY:{
				title: "Aircraft Weight (Pounds)",
				margin: 20,
				titleFontSize: 14,
				labelFontSize: 12,
				labelFontColor: "blue",
				valueFormatString:  "0000",
				minimum: 1500,
				maximum: 2400,
				gridThickness: .5,
				interval: 100
			},

			data: [{
				name: "Normal",
				type: "area",
				showInLegend: true,
				legendMarkerType: "square",
				lineThickness: 1,
				fillOpacity: .1,
				highlightEnabled: false,
				dataPoints: [
				{ x: 35, 	y: 1500	},
				{ x: 35,	y: 1950 },
				{ x: 38.5,	y: 2300 },
				{ x: 47.5,	y: 2300 },
				{ x: 47.5,	y: 1500	}
				]
			},

			{
				name: "Utility",
				type: "area",
				showInLegend: true,
				legendMarkerType: "square",
				lineDashType: "longDash",
				lineThickness: 1.5,
				fillOpacity: .1,
				highlightEnabled: false,

				dataPoints: [
				{ x: 35, 	y: 1500	},
				{ x: 35,	y: 1950 },
				{ x: 35.5,	y: 2000 },
				{ x: 40.5,	y: 2000 },
				{ x: 40.5,	y: 1500	}
				]
			}],
		};
		break; // eof C172
		
		case "BE76": // Duchess  chart parameters

		options = {

			title:{
				text: "Weight & Balance Chart - Duchess",
				fontSize: 25             
			},

			axisX:{
				title: "Aircraft C of G Location - Inches aft of Datum",
				margin: 20,
				titleFontSize: 14,
				labelFontSize: 12,
				labelFontColor: "red",
				minimum: 106,
				maximum: 118,
				gridThickness: .5,
				interval: 1
			},

			axisY:{
				title: "Aircraft Weight (Pounds)",
				margin: 20,
				titleFontSize: 14,
				labelFontSize: 12,
				labelFontColor: "blue",
				valueFormatString:  "0000",
				minimum: 2500,
				maximum: 4000,
				gridThickness: .5,
				interval: 100
			},

			data: [{
				name: "Normal",
				type: "area",
				lineThickness: 1,
				fillOpacity: .1,
				highlightEnabled: false,
				dataPoints: [
				{ x: 106.6, 	y: 2500	},
				{ x: 106.2,	y: 3250 },
				{ x: 110.6,	y: 3900 },
				{ x: 117.5,	y: 3900 },
				{ x: 117.5,	y: 2500	}
				]
			},

			{
				name: "Zero Fuel",
				type: "line",
				lineThickness: 2,
				markerType: "none",
				color: "black",
				highlightEnabled: false,

				dataPoints: [
				{ x: 106, 	y: 3500	},
				{ x: 118,	y: 3500 }
				]
			}]
		};
		break;

		case "PA34": // Seneca chart parameters
			
	options = {

		title:{
			text: "Weight & Balance Chart - Seneca",
			fontSize: 25             
		},

		axisX:{
			title: "Aircraft C of G Location - Inches aft of Datum",
			margin: 20,
			titleFontSize: 14,
			labelFontSize: 12,
			labelFontColor: "red",
			minimum: 79,
			maximum: 95,
			gridThickness: .5,
			interval: 1
		},

		axisY:{
			title: "Aircraft Weight (Pounds)",
			margin: 20,
			titleFontSize: 14,
			labelFontSize: 12,
			labelFontColor: "blue",
			valueFormatString:  "0000",
			minimum: 2200,
			maximum: 4300,
			gridThickness: .5,
			interval: 100
		},

		data: [{
			name: "Normal",
			type: "area",
			lineThickness: 1,
			fillOpacity: .1,
			highlightEnabled: false,
			dataPoints: [
			{ x: 80.7, 	y: 2200	},
			{ x: 80.7,	y: 2800 },
			{ x: 82,	y: 3400 },
			{ x: 88,	y: 4200 },
			{ x: 94.6,	y: 4200	},
			{ x: 94.6,	y: 2200	}
			]
		}]
	};
	break;

	default:

	// Cessna 152 chart parameters
	options = {

		title:{
			text: "Weight & Balance Chart - C152",
			fontSize: 25             
		},

		legend:{
			fontSize: 14,
			fontFamily: "Calibri",
			dockInsidePlotArea: true,
			verticalAlign: "top",
			horizontalAlign: "right" 

		},

		axisX:{
			title: "Aircraft C of G Location - Inches aft of Datum",
			margin: 20,
			titleFontSize: 14,
			labelFontSize: 12,
			labelFontColor: "red",
			minimum: 30,
			maximum: 37,
			gridThickness: .5,
			interval: 1
		},

		axisY:{
			title: "Aircraft Weight (Pounds)",
			margin: 20,
			titleFontSize: 14,
			labelFontSize: 12,
			labelFontColor: "blue",
			minimum: 1000,
			maximum: 1800,
			gridThickness: .5,
			interval: 100
		},

		data: [{
			name: "Normal",
			type: "area",
			showInLegend: true,
			legendMarkerType: "square",
			lineThickness: 1,
			fillOpacity: .1,
			highlightEnabled: false,
			dataPoints: [
			{ x: 31, 	y: 1000	},
			{ x: 31,	y: 1350 },
			{ x: 32.7,	y: 1670 },
			{ x: 36.5,	y: 1670 },
			{ x: 36.5,	y: 1000	}
			]
		}]
	};
	break;

	}; //switch

	return options;

};