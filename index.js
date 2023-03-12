// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber < 42) {
        return 42 - blockNumber
    } else {
        return blockNumber - 42
    }
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (destination - start > 0) {
        return (destination - start) * 264
    } else {
        return -(destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 400
    && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } else if (distanceTravelledInFeet(start, destination) > 2000
    && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far"
    }
}