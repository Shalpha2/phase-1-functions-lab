// Code your solution in this file!
const headquarters = 42; // Scuber's headquarters is at block 42

// Function to calculate distance in blocks from HQ
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - headquarters);
}

// Function to convert blocks to feet (1 block = 264 feet)
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}


function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}


function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; 
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance <= 2500) {
    return 25; 
  } else {
    return "cannot travel that far"; 
  }
}

