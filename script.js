function appendValue(value){

    document.getElementById("display").value += value;
}

function clearDisplay(){

    document.getElementById("display").value = "";
}

function calculate(){

    let expression =
    document.getElementById("display").value;

    try{

        document.getElementById("display").value =
        eval(expression);

    }

    catch{

        document.getElementById("display").value =
        "Error";
    }
}

function backspace(){

    let display =
    document.getElementById("display");

    display.value =
    display.value.slice(0,-1);
}

document.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        calculate();
    }
});

document.addEventListener("keydown", function(event){

    const key = event.key;

    if(!isNaN(key) || ['+','-','*','/','.'].includes(key)){

        appendValue(key);
    }

    if(key === "Backspace"){

        backspace();
    }

    if(key === "Enter"){

        calculate();
    }
});