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

//change subheadings to color red and font arial
function changeHeadings(element) {
    let headers = document.getElementsByClassName(element)
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.color = "red";
        headers[i].style.fontFamily = "Arial";
        headers[i].style.fontSize = "2rem"
    }

};

changeHeadings("category");

//random colorizer done with for loop, also set opacity
function colorGenerator(element) {
    let colorArray = ["red", "blue", "yellow", "green", "brown"];
    let backgroundColors = ["black", "violet", "darkBlue"]
    let colorChange = document.getElementsByClassName(element)
    console.log(colorChange)
    const mq = window.matchMedia("(min-width: 600px)")
    for (let i = 0; i < colorChange.length; i++) {
        colorChange[i].style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
        colorChange[i].style.opacity = ".6"
        colorChange[i].style.backgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
        colorChange[i].style.flexBasis = "300px";
        colorChange[i].style.height = "10rem"
        colorChange[i].style.listStyle = "none";
        colorChange[i].style.paddingTop = "10px";
        for (let j = 0; j < colorChange[i].children.length; j++) {
            colorChange[i].children[j].style.paddingTop = "10px"
        }
    }

}

colorGenerator("food-category");

//align the food category

function alignRow(element) {
    let flexRow = document.getElementsByClassName(element)
    flexRow[0].style.display = "flex";
    flexRow[0].style.justifyContent = "space-around";
    flexRow[0].style.flexWrap = "wrap";

}

alignRow("main");

//change font and family for the warning heading

let warning = document.getElementById("warning")

warning.style.fontSize = "2rem"
warning.style.fontFamily = "Roboto"

//change background color for even list items
function isEven(value) {
    let evenColor = document.getElementsByClassName(value)
    for (let i = 0; i < evenColor.length; i++) {
        if (i % 2 !== 0) {
            evenColor[i].style.backgroundColor = "orange";
        }
        evenColor[i].style.width = "15rem"
        evenColor[i].style.listStyle = "none";
    }
}

isEven("allergy-info");

function centerWarning(element) {
    let setColumn = document.getElementsByClassName(element)
    setColumn[0].style.display = "flex";
    setColumn[0].style.flexDirection = "column";
    setColumn[0].style.alignItems = "center";

}

centerWarning("allergy-warning");

function footerContainer(element) {
    let roundedFooter = document.getElementsByClassName(element)
    roundedFooter[0].style.display = "flex";
    roundedFooter[0].style.justifyContent = "space-around";
    roundedFooter[0].style.flexWrap = "wrap";
    roundedFooter[0].style.marginTop = "50px"
};

footerContainer("footer");

function roundedFooter(element) {
    let roundedFooter = document.getElementsByClassName(element)
    for (let i = 0; i < roundedFooter.length; i++) {
        roundedFooter[i].style.border = "2px solid orange";
        roundedFooter[i].style.borderRadius = "250px"
        roundedFooter[i].style.width = "250px";
        roundedFooter[i].style.height = "250px";
        roundedFooter[i].style.display = "flex";
        roundedFooter[i].style.justifyContent = "center";
        roundedFooter[i].style.alignItems = "center";


    }

}

roundedFooter("food-desc");