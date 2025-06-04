

// let songIndexes = 0;
// let audioElement = new Audio('songs/audio12.mp3');
// let masterplay = document.getElementsByClassName('play')[0];
// let mastersong = document.getElementById('mastersong')[0];
// let pictureplay = document.getElementsByClassName('playin')[0];
// let gif = document.getElementsByClassName('album-cover')[0];
// let progressBar = document.getElementsByClassName('playBar')[0];

// let songs = [
//     { title: "Minnalvala", filePath: "songs/audio1.mp3", duration: "3:45", coverPath: "images/playin1.jpg" },
//     { title: "Shaky", filePath: "songs/audio2.mp3", duration: "4:20", coverPath: "images/playin2.jpg" },
//     { title: "STFU", filePath: "songs/audio3.mp3", duration: "2:30", coverPath: "images/playin3.jpg" },
//     { title: "Courtside", filePath: "songs/audio4.mp3", duration: "2:30", coverPath: "images/playin4.jpg" },
//     { title: "Vinveli Nayaga", filePath: "songs/audio5.mp3", duration: "2:30", coverPath: "images/playin5.jpg" },
//     { title: "Jaat intro", filePath: "songs/audio6.mp3", duration: "2:30", coverPath: "images/playin6.jpg" },
//     { title: "Supreme", filePath: "songs/audio7.mp3", duration: "2:34", coverPath: "images/playin7.jpg" },
//     { title: "Ishq mera(Feat. Esha Gupta)", filePath: "songs/audio8.mp3", duration: "1:34", coverPath: "images/playin8.jpg" },
//     { title: "Laal Pari(From housefull 5)", filePath: "songs/audio9.mp3", duration: "2:32", coverPath: "images/playin9.jpg" },
//     { title: "pal pal", filePath: "songs/audio10.mp3", duration: "1:30", coverPath: "images/playin10.jpg" },
//     { title: "Ramayan ka Saar", filePath: "songs/audio11.mp3", duration: "2:30", coverPath: "images/playin11.jpg" },
//     { title: "Shake it to the Max(FLY)-remix", filePath: "songs/audio12.mp3", duration: "2:34", coverPath: "images/playin12.jpg" }
// ];

// // Master play button
// masterplay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterplay.src = "images/pausebutton.jpg";
//         gif.style.opacity = 1;
//     } else {
//         audioElement.pause();
//         masterplay.src = "images/playbutton.png";
//         gif.style.opacity = 0;
//     }
// });

// // Progress bar update
// audioElement.addEventListener("timeupdate", () => {
//     if (progressBar && audioElement.duration) {
//         let progress = (audioElement.currentTime / audioElement.duration) * 100;
//         progressBar.value = progress;
//     }
// });

// // Seek functionality
// progressBar.addEventListener('change', () => {
//     if (audioElement) {
//         let seekTime = (progressBar.value * audioElement.duration) / 100;
//         audioElement.currentTime = seekTime;
//     }
// });

// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('button')).forEach((el) => {
//         el.src = "images/playbutton.png";
        
//     });
// };

// // Play song on small play button click
// Array.from(document.getElementsByClassName('button')).forEach((element, index) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         e.target.src = "images/pausebutton.jpg";
//         audioElement.src = songs[index].filePath;
//         mastersong.innerText = songs[songIndexes].title;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterplay.src = "images/pausebutton.jpg";
//         gif.style.opacity = 1;
//     });
// });
// document.querySelector('.previous').addEventListener('click', () => {
//     // Move to previous song with wrap-around
//     songIndexes = (songIndexes - 1 + songs.length) % songs.length;

//     // Set audio to new song and play
//     audioElement.src = songs[songIndexes].filePath;
//     audioElement.currentTime = 0;
//     audioElement.play();

//     mastersong.innerText = songs[songIndexes].title;

//     // Update UI
//     masterplay.src = "images/pausebutton.jpg";
//     gif.style.opacity = 1;

//     // Reset all buttons to play state
//     makeAllPlays();

//     // Set current song button to pause icon if it exists
//     const buttons = document.getElementsByClassName('button');
//     if (buttons[songIndexes]) {
//         buttons[songIndexes].src = "images/pausebutton.jpg";
//     }
// });

// document.querySelector('.next').addEventListener('click', () => {
//     // Move to previous song with wrap-around
//     songIndexes = (songIndexes + 1 + songs.length) % songs.length;

//     // Set audio to new song and play
//     audioElement.src = songs[songIndexes].filePath;
//     audioElement.currentTime = 0;
//     audioElement.play();

//     mastersong.innerText = songs[songIndexes].title;
//     // Update UI
//     masterplay.src = "images/pausebutton.jpg";
//     gif.style.opacity = 1;

