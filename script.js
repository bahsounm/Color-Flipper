const back_dispID = document.getElementById('back_disp');
const clickID = document.getElementById('click');
const back = document.querySelector(".back");
const button1 = document.getElementById("button1");

const colors = ["Red","Blue","Green","Purple","Orange","CadetBlue","Darkblue","Crimson","DarkCyan","DarkKhaki","DarkOrchid","DarkSalmon","DeepSkyBlue","Fuchsia","Indigo","SandyBrown"];

function backChange(){
    const color_index = Math.floor(Math.random()* colors.length);
    const color_choice = colors[color_index];
    back_dispID.innerHTML = "Background Color: "+ color_choice;
    document.body.style.backgroundColor = color_choice;
}


function main(){

    clickID.addEventListener("click", function(){
        backChange();
    })
}

main();