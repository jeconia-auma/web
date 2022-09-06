let disp_val = 0;
const ul = document.getElementById("ul");
const bars = document.getElementById("bars");
bars.addEventListener('click', change);
const logo = document.getElementById("logo");

function innitialize(){
    disp_val = 0;
    change();
}

function change(){
    if(disp_val === 0){
        disp_val += 1;
        ul.style.display = "none";
    }
    else {
        disp_val -= 1;
        ul.style.display = "block";
    }
}