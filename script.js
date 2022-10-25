console.log("Welcome to Spotify")

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("sunshine.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let mygif = document.getElementById('mygif');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Sunshine1", filePath: "sunshine.mp3", coverPath: "logo.svg"},
    {songName: "Sunshine2", filePath: "sunshine.mp3", coverPath: "logo.svg"},
    {songName: "Sunshine3", filePath: "sunshine.mp3", coverPath: "logo.svg"},
    {songName: "Sunshine4", filePath: "sunshine.mp3", coverPath: "logo.svg"},
    {songName: "Sunshine5", filePath: "sunshine.mp3", coverPath: "logo.svg"},
    {songName: "Sunshine6", filePath: "sunshine.mp3", coverPath: "logo.svg"}
]

// songItem.forEach((element)=>{
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
//     element.getElementsByClassName("timestamp")[0] .innerText = songs[i].filePath.duration;
// })

// audioElement.play()
// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        mygif.style.opacity = 1;
    }

    else if(audioElement.played || audioElement.currentTime>0){
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        mygif.style.opacity = 0;
    }
})


// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // Update seekbar
    progress = parseInt(100*audioElement.currentTime/audioElement.duration);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.currentTime = 0;
        audioElement.src = "sunshine.mp3";
        audioElement.play();
    })
})