let raceNumber = Math.floor(Math.random()*1000);

const registeredEarly = true;
const ageOfRunner = 20;

if(ageOfRunner >18 && registeredEarly){raceNumber += 1000};

if(raceNumber > 1000){console.log("The runner with number over 1000 will start race at 9:30.")};
else if(ageOfRunner > 18 && !registeredEarly ){console.log("The other adult runner over 18 years old will start race at 11:00.")};
else if(raceNumber > 1000 && ageOfRunner < 18){console.log("Youth registrants will start race at 12:30.")};