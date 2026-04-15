const form = document.getElementById("form");

const foodInput = document.getElementById("foodName");
const list = document.getElementById("list");
const totalDisplay = document.getElementById("total-calories");
const resetBtn = document.getElementById("reset-btn");

let totalCalories = 0;

resetBtn.addEventListener("click", function () {
  list.innerHTML = "";
  totalCalories = 0;
  totalDisplay.textContent ="";
});

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const foodName = foodInput.value;

   
    let url = "https://api.calorieninjas.com/v1/nutrition?query=" + foodName;
    try {
       const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "V0ja3xHyr70XZexC9q0Z3A==klQeJqyo45J4trlk",
        },
      });

       const data= await response.json();
       console.log(data);
       if(data.items.length>0){
        data.items.forEach((item) => {
            const li= document.createElement("p");
            li.textContent = `${item.name}: ${item.calories} calories`;
            list.appendChild(li);
            totalCalories += item.calories;
          });
          totalDisplay.textContent = `Total Calories: ${totalCalories}`;
        }} catch (error) {
      console.log("error fetching data", error);
    }
    foodInput.value = "";
}
);


// let ArrayNested = [
//   [30, 10],
//   [40, 60],
//   [
//     [34, 56],
//     [75, 12],
//   ],
// ];
// // destructure and get 12, 60
// let [firstArray, SecondArray, ThirdArray] = ArrayNested;
// let [first, Second] = ThirdArray;
// let [start, end] = SecondArray;
// let [begin, finish] = Second;
// console.log(finish, end);

// let data = {
//   user: {
//     id: "11",
//     username: "KennyG",
//     email: "ken@gmail.com",
//     password: "123456789",
//     history: {
//       parents_name: "james and lydia",
//       hometown: "naivasha",
//       company: "none",
//     },
//   },
//   user2: {
//     id: "15",
//     username: "Wendy",
//     email: "wanja@gmail.com",
//     password: "123456789",
//     history: {
//       parents_name: "hanna and timo",
//       hometown: "kisumu",
//       company: "burudika",
//     },
//     alergies: {
//       nuts: ["peanuts", "cashewnuts", "sunflower"],
//     },
//   },
// };
// // get the company of user with ID 11 and the allergies for user with ID 15
// let {user: {history: { company }}} = data;

// let {user2: {alergies: { nuts }}} = data;

// let [alergy1, alergy2, alergy3] = nuts;

// console.log(company);
// console.log(alergy1, alergy2, alergy3);
