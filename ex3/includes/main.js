var mainBox = document.getElementById('box1');
var place_holder = document.getElementById('main'); // enter boxes to the main with this var.
var openBoxes = [];
var curr_size = 60;
const px = "px";
const letterArray = ["A","B","C","D","E","F","G"]; // all the letters of the game.

const handleOpenLetter = (e) => {          //handle open letter.
    if( e.target.style.color === "black"){
        e.target.style.color = "white"; 
        openBoxes.push(e.target);   // push to the open card array.
    }else{ // when you opened a card and then you regreat and want to open another card.
        e.target.style.color = "black" ;       
        openBoxes.pop();
    }

    if(openBoxes.length == 2){
        if(openBoxes[0].innerHTML === openBoxes[1].innerHTML){
            openBoxes[0].style.background = "green";
            openBoxes[1].style.background = "green";
            openBoxes[0].removeEventListener("click" , handleOpenLetter);
            openBoxes[1].removeEventListener("click", handleOpenLetter);
        }
        else{ 
            let element1 = openBoxes[0];
            let element2 = openBoxes[1];
            setTimeout(()=> {
                element1.style.color = "black" ;
                element2.style.color = "black" ;
            }, 750)
        }
        openBoxes = [];
    }
}

const getNewBox = () => {
    let element = document.createElement("div");
    element.className = "boxItem";
    element.style.width = curr_size + px;
    element.style.height = curr_size + px;
    element.style.fontSize = (curr_size-10) + px;
    element.style.color = "black";
    let random = Math.floor((Math.random()*100))%letterArray.length; // get random letter
    let letter = letterArray[random];
    element.innerHTML = letter; // place letter in the box.
    element.addEventListener('click', handleOpenLetter); // attach event to box.
    return element;
}

const AddBoxes = () =>{
    for (let index = 0; index < 3; index++) {
        curr_size+=20
        var element = getNewBox();
        place_holder.appendChild(element);
    }
}
mainBox.addEventListener('click', AddBoxes);
