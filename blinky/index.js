
let isJumping = false;
let jumpId = null
function jump() {
    return setTimeout(() => {
        isJumping = false;
    }, 200);
}


document.addEventListener("DOMContentLoaded", function() {
    let rnd = Math.random() * 300
    let bird = document.getElementById('character');
    let hole = document.getElementById('hole');
    let obstacle = document.getElementById('obstacle');
    hole.style.top = rnd + 'px';

    hole.addEventListener("animationiteration", (event) => {
        if(event.animationName == 'slide') {
            let rnd = Math.random() * 300
            hole.style.top = rnd + 'px';
        }
    });

    document.addEventListener('click', function(event) {
        if(jumpId != null) {
            clearTimeout(jumpId)
            jumpId = null
        }
        let characterTop = window.getComputedStyle(bird).getPropertyValue("top")
        bird.style.top = (characterTop.slice(0,-2)-50)+"px";
        isJumping = true
        jumpId = jump(isJumping)
    })
    setInterval(() => {
        let characterTop = Number(window.getComputedStyle(bird).getPropertyValue("top").slice(0,-2))
        let obstacleLeft = Number(window.getComputedStyle(obstacle).getPropertyValue("left").slice(0,-2))
        let holeTop = Number(window.getComputedStyle(hole).getPropertyValue("top").slice(0,-2))
        
        if(!isJumping){
            bird.style.top = (characterTop+5)+"px";
         }
         if (characterTop > -180) {
            bird.style.top = "-250px";
        }
        if (obstacleLeft <= 80 ) {
            let t = characterTop + 650
            console.log(t, holeTop)
            if(holeTop - 450 < characterTop || t < holeTop  ) {
                obstacle.style.backgroundColor = 'red'
            }
        }
    }, 50);
});


