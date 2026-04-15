// let ArrayNested =  [[30,10], [40,60], [[34,56], [75,12]]]
// // destructure and get 12, 60
// [firstArray , SecondArray , ThirdArray ]= ArrayNested
// [first , Second]=ThirdArray
// [start , end ] = SecondArray
// [begin , finish] = Second
// console.log(finish , end)

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(item){console.log(item)});

const people =["Ammy" , "Brian" , "Chris" , "Mathew"]
people.forEach(function(person){console.log("hello " + person +", welcome Back!")});


const prices = [100, 200, 300];
prices.forEach(function(price){console.log("The discounted price is " + (price - 30))});


const students = [
  { name: "Grace", score: 85 },
  { name: "Derrick", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Ben", score: 50 }
];

students.forEach((student) => {
  console.log(`${student.name} scored ${student.score}`);
});
let totalScore = 0;
students.forEach(student => {
  totalScore += student.score;
});
console.log("Class Total:", totalScore);

students.forEach(student => {
  if (student.score >= 80) {
    console.log(`${student.name} received an A!`);
  }
  if (student.score >= 60 && student.score < 80) {
    console.log(`${student.name} received a B.`);
  }
  if (student.score < 60) {
    console.log(`${student.name} Do more revisions.`);
   }
  else {
    console.log(`${student.name} good job.`);
  }
});