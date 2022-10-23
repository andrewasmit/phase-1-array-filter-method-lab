function findMatching(array, string){
    const result = array.filter(driver => driver.toLowerCase() === string.toLowerCase());
    return result;
}

function fuzzyMatch(array, string){
    const result = array.filter(driver => driver[0].toLowerCase() === string[0].toLowerCase() );
    return result;
}

function matchName(drivers, string){
    const result = drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
    return result;
}