//     // Reset all buttons to play state
//     makeAllPlays();

//     // Set current song button to pause icon if it exists
//     const buttons = document.getElementsByClassName('button');
//     if (buttons[songIndexes]) {
//         buttons[songIndexes].src = "images/pausebutton.jpg";
//     }
// });



let songIndexes = 0;
let audioElement = new Audio('songs/audio12.mp3');
let masterplay = document.getElementsByClassName('play')[0];
let pictureplay = document.getElementsByClassName('playin')[0];
let gif = document.getElementsByClassName('album-cover')[0];
let progressBar = document.getElementsByClassName('playBar')[0];

const songTitleElement = document.querySelector('.song-title1');
const songArtistElement = document.querySelector('.song-artist1');

let songs = [
    { title: "Minnalvala", artist: "Jakes Bejoy, SidSriram, Sithara Krishnakumar", filePath: "songs/audio1.mp3", duration: "3:45", coverPath: "images/playin1.jpg" },
    { title: "Shaky", artist: "Sanju Raathod, G-SPXRK", filePath: "songs/audio2.mp3", duration: "4:20", coverPath: "images/playin2.jpg" },
    { title: "STFU", artist: "AP Dhillon, Shinda Kahlon", filePath: "songs/audio3.mp3", duration: "2:30", coverPath: "images/playin3.jpg" },
    { title: "Courtside", artist: "Unknown", filePath: "songs/audio4.mp3", duration: "2:30", coverPath: "images/playin4.jpg" },
    { title: "Vinveli Nayaga", artist: "Unknown", filePath: "songs/audio5.mp3", duration: "2:30", coverPath: "images/playin5.jpg" },
    { title: "Jaat intro", artist: "Unknown", filePath: "songs/audio6.mp3", duration: "2:30", coverPath: "images/playin6.jpg" },
    { title: "Supreme", artist: "Unknown", filePath: "songs/audio7.mp3", duration: "2:34", coverPath: "images/playin7.jpg" },
    { title: "Ishq mera(Feat. Esha Gupta)", artist: "Unknown", filePath: "songs/audio8.mp3", duration: "1:34", coverPath: "images/playin8.jpg" },
    { title: "Laal Pari(From housefull 5)", artist: "Unknown", filePath: "songs/audio9.mp3", duration: "2:32", coverPath: "images/playin9.jpg" },
    { title: "pal pal", artist: "D Vibe Designer", filePath: "songs/audio10.mp3", duration: "1:30", coverPath: "images/playin10.jpg" },
    { title: "Ramayan ka Saar", artist: "Masoom Sharma", filePath: "songs/audio11.mp3", duration: "2:30", coverPath: "images/playin11.jpg" },
    { title: "Shake it to the Max(FLY)-remix", artist: "MOLIY, SilentAddy, Skillibeng, Shenseea", filePath: "songs/audio12.mp3", duration: "2:34", coverPath: "images/playin12.jpg" }
];

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.src = "images/pausebutton.jpg";
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterplay.src = "images/playbutton.png";
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener("timeupdate", () => {
    if (progressBar && audioElement.duration) {
        let progress = (audioElement.currentTime / audioElement.duration) * 100;
        progressBar.value = progress;
    }
});

progressBar.addEventListener('change', () => {
    if (audioElement) {
        let seekTime = (progressBar.value * audioElement.duration) / 100;
        audioElement.currentTime = seekTime;
    }
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('button')).forEach((el) => {
        el.src = "images/playbutton.png";
    });
};

Array.from(document.getElementsByClassName('button')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.src = "images/pausebutton.jpg";
        songIndexes = index;
        audioElement.src = songs[songIndexes].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.src = "images/pausebutton.jpg";
        gif.style.opacity = 1;
        songTitleElement.innerText = songs[songIndexes].title;
        songArtistElement.innerText = songs[songIndexes].artist;
    });
});

document.querySelector('.previous').addEventListener('click', () => {
    songIndexes = (songIndexes - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndexes].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.src = "images/pausebutton.jpg";
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementsByClassName('button')[songIndexes].src = "images/pausebutton.jpg";
    songTitleElement.innerText = songs[songIndexes].title;
    songArtistElement.innerText = songs[songIndexes].artist;
});

document.querySelector('.next').addEventListener('click', () => {
    songIndexes = (songIndexes + 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndexes].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.src = "images/pausebutton.jpg";
    gif.style.opacity = 1;
    makeAllPlays();
    document.getElementsByClassName('button')[songIndexes].src = "images/pausebutton.jpg";
    songTitleElement.innerText = songs[songIndexes].title;
    songArtistElement.innerText = songs[songIndexes].artist;
});
