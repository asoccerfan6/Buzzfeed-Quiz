let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result4");
let result5 = document.querySelector(".result5");
let button = document.querySelector(".submit");
button.onclick = function() {
    let input1 = Number(document.querySelector(".siblings").value);
    let input2 = document.querySelector(".food").value;
     console.log(input1);
     console.log(input2);
    // input1 = Number(input1);
    if (input1 < 4 && input2 === "Sweet") {
        result1.style.display = "show";
        console.log = "Boo";
    } else if (input1 >= "4" && input2 === "Sweet") {
        result2.style.display = "show";
    } else if (input1 < "4" && input2 === "Savory") {
        result3.style.display = "show";
    } else if (input1 >= "4" && input2 === "Savory") {
        result4.style.display = "show";
    } else {
        result5.style.display = "show";
    }
};
