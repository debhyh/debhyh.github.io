var character = document.getElementById("character")
var block = document.getElementById("block")
var clicked = false;

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate")
        clicked = true
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function(){
    if(clicked){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft<20 && blockLeft>0 && characterTop>=130){
            block.style.animation = "none"
            block.style.display = "none"
            alert("👎🏻")
        }
}
},10);

function restart() {
    clicked = false
    block.style.animation = "block 1s infinite linear"
    block.style.display = "block"

}