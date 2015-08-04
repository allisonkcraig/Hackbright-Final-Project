$( document ).ready(function() {
	
// establish drafting table and pen
var draftingTable = document.getElementById("drafting-table-back");
var gridPenBack = draftingTable.getContext("2d");


// y axis grid lines
for (var y = 0.5; y < 461; y += 20) {
	gridPenBack.beginPath();
	gridPenBack.moveTo(0, y);
	gridPenBack.lineTo(601, y);
	gridPenBack.strokeStyle = "#E8E8EE";
	gridPenBack.stroke();
	};


// x axis grid lines
for (var x = 0.5; x < 601; x += 20) {
	gridPenBack.beginPath();
	gridPenBack.strokeStyle = "#E8E8EE";
	gridPenBack.moveTo(x, 0);
	gridPenBack.lineTo(x, 601);
	gridPenBack.stroke();
	};


// right angle equations to find rise or run
var pythagoreanCAndA = function(c, a) {
	var sideB = Math.sqrt((Math.pow(c, y = 2)) - (Math.pow(a, y = 2)));
	return sideB
};


var pythagoreanAAndB = function(a, b) {
	var sideC = Math.sqrt((Math.pow(a, y = 2)) + (Math.pow(b, y = 2)));
	return sideC
};


//function to find point h
var locatePointOnC = function(distanceOnC, fullSideX, fullSideC) {
	var x = distanceOnC * fullSideX;
	return x / fullSideC;
};


// basic measurements
var bust = 36.00;
var waist = 26.00;
var abdomen = 34.25;


// advanced measurements
var fullLengthBack = 18;
var centerBack = 17.25;
var backShoulderSlope = 17.13 + 0.125;
var acrossBack = 7;
var bustDepth = 9.25;
var shoulderLength = 5;
var backShouldLength = shoulderLength + 0.5 // added dart intake for back dart
var backArc = 9 + 0.75;
var backSpan = 3.75;
var waistArcBack = 6.25;
var dartPlacement = 3.25;
var backNeck = 3.00 - 0.125;
var backAcrossShoulder = 7.63;
var acrossBack = 7.00;
var sideLength = 8.5;
var backDartIntake = 1.5; //make radio button for regular and petite/junior



// set up pen and set colors for temporary lines
var penBack = draftingTable.getContext("2d");
penBack.fillStyle="#83AF9B";
penBack.strokeStyle = "#EA8C86";


// draw lines and dots
penBack.beginPath()
penBack.moveTo(0, 0);
penBack.fillRect(0,0, 3, 3); // a

// Scaled Measurements
document.scale = 20;
document.scaledfullLengthBack = fullLengthBack * document.scale;
document.scaledBackAcrossShoulder = backAcrossShoulder * document.scale;
document.scaledBackArc = backArc * document.scale;
document.scaledDartPlacement = dartPlacement * document.scale;

// Find slope offset o fron the top of the axis. -- point g's y axis 
var backShoulderSlopeRise = pythagoreanCAndA( backShoulderSlope, backAcrossShoulder)
document.scaledOffset = (fullLengthBack - backShoulderSlopeRise) * document.scale; // for finding how far from the top to start finding h point


// calculating rises and runs for right angle formulas of SIDE SEAM
var sideSeamRiseScaled = pythagoreanCAndA(sideLength, (backArc) - (backDartIntake + waistArcBack)) * document.scale;
var offSetSideSeamRiseScaled = (document.scaledfullLengthBack + 0.1875 * document.scale) - sideSeamRiseScaled // y axis of point n



//FULL LENGTH ***********************************************************
penBack.lineTo(0, (document.scaledfullLengthBack)); // a to b
penBack.fillRect(0, (document.scaledfullLengthBack), 3, 3); // b

penBack.moveTo(0, (((fullLengthBack - centerBack) - 0.375)*document.scale)); // move to neckline
penBack.lineTo(80, (((fullLengthBack - centerBack) - 0.375)*document.scale)); // d squared off


// ACROSS SHOULDER *******************************************************
penBack.moveTo(0, 0);
penBack.lineTo((document.scaledBackAcrossShoulder), 0); // a to c
penBack.lineTo((document.scaledBackAcrossShoulder), 100); // square off c


// BACK ARC **************************************************************
penBack.moveTo(0, (document.scaledfullLengthBack)); 
penBack.lineTo(document.scaledBackArc, (document.scaledfullLengthBack)); // b to e
penBack.lineTo(document.scaledBackArc, 60) // square up from e

penBack.moveTo(document.scaledDartPlacement, (document.scaledfullLengthBack)); 
penBack.fillRect(document.scaledDartPlacement, document.scaledfullLengthBack, 3, 3); // dart placement


// SLOPE *********************************************************
penBack.moveTo(0, document.scaledfullLengthBack); 
penBack.lineTo(document.scaledBackAcrossShoulder, document.scaledOffset) // b to g
penBack.fillRect(document.scaledBackAcrossShoulder, document.scaledOffset, 3, 3); // g


// //DART LEGS ***************************************************************
penBack.moveTo(0, document.scaledfullLengthBack);
penBack.lineTo(dartPlacement * document.scale, document.scaledfullLengthBack + 0.125); // line to i
penBack.fillRect(dartPlacement  * document.scale, document.scaledfullLengthBack + 0.125, 3, 3); // point i
penBack.fillRect((dartPlacement + backDartIntake)  * document.scale, document.scaledfullLengthBack + (0.125 * document.scale), 3, 3); // point k
penBack.fillRect((dartPlacement + (backDartIntake / 2))  * document.scale, document.scaledfullLengthBack, 3, 3); // point l - mid point of back dart
penBack.lineTo((dartPlacement + (backDartIntake / 2))  * document.scale, (document.scaledfullLengthBack - (sideLength * document.scale)), 3, 3); // point 0


// WAIST ARC *********************************************************************
penBack.fillRect(((waistArcBack + backDartIntake + 0.24) * document.scale) , (document.scaledfullLengthBack + (0.1875 * document.scale)), 3, 3); // point m - waist arc with dart and ease as well as 3/16 inch added to y


// NEEDS NOTE
penBack.fillRect(0, (((document.scaledPointHY)- ((fullLengthBack - centerBack) - 0.375 * document.scale))) /3 + document.scaledOffset, 3, 3); // n
penBack.moveTo(0, (((document.scaledPointHY)- ((fullLengthBack - centerBack) - 0.375 * document.scale))) /3 + document.scaledOffset);
penBack.lineTo((acrossBack + 0.25) * document.scale, (((document.scaledPointHY)- ((fullLengthBack - centerBack) - 0.375 * document.scale))) /3 + document.scaledOffset, 5, 5); //to point O


//SHOULDER ***************************************************************
penBack.fillRect(backNeck * document.scale, 0, 3, 3) // point f
penBack.moveTo(backNeck * document.scale, 0) // point f
penBack.lineTo(0,0)



// // armhole curve needs to be calibrated
// penBack.moveTo((document.scaledBackAcrossShoulder), (document.scaledOffset));
// penBack.quadraticCurveTo(130, backAcrossShoulder * document.scale ,document.scaledBackArc, (backAcrossShoulder * document.scale)); // needs to be calibrated


// SHOULDER SEAM POINT ***************************************************
penBack.fillRect((backArc * document.scale), offSetSideSeamRiseScaled, 3,3);


// apply stroke to lines
penBack.stroke();





// CREATE FINAL DRAFT ***************************************************
var penFinalBack = draftingTable.getContext("2d");
penFinalBack.fillStyle= "black";
penFinalBack.strokeStyle = "black";


// draw lines and dots
penFinalBack.beginPath()
penFinalBack.moveTo(0, 0);
penFinalBack.fillRect(0,0, 3, 3); // a


// //SHOULDER ***************************************************************



// DART LEGS ***************************************************************
penFinalBack.moveTo(0, document.scaledfullLengthBack);
penFinalBack.lineTo(dartPlacement * document.scale, document.scaledfullLengthBack + (0.125 * document.scale)); // line to i
penFinalBack.lineTo((dartPlacement + (backDartIntake / 2))  * document.scale, (document.scaledfullLengthBack - (sideLength * document.scale)), 3, 3); // point 0
penFinalBack.lineTo((dartPlacement + backDartIntake)  * document.scale, document.scaledfullLengthBack + (0.125 * document.scale)); // point k
penFinalBack.lineTo(((waistArcBack + backDartIntake + 0.24) * document.scale) , (document.scaledfullLengthBack + (0.1875 * document.scale))); // point m - waist arc with dart and ease


//SIDE SEAM
penFinalBack.lineTo((backArc * document.scale), offSetSideSeamRiseScaled); // point n



// apply stroke to lines
penFinalBack.stroke();


// create an image from the canvas

// var blockURLBack = draftingTable.toDataURL();

// console.log(blockURLBack)
});