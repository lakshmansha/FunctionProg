import { match } from 'match-toy';

const userList = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
  { id: '3', name: 'User 3' },
  { id: '4', name: 'User 4' },
  { id: '5', name: 'User 5' }
];

const generateData = () => {
  const dataList = [];
  for (let i = 1; i <= 20; i++) {
    const randomUserIndex = Math.floor(Math.random() * 5);
    const data = {
      id: 'ID' + i,
      title: 'Title' + i,
      uploadedBy: {
        id: userList[randomUserIndex].id,
        name: userList[randomUserIndex].name
      }
    };
    dataList.push(data);
  }
  return dataList;
};

const arrayData = generateData();

// const sampleContentTest = match
//   .case('[...contents({ id: "ID1", title, uploadedBy })]', (contents: any) => contents)
//   .end();

// console.log(JSON.stringify(sampleContentTest(arrayData)));

const getContent = match
  .case("[...contents({ uploadedBy: { id: '5' }, title, uploadedBy })]", (contents: any) => contents)
  .end();

console.log('Actual Content', JSON.stringify(getContent(arrayData)));

// const marvelCharacters = [
//   { name: 'Spiderman', alterEgo: 'Peter Parker', type: 'hero' },
//   { name: 'IronMan', alterEgo: 'Tony Stark', type: 'hero' },
//   { name: 'Doctor Doom', alterEgo: 'Victor Von Doom', type: 'villain' },
//   { name: 'Venom', alterEgo: 'Eddie Brock', type: 'villain' }
//  ];

// const getHeroes = match.case('[...characters({ name: hero, type: "hero", ... })]', (characters: any) => characters).end();

// console.log(getHeroes(marvelCharacters));