//change font of all body elements
function myFunction() {
    document.body.style.fontFamily = "Impact,Charcoal,sans-serif";
};
myFunction();

//change text align of h1

function centerAlign(element) {
    document.getElementById(element).style.textAlign = "center";
}
centerAlign("textAlign");

//change text align with variables

// let h1Center = document.getElementById("textAlign");

// h1Center.style.textAlign = "center"

//change text align with function by classname

// function centerAlign(element) {
//     let h1center = document.getElementsByClassName(element)
//     for (let i = 0; i < h1center.length; i++) {
//         h1center[1].style.textAlign = "center";
//     }

// }

// centerAlign("title");

function changeHeadings(element) {
    let headers = document.getElementsByClassName(element)
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.color = "red";
        headers[i].style.fontFamily = "Arial";
    }

}

changeHeadings("category");

function colorGenerator(element) {
    let colorArray = ["red", "blue", "yellow", "green", "brown"];
    let colorChange = document.getElementsByClassName(element)
    for (let i = 0; i < colorArray.length; i++) {
        colorChange[i].style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
        colorChange[i].style.opacity = ".6"
    }
}

colorGenerator("food-category");