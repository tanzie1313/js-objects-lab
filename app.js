const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
//   console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon)
// Exercise 3
// 1. Add a new property to the `game` object. Let's call it "difficulty".
// 2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


// Solve Exercise 3 here:
// */

game.difficulty = "Easy"; 
console.log(game.difficulty);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/


 const starterPokemon = pokemon.find(pokemon => pokemon.starter === true && pokemon.name === "Charmander");
 
game.party.push(starterPokemon);
console.log(game.party, "starterPokemon");
/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/



const selectedPokemon =[
    pokemon.find(pokemon => pokemon.type === "fire" && pokemon.hp > 50),
    pokemon.find(pokemon => pokemon.type === "water" && pokemon.hp > 50),
    pokemon.find(pokemon => pokemon.type === "grass" && pokemon.hp > 50),
]
// console.log(selectedPokemon, "selectedPokemon");
game.party.push(...selectedPokemon);
console.log(game.party, "selectedPokemon");
//im reading javascript for dummies i hope this works

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

// const completedGyms = game.gyms.filter(gym => gym.difficulty < 3);
// completedGyms.forEach(gym => gym.completed = true);
// console.log(game.gyms, "completedGyms");
const completedGyms = game.gyms.filter(gym => gym.difficulty < 3);
//console.log(completedGyms, "completedGyms");
completedGyms.forEach(gym => gym.completed = true);
console.log(completedGyms, "completedGyms");
/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
//define pokemon array with your starter pokenm
//find the starter pokemon in the party array
//filter for evolved pokemon. 
//replace the starter pokemon with the evolved pokemon
// Sample pokemon array with evolved forms

const starterPokemon1 = game.party.find(pokemon => pokemon.name === "Charmander");
// console.log(starterPokemon1, "starterPokemon1");
const evolvedPokemon = pokemon.find(pokemon => pokemon.name === "Charmeleon");
// console.log(evolvedPokemon, "evolvedPokemon");
const index = game.party.indexOf(starterPokemon);
game.party.splice(index, 1, evolvedPokemon);
console.log(game.party, "game.party");
/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/


 const party = [ "Charmealeon", "Charmealeon", "Wartortle", "Ivysaur"];

  party.forEach(pokemon => console.log(pokemon + " is in your party"));

  /*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
const starterPokemons = pokemon.filter(pokemon => pokemon.starter === true);
starterPokemons.forEach(pokemon => console.log(pokemon.name + " is a starter pokemon"));
/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
game.catchPokemon = function(pokemonObj){ 
    game.party.push(pokemonObj);
}

game.catchPokemon(pokemon[0]);
console.log(game.party, "catch a pokemon");

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
// slightly confused on this one
// function
game.catchPokemon = function(pokemonObj){
    // game.party.push(pokemonObj);
    
}
game.items.forEach (item => {
    if(item.name === "pokeball"){
        item.quantity-=1;
    }
})
// game.catchPokemon(pokemon[0]);
console.log(game.items, "pokeball quantity");

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
// Assuming game.gyms is an array of gym objects
const gyms = game.gyms;

// Filter gyms with difficulty below 6
const gymsToComplete = gyms.filter(gym => gym.difficulty < 6);

// Loop through the filtered gyms and set the complete property to true
gymsToComplete.forEach(gym => gym.complete = true);

// Output the updated gyms array
console.log(gyms, "below 6");

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
game.gymsStatus = function(){
    const gymTally = {
        completed: 0,
        incomplete: 0
    }
    game.gyms.forEach(gym => {
        if(gym.completed){
            gymTally.completed++;
        } else {
            gymTally.incomplete++;
        }
    })
    console.log(gymTally);
  
}
/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
game.partyCount = function(){
    return game.party.length;
}
const numberOfPokemon = game.partyCount();
console.log(numberOfPokemon, "numberOfPokemon");
/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
game.gyms.forEach(gym => {
    if(gym.difficulty < 8){
        gym.completed = true;
    }
})
console.log(game.gyms, "below 8");

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log(game, "game");




