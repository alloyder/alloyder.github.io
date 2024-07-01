console.log("hi")

var startPopulation = 10
var people = []
var totalDays = 20
var startFractionInfected = 0.10
var gridSize = 10

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function infect(person) {
    person.is_infected = true
    person.infectionStartStep = 0
    person.contagiousStartStep = 4
    person.infectionResolvedStep = 14
    person.infectionRecovers = true
}

function resolve(person) {
    if (person.infectionRecovers) {
        person.is_infected = false
        person.infectionRecovers = true
        person.immunity = 1.0
    }
    else {
        person.alive = false
    }
}

function newPerson() {
    var startLocation = [getRandomInt(gridSize), getRandomInt(gridSize)]
    var person = {
        alive: true,
        // age: getRandomInt(100), 
        immunity: Math.random() / 4,//0-1.0
        // infectionLevel: 0,//0-1
        is_infected: false,
        infectionStartStep: 0,
        contagiousStartStep: 0,
        infectionResolvedStep: 0,
        infectionRecovers: true,
        location: startLocation,
        homeLocation: startLocation,

    }
    if (Math.random() <= startFractionInfected) {
        infect(person)
    }

    return person
}
function checkIfHome(p) {
    if (p.location[0] == p.homeLocation[0] && p.location[1] == p.homeLocation[1]) {
        console.log('I am home')
        if (Math.random() <= .2) {
            p.location = [getRandomInt(gridSize), getRandomInt(gridSize)]   
        }
            
    }
    else {
        if (Math.random() <= 0.8) {
            p.location = p.homeLocation
        }

    }
}
function initPopultion() {
    console.log("initializing")
    for (var i = 0; i < startPopulation; i++) {
        people.push(newPerson())
    }
}

function runUpdateStep(currentDay) {
    console.log("Updating day", currentDay)
    for (var p of people) {

    }
}

function mainloop() {
    for (var d = 0; d < totalDays; d++) {
        runUpdateStep(d)
    }
}

function getTotalInfected() {
    var infectCount = 0
    for (var p of people) {
        if (p.is_infected) {
            infectCount = infectCount + 1
        }
    }
    return infectCount
}

function printPeopleSummary() {
    console.log("Start Population:", startPopulation)
    console.log("Infected Count:", getTotalInfected())
}


initPopultion()
mainloop()
printPeopleSummary()



