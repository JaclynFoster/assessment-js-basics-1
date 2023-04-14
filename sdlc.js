// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Implementation
// Design
// Maintain
// Analysis of Requirements
// Testing & Integration
// Planning

const newSDLC = {
    one: "Planning",
    two: "Analysis of Requirements",
    three: "Design",
    four: "Implementation",
    five: "Testing & Integration",
    six: "Maintain"
}
console.log(newSDLC);
console.log("----------------------------------")
//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 
console.log(planning);
const analyisOfRequirements = "Deciding what features are needed and what programs to use"
console.log(analyisOfRequirements);
const design = "This is the layout of your project and how it will look"
console.log(design);
const implementation = "Project will go into production and where users can begin downloading and using the project";
console.log(implementation);
const testingAndIntegration = "This makes sure the project runs smoothly and all testing/QA is completed"
console.log(testingAndIntegration);
const maintain = "Maintaining the project after it is in full operation, i.e debugging, upgrades, etc."
console.log(maintain);