// Listen for clicked keys (keyboard)
window.addEventListener("keydown", function(e) {

    const clickedKey = e.key.toUpperCase();
    playAudio(clickedKey);
});

// Listen for when a div is clicked
const keyDivs = document.querySelectorAll(".key");

keyDivs.forEach(keyDiv => keyDiv.addEventListener("click", () => {
    const clickedDivKey = keyDiv.getAttribute("data-key");
    console.log(clickedDivKey);

    playAudio(clickedDivKey);
}));

// Function for playing audio
function playAudio (key) {

    const audio = document.querySelector(`audio[data-key=${key}]`);
    audio.currentTime = 0;
    audio.play();
    
}