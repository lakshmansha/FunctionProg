const { match } = require('match-toy');

// // Create a new pattern matching function
// const convertOneToString = match
//   .case('1', () => 'one')
//   .end();

// console.log(convertOneToString(1)); // return 'one'
// console.log(convertOneToString(2)); // return undefined

// // Create another one, but now we only need
// // the value returned by the match
// const one = match
//   .case('1', () => 'one')
//   .return(1); // using `return()` match runs immediately

// console.log(one === 'one'); // true

const userList = [
  { _id: '1', name: 'User 1' },
  { _id: '2', name: 'User 2' },
  { _id: '3', name: 'User 3' },
  { _id: '4', name: 'User 4' },
  { _id: '5', name: 'User 5' }
];

const generateData = () => {
  const dataList = [];
  for (let i = 1; i <= 20; i++) {
    const randomUserIndex = Math.floor(Math.random() * 5);
    const data = {
      _id: `ID${i}`,
      title: `Title ${i}`,
      uploadedBy: {
        id: userList[randomUserIndex]._id,
        name: userList[randomUserIndex].name
      }
    };
    dataList.push(data);
  }
  return dataList;
};

const arrayData = generateData();
console.log(arrayData);

const marvelCharacters = [
  { name: 'Spiderman', alterEgo: 'Peter Parker', type: 'hero' },
  { name: 'IronMan', alterEgo: 'Tony Stark', type: 'hero' },
  { name: 'Doctor Doom', alterEgo: 'Victor Von Doom', type: 'villain' },
  { name: 'Venom', alterEgo: 'Eddie Brock', type: 'villain' }
 ];

 const getHeroes = match
 .case('[...characters({ name: hero, type: "hero", ... })]')
   .do(({characters}) => characters)
 .end();

console.log(getHeroes(marvelCharacters));