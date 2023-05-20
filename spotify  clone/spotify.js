console.log("Welcome to Spotify");
let songsIndex=0;
let audioElement=new Audio('senorita.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songs=
[
    {songName:"under the influence",filePath:"under the influence.mp3",coverPath:"p3.PNG"},
    {songName:"dsmz",filePath:"dsmz.mp3",coverPath:"p9.PNG"},
    {songName:"senorita",filePath:"senorita.mp3",coverPath:"p6.PNG"},
    {songName:"sanak",filePath:"sanak.mp3",coverPath:"p7.PNG"},
    {songName:"Apsara Aali",filePath:"1.mp3",coverPath:"p8.PNG"},
    
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innertext=songs[i].songName;
})


//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }

    
})

//Listen to events:

audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})


}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
makeAllPlays();
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src='senorita.mp3';
audioElement.currentTime=0;
audioElement.play();





})
})
