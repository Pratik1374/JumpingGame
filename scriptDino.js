score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("Key code : ",e.keyCode);
    if(e.keyCode == 38){
        ninja = document.querySelector('.ninja');
        ninja.classList.add('animateNinja');
        setTimeout(()=>{
            ninja.classList.remove('animateNinja');
        },700);
    }
    if(e.keyCode == 39){
        ninja = document.querySelector('.ninja');
        ninjaX = parseInt(window.getComputedStyle(ninja,null).getPropertyValue('left'));
        ninja.style.left = ninjaX + 112 + "px";
    }
    if(e.keyCode == 37){
        ninja = document.querySelector('.ninja');
        ninjaX = parseInt(window.getComputedStyle(ninja,null).getPropertyValue('left'));
        ninja.style.left = (ninjaX - 112) + "px";
    }
}
setInterval(() =>{
    ninja = document.querySelector('.ninja');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    nx = parseInt(window.getComputedStyle(ninja,null).getPropertyValue('left'));  /*This gives the current left value of the ninja*/
    ny = parseInt(window.getComputedStyle(ninja,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));  /* ox = obstacle's x value*/
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX = Math.abs(nx-ox);
    offsetY = Math.abs(ny-oy);
    if(offsetX < 93 && offsetY < 60)
    {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }
    else if(offsetX<145 && cross)
    {
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross = true;
        },1000);
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.05;
            obstacle.style.animationDuration + newDur + 's';
        },500);
        // aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        // newDur = aniDur - 0.01;
        // obstacle.style.animationDuration = newDur + 's';
        if(newDur >= 1.5)
        {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            console.log("AniDur: ",aniDur);
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log("Newdur: ",newDur);
        }
        else{
            console.log("AniDur: ",aniDur);
            newDur = 1.5;
            console.log("2Newdur: ",newDur);
        }
    }
}, 100);

function updateScore(scorer){
    scoreCont.innerHTML = "Your Score : " + score;
}