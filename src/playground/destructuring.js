// Object Destructuring

// const person = {
//     name: 'Orlin',
//     age: 38,
//     location: {
//         city: 'Sofia',
//         temp: 25
//     }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location; //renaming syntax - temp to temperature
// console.log(`The temperature in ${city} is ${temperature}C.`);

// const person1 = {
//     age: 38,
//     location: {
//         city: 'Sofia',
//         temp: 25
//     }
// };

// const { name = 'Anonymous', age } = person1; //setting default value if none is present
// console.log(`${name} is ${age}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// Array Destructuring

// const address = ['1239 S Juniper Str.', 'New York', 'NY', '12345'];
// const [, city, state = 'New York'] = address; // Does not destructure first item, and last item. Default value syntax.
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

// console.log(`A medium Coffee (hot) costs $2.50.`);
console.log(`A medium ${itemName} costs ${mediumPrice}.`);