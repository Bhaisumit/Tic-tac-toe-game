
function resetgamestatus(){
    activeplayer=0;
    currentround=1;
    gameisover=false;
     gameoverelement.firstElementChild.innerHTML=' <span id="winnername">PLAYER NAME  </span> won this match!';
     gameoverelement.style.display='none';
     let gameboardindex=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gamedata[i][j]=0;
             const gameboarditemelement=gameboardelement.children[gameboardindex];
             gameboarditemelement.textContent='';
              gameboarditemelement.classList.remove('disabled');
             gameboardindex++;
        }
    }
}





function startnewgame(){
     if(players[0].name ===''  || players[1].name ===''){
       alert('Please set custom player name!');
     return;
     }
   resetgamestatus();
       activeplayernameelement.textContent=players[activeplayer].name;
    gameareaelement.style.display='block';
    
}


function switchplayer(){
    if(activeplayer===0){
        activeplayer=1;

    }
else{
    activeplayer=0;
}
 activeplayernameelement.textContent=players[activeplayer].name;


}
function selectgamefield(event){
   if(event.target.tagName!='LI' || gameisover){
       return;
  }
const selectedfield=event.target;
const selectedcolumn=selectedfield.dataset.col-1;
const selectedrow=selectedfield.dataset.row-1;

if(gamedata[selectedrow][selectedcolumn]>0){
    alert('Please select an empty field');
    return;
}
selectedfield.textContent=players[activeplayer].symbol; 
selectedfield.classList.add('disabled');


 gamedata[selectedrow][selectedcolumn]=activeplayer+1;
 console.log(gamedata);
 
 const winnerid=checkforgameover();
 if(winnerid!==0 ){
    endgame(winnerid);
 }
 currentround=currentround+1;
switchplayer();

}
function checkforgameover(){
// checking rows for equality
    for(let i=0; i<3;i++)
    {
        if( gamedata[i][0] >0 &&
        gamedata[i][0]===  gamedata[i][1] &&
         gamedata[i][1]=== gamedata[i][2]){
        return gamedata[i][0];
    }

    }
    // checking columns for equality
    for(let i=0; i<3;i++)
    {
        if( gamedata[0][i] >0 &&
        gamedata[0][i]===  gamedata[1][i] &&
         gamedata[0][i]=== gamedata[2][i]){
        return gamedata[0][i];
    }

    }

    // diagonal top left to botom right
    if( gamedata[0][0]>0 &&
        gamedata[0][0]===gamedata[1][1] && 
        gamedata[1][1]===gamedata[2][2] )
    {
return gamedata[0][0];
    }
    // diagonal bottom left to top right
 if( gamedata[2][0]>0 &&
    gamedata[2][0]===gamedata[1][1] && 
    gamedata[1][1]===gamedata[0][2] )
{
return gamedata[2][0];
}
if(currentround===9){
    return -1;
}
return 0;
}
function endgame(winnerid){
    gameisover=true;
gameoverelement.style.display='block';
if(winnerid>0){
    const winnername=players[winnerid-1].name;
    gameoverelement.firstElementChild.firstElementChild.textContent= winnername;
}
else{
    gameoverelement.firstElementChild.textContent='It\'s a draw!'
}

}


 