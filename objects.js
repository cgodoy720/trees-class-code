// const name = {
//     first: "Eleanor",
//     last: "Willows",
//   };
//   const address = {
//     line1: "493 Poplar St.",
//     line2: "Apt. 3A",
//     city: "New York City",
//     state: "NY",
//   };
  
// //   console.log({ name, ...address });
// //   console.log({ ...name, address });
//   console.log({ ...name, ...address });


const people = [
    { first: "Owen", last: "Knight" },
    { first: "Raelynn", last: "Navarro" },
    { first: "Demi", last: "Porter" },
    { first: "Joe", last: "Davies" },
  ];
  
  const friends = [];
  friends.push(people.pop());
  friends.push({...people[1]});
  people[1].first = "Rae";
  
  console.log(friends);
  console.log(people);