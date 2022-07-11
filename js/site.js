//get the values from the Page
//starts or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    //we need to call generateNumbers
    let numbers = generateNumbers(startValue,endValue);{
        

    }
    //we call displayNumbers
}

//generate numbers from startValue to the endValue
//logic function(s)
function generateNumbers(sValue,eValue){

    let numbers = [];

    //we want to get all numbers from start to end

    for (let index = sValue; index <= eValue; index++) {    
        //this will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;
}

//dispay the numbers and mark even numbers bold
//display or view functions
function displayNumbers(){

}