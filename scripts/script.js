// Task 1: Implement a function that calculates total coffees sold
    // Calculate the total coffees sold by summing up a sales array
function calculateTotalCoffee (sales){
    let total = 0;
    for (const sale of sales){
        total += sales;
    }
    return total;
}


// Task 2: Implement a function to filter out decaf coffees from a list of coffee options
    // Use the filter method to filter out decaf coffee options
function filterDecafCoffees (decafCoffees){
    let coffeeOptions = [];
    for (const decafCoffees of coffeeOptions){
        if (decafCoffees.option == "decaf"){
            coffeeOptions.push(decafCoffees);
        }
    }
    return coffeeOptions;
}



// Task 3: Define a class for Jazz Coffee Roasters
class JazzCoffeeRoasters {
    constructor(name, blend){
        this.name = name;
        this.blend = blend
    }
}

// Task 4: Extend the Jazz Coffee Roaster class for Specialty Coffee Roasters
class SpecialtlyCoffeeRoasters extends JazzCoffeeRoasters {
    constructor (name, blend, price){
        super (name, blend);
        this.price = price;
    }
}

// Task 5: Create a custom constructor function for Jazz Coffee Blends
function JazzCoffeeBlends (name, price){
    let blend = {};
        blend.name= name;
        blend.price= price;
        return blend;
}

// Task 6: Implement a class with default parameters for Jazz Coffee Cups
class JazzCoffeeCups{
    constructor (name = "large cup", price = "$"){
        this.name = name;
        this.price = price;
    }
}

// Task 7: Use template literals to create a message about a coffee event
    //The event details have been given to you below
    const coffeeEvent = {
        name: "Java Jam",
        date: "April 10, 2024",
        venue: "Jazz & Java"
    };
    
    console.log(`Grand opening for ${name}, on ${date} at ${venue}.`)
    
    // Task 9: Use spreadrest operators on an array
    

    // Array of coffee types
    const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
    const newType = "Mocha";
    
    // Add a new coffee type using spread operator and create an updated coffee type array
    let updatedCoffeeTypes = [...coffeeTypes, newType]; // adding the mocha onto the coffee type list by using spread operator

    console.log("Updated Coffee Types:", updatedCoffeeTypes);


    
    