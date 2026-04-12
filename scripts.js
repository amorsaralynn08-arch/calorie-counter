const form = document.getElementById("form");
const caloriesInput = document.getElementById("calories");
const foodInput = document.getElementById("foodName");
const list = document.getElementById("list");
const totalDisplay= document.getElementById("total-calories");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(foodInput);
    console.log(caloriesInput);
    

    let foods= JSON.parse(localStorage.getItem("foods")) || [];
    function displayFoods(){
        list.innerHTML="";
        let totalCalories=0;
            foods.forEach(function(food){
                const item = document.createElement("p");
                item.textContent = food.name +"-" + food.calories + "calories";
                list.appendChild(item);
                totalCalories += food.calories;
            });
            totalDisplay.textContent = "Total Calories: " + totalCalories;
    }
    displayFoods();


    const foodName= foodInput.value;
    const calories = Number(caloriesInput.value);

    if(foodName === "" || calories === 0){
        alert("Please enter valid food name and calories.");
        return;
    }
    foods.push({name: foodName, calories: calories});
   
         localStorage.setItem("foods", JSON.stringify(foods));
         displayFoods();
         foodInput.value="";
            caloriesInput.value="";
    });
    function resetFoods(){
        localStorage.removeItem("foods");
        foods=[];
        displayFoods();
    }

    