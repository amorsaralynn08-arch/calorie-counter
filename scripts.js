const form = document.getElementById("form");
if(form){
    form.addEventListener("submit", function(e){
e.preventDefault();
})};
let totalCalories = 0;
const caloriesnumber=number(calories);
totalCalories += caloriesnumber;
const result = document.getElementById("total-calories");
result.textContent = `Your total calorie intake is ${totalCalories} calories!`;
const list = document.getElementById("list");
const items = document.createElement("p");
items.textContent = foodName + " - " + calories + " calories";
list.appendChild(items);
const calories = document.getElementById("calories").value;
const foodName = document.getElementById("food-name").value;


const StoredData={
    foodName: foodName,
    calories: calories,
    result: result.textContent
};
localStorage.setItem("StoredData", JSON.stringify(StoredData));
console.log(StoredData);
localStorage.getItem("StoredData");
const retrievedData = JSON.parse(localStorage.getItem("StoredData"));
console.log(retrievedData);

const p= document.createElement("p");
p.innerText = `your total calorie intake is ${calories} calories!`;
list.appendChild(p);
