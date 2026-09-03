const btn = document.getElementById("PlayAudio")
const btn2 = document.getElementById("PauseAudio")
const audio = document.getElementById("audioPlayer");
const fileInput = document.getElementById("fileInput")
const seekBar = document.getElementById("seekBar");
const currentTime = document.getElementById("currentTime")
const duration = document.getElementById("duration")
const volumeBar = document.getElementById("volumeBar");
// btn.addEventListener(kya event hei, kya karna hei);
const title = document.getElementById("test")
title.textContent = "My Music Player"

//PlayButton
btn.addEventListener("click", () => {
    audio.play()    
})

//PauseButton
btn2.addEventListener("click",() => {
    audio.pause()
})
//Music Logic
fileInput.addEventListener("change", () => {
    const file = fileInput.files[0]
    const audioURL = URL.createObjectURL(file);

    audio.src = audioURL;
    
});

//Checking the maximum duration of the file
audio.addEventListener("loadedmetadata", () => {
    seekBar.max = audio.duration;
});
//current music
audio.addEventListener("timeupdate", () => {
    seekBar.value = audio.currentTime;
    currentTime.textContent = audio.currentTime;
    duration.textContent = audio.duration;

});
volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value;
})

//Playing the timestamp of the music according to the user
seekBar.addEventListener("input", () => {
    audio.currentTime = seekBar.value;
});
