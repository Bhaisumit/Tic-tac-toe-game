function openplayerconfig(event) {
    editedplayer=+event.target.dataset.playerid; // +'1'=> 1
    
    playerconfigoverlayelement.style.display='block';
    backdropelement.style.display='block';
}
function closeplayerconfig(){
    playerconfigoverlayelement.style.display='none';
    backdropelement.style.display='none';
    formelement.firstElementChild.classList.remove('error');
    errorsoutputelement.textContent='';
    formelement.firstElementChild.lastElementChild.value='';
}
function saveplayerconfig(event) {
    event.preventDefault();
    const formdata= new FormData(event.target);
    
    const enterplayername=formdata.get('playername').trim();// '  man  ' => 'man'
    // console.log(enterplayerame);
    if(!enterplayername){
event.target.firstElementChild.classList.add('error');
errorsoutputelement.textContent='please enter a valid name';
return;
    }

const updatedplayerdataelement=document.getElementById('player'+editedplayer+'data');
    updatedplayerdataelement.children[1].textContent=enterplayername;
    players[editedplayer-1].name=enterplayername;

    closeplayerconfig();
    
    
    // if(editedplayer==1){
    //     players[0].name=enterplayername;
    // }
    // else{
    //     players[1].name=enterplayername;
    // }
}