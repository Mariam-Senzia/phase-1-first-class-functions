/*function iReturnThings(thing) {
    return thing;
}
//console.log(iReturnThings({ firstName: 'Brendan', lastName: 'Eich' }));

//console.log(iReturnThings(function() {return 4 + 5;}))

function invokeThings (thing) {
    return thing ();
}
//console.log(invokeThings(function () {return 4 + 5;}));

function main(cb) {
    console.log(cb());
}
//console.log(main(function() {return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"}));

function greet(name, cb) {
    return cb(name);
}
//console.log(greet("Ada",function (name) {return "Hello there, " + name}))

//function Monday() {
    //console.log("Go for a five-mile run");
    //console.log("Pump iron");
 // }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
/////////////////////////////////////////////
  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  function Monday() {
    runFiveMiles();
    liftWeights();
  }
  console.log(Monday());

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  exerciseRoutine (function () {
    console.log("Stretch! Work that core!")
  })

  function morningRoutine(exercise) {
    let breakfast;
    if (exercise === liftWeights) {
        breakfast = "protein bar";
      } else if (exercise === swimFortyLaps) {
        breakfast = "kale smoothie";
      } else {
        breakfast = "granola";
      }

      exerciseRoutine(exercise);
      return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`)
      }
  }
  const afterExercise = morningRoutine(liftWeights);*/


  function receivesAFunction(Spy) {
        return (function receivesb() {`Hi I'm ${Spy}`})
  }
  
function returnsANamedFunction () {
    return (function named() { })
}

function returnsAnAnonymousFunction () {
    return (function () { })
}