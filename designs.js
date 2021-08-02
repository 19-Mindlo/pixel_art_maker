let width = document.getElementById("inputWidth");
let height = document.getElementById("inputHeight");
let size = document.getElementById("sizePicker");
let canvas = document.getElementById("pixelCanvas");


//function to make grid
function makeGrid() {
    for (let i = 0; i < height.value; i++) {
        let row = canvas.insertRow(i);
        for (let c = 0; c < width.value; c++) {
            let column = row.insertCell(c);
        }
    }
}


function eventlisteners() {
    // When size is submitted by the user, call makeGrid()
    size.addEventListener("submit", function(event) {
        event.preventDefault();
        makeGrid();
        canvas.firstChild.remove();
        makeGrid();
    });

    //event listener for backgroud-color
    canvas.addEventListener("click", function (event) {
        const color = document.getElementById("colorPicker");
        background = color.value;
        event.target.style.backgroundColor = background;
    });
}


eventlisteners();
