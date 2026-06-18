const LeftArrow = document.querySelector("#VideoCLeft");
const RightArrow = document.querySelector("#VideoCright");
let BGimage = document.querySelector(".CBKimeage");


let WatchVideo = document.querySelector(".Video");
const VideoLinks = [
    // Boss fights
    "https://www.youtube-nocookie.com/embed/SbrluTtf5H0?si=xtm2Fd0S0UBXCkC",
//    Duolingo
    "https://www.youtube.com/embed/o-0wtJW7tkg?si=PtfxP7I6N84hXntM",
    // Rudolph
    "https://www.youtube.com/embed/Xp5eIThimOA?si=vqs6iWMKG_hv8TLj",
    // creepypastas
    "https://www.youtube.com/embed/560Ho4BVPUc?si=IS9bzEZmPXqimtJd",
    // Warframe
    "https://www.youtube.com/embed/ra2qQfZ84CI?si=p3FCIngsM2TQWxYz"

];

const BKVideolinks = [
    // Boss Fights
"lOCATION/BossFightsLoc.png",
// Duolingo
"lOCATION//DuolingoLoc.gif",
// rUDOLPH
"lOCATION/CabinLoc.gif",
// Creepypastas
"lOCATION/CampfireImg.gif",
// Warframe
"lOCATION/SpaceLoc.gif" 

]



let i = 0;

function moveright () {

i = i+1;

if (i > VideoLinks.length - 1){
    i = 0
}
BGimage.src = BKVideolinks[i]
WatchVideo.src = VideoLinks[i] 
}

function MoveLEft(){
i = i-1;

if( i < 0)
    
    {
    i = VideoLinks.length -1
}
BGimage.src = BKVideolinks[i]
WatchVideo.src = VideoLinks[i] 
}

RightArrow.addEventListener("click", moveright);
LeftArrow.addEventListener("click", MoveLEft);

