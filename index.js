// code your solution here

function saturdayFun (activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`; 
}

// function expression, setting a function to a variable 
const mondayWork = function(activity = `go to the office`) {
    return `This Monday, I will ${activity}.`; 
}

function wrapAdjective(adjective = `*`) {
    const wrapFunction = function(basic =`special`) {
        return `You are ${adjective}${basic}${adjective}!`;
    }
    return wrapFunction; 
}