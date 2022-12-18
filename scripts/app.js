
const gamedata=[
[0,0,0],
[0,0,0],
[0,0,0],



];



let editedplayer=0;
let activeplayer=0;
let currentround=1;
let gameisover=false;
const players=[
    {
        name:'',
        symbol:'X'
    },
    {
        name: '',
       symbol:'O'
    },
];




const playerconfigoverlayelement=document.getElementById('configoverlay');
const backdropelement=document.getElementById('backdrop');
const formelement=document.querySelector('form');
const errorsoutputelement=document.getElementById('configerrors');
const gameareaelement=document.getElementById('activegame');
const activeplayernameelement=document.getElementById('activeplayername');
const gameoverelement=document.getElementById('gameover');

const editplayer1btnelement=document.getElementById('editplayer1btn');
const editplayer2btnelement=document.getElementById('editplayer2btn');
const cancelconfigbtnelement=document.getElementById('cancelconfigbtn');
const startgamebtnelement=document.getElementById('startgamebtn');
const audi=document.querySelector('audio');

const gameboardelement=document.getElementById('gameboard');



editplayer1btnelement.addEventListener('click',openplayerconfig);
editplayer2btnelement.addEventListener('click',openplayerconfig);

cancelconfigbtnelement.addEventListener('click',closeplayerconfig);
backdropelement.addEventListener('click',closeplayerconfig);

formelement.addEventListener('submit',saveplayerconfig);
startgamebtnelement.addEventListener('click',startnewgame);

// for(const gamefeldelement of gamefieldelements){
//     gamefeldelement.addEventListener('click',selectgamefeld);
// }
gameboardelement.addEventListener('click',selectgamefield);