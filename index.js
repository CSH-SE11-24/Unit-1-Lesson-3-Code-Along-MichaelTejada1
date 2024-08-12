// Code Along Norms: 
// 1. Only be on Repl.it/classroom resources
// 2. Actively follow along and engage
// 3. Ask questions and flag if you get stuck
// 4. Take notes as needed!
let name = prompt("whats your name?")
console.log("welcome to my game,"+name)
console.log("welcome to my game,",name)
console.log(`welcome to my game, ${name}`)

let role= prompt("what role do you want?(magician,fighter,peasent)")
console.log(`okay,${name}, your role is now ${role}`)

let powerLevel=prompt("what is your power level?")

powerLevel=parseInt(powerLevel)
console.log(typeof powerLevel)