

/*
function srcChanger() {
    document.getElementById("bild").src = "https://supermario-game.com/";
}
*/


/*
// circle through github
function srcChanger() {
    var next = document.getElementById("game");
    if (next.src.match("https://chromedino.com/")) {
        next.src = "https://that-jamal.github.io/calles-nantin/";
    } else if (next.src.match("https://that-jamal.github.io/calles-nantin/")) {

        next.src = "https://that-jamal.github.io/c-chat/";
    } else if (next.src.match("https://that-jamal.github.io/c-chat/")) {

        next.src = "https://that-jamal.github.io/frog-of-the-clicker/";
    } else if (next.src.match("https://that-jamal.github.io/frog-of-the-clicker/")) {

        next.src = "https://that-jamal.github.io/mini-reknarn/"
    } else { //end src full
        next.src = "https://chromedino.com/"
    }
}
*/

/*
function website() {
    let x;
    var next = document.getElementById("game");
    document.getElementById("button").onclick = function () {
        x = Math.floor(Math.random() * 0) + 1;
        console.log("button")
    }

    if (document.getElementById("button" == 1)) {
        next.src = "https://that-jamal.github.io/calles-nantin/";
    } else if (next.src.match("https://that-jamal.github.io/calles-nantin/")) {

        next.src = "https://that-jamal.github.io/c-chat/";
    } else if (next.src.match("https://that-jamal.github.io/c-chat/")) {

        next.src = "https://that-jamal.github.io/frog-of-the-clicker/";
    } else if (next.src.match("https://that-jamal.github.io/frog-of-the-clicker/")) {

        next.src = "https://that-jamal.github.io/mini-reknarn/"
    } else { //end src full
        next.src = "https://chromedino.com/"
    }
}
*/
/*  { title: "calles-nantin", info: "calles app for something", url: "https://that-jamal.github.io/calles-nantin/" },
    { title: "dino", info: "try and survive as long possible by jumping over obstacles", url: "https://chromedino.com/" },
    { title: "calculator", info: "a calculator you can use for mathematics", url: "https://that-jamal.github.io/mini-reknarn/" },
    { title: "c-Chat", info: "a chat oppen to anyone that gets in", url: "https://that-jamal.github.io/c-chat/" }*/


//{ title: "", info: "", url: "", site: "" },
// list of all the links and info of the programs
const list = [
    { title: "Skeleathon", info: "A survival game where you kill enemies and build your skeleton army", url: "https://js13kgames.com/games/skeleathon/index.html", site: "https://js13kgames.com/entries/skeleathon" },
    { title: "ENDLESS DEATH", info: "You are on the verge of DEATH. Collect enough collection of life and get out of the RED WALLS", url: "https://js13kgames.com/games/endless-death/index.html", site: "https://js13kgames.com/entries/endless-death" },
    { title: "Aim lab from hell", info: "A knockoff of Aim Lab with a twist of Death.", url: "https://js13kgames.com/games/aim-lab-from-hell/index.html", site: "https://js13kgames.com/entries/aim-lab-from-hell" },
    { title: "Heart of the Gods", info: "In this game you take on the navy of the Underworld on the river Styx in your quest to destroy the very things that give the gods their power", url: "https://js13kgames.com/games/heart-of-the-gods/index.html", site: "https://js13kgames.com/entries/heart-of-the-gods" },
    { title: "Hang by a thread", info: "# How to Play Reach the goal. Collect hearts for extra points.", url: "https://js13kgames.com/games/hang-by-a-thread/index.html", site: "https://js13kgames.com/entries/hang-by-a-thread" },
    { title: "Spectral-Shooter", info: "Undeads don't actually die. They go into the spectral world, and respawn after some time.", url: "https://js13kgames.com/games/spectral-shooter/index.html", site: "https://js13kgames.com/entries/spectral-shooter" },
    { title: "Tic Tac Woe", info: "The aim, to get three red toruses in line, either horizontally, vertically, diagonally 2d or diagonally 3D", url: "https://js13kgames.com/games/tic-tac-woe/index.html", site: "https://js13kgames.com/entries/tic-tac-woe" },
    { title: "The Last Tear", info: "Puddle has been through a tough time these days. He has recently lost his best friend Deave in a flight accident. After a few days of crying and mourning, he goes to his friend's grave to say goodbye to him one last time...", url: "https://js13kgames.com/games/the-last-tear/index.html", site: "https://js13kgames.com/entries/the-last-tear" },
    { title: "Crab Island", info: "You're very hungry though. So, better not become too acquainted with those crabs, because you're going to have to eat them.", url: "https://js13kgames.com/games/crab-island/index.html", site: "https://js13kgames.com/entries/crab-island" },
    { title: "Poker Dice 13", info: "Roll five dice to complete all poker combinations in 13 rounds. You can hold dice and re-roll two times per round. Select the best scores and try to beat the computer.", url: "https://js13kgames.com/games/poker-dice-13/index.html", site: "https://js13kgames.com/entries/poker-dice-13" },
    { title: "Freebird", info: "Help Freebird escape from captivity.", url: "https://js13kgames.com/games/freebird/index.html", site: "https://js13kgames.com/entries/freebird" },
    { title: "Exit", info: "Guide your friends to the exit without them being found. Made for VR, but works on desktop with mouse. Requires a pointer control", url: "https://js13kgames.com/games/exit/index.html", site: "https://js13kgames.com/entries/exit" },
    { title: "Need some space", info: "Move mouse for ship orientation, click for thrust.", url: "https://js13kgames.com/games/need-some-space/index.html", site: "https://js13kgames.com/entries/need-some-space" },
    { title: "Asteroids Extended", info: 'Asteroids Extended is a small exploration game. It can be controlled with arrow keys and Space to fire. On mobile, click the screen to show overlay buttons. Use "f" for forwards and "w" for weapon to control the ship.', url: "https://js13kgames.com/games/asteroids-extended/index.html", site: "https://js13kgames.com/entries/asteroids-extended" },
    { title: "Space Kitty", info: "Space Kitty is thrown out of their spaceship after being wrongly labled as the imposter!", url: "https://js13kgames.com/games/space-kitty/index.html", site: "https://js13kgames.com/entries/space-kitty" },
    { title: "Stay Safe", info: "Stay away from everyone else as far as possible. Stay safe!", url: "https://js13kgames.com/games/stay-safe/index.html", site: "https://js13kgames.com/entries/stay-safe" },
    { title: "__OFF_THE_LINE__", info: "Fight to be the one who finally stays on the line! Use the arrows to attack and block your opponent.", url: "https://js13kgames.com/games/offtheline/index.html", site: "https://js13kgames.com/entries/offtheline" },
    { title: "Audio Dash", info: "Ride the waveform of your music library while avoiding waves. Play the provided song or upload your own.", url: "https://js13kgames.com/games/audio-dash/index.html", site: "https://js13kgames.com/entries/audio-dash" },
    { title: "The_Coder's Game", info: "You are a square who has lost its family and you need to get the beacons online for your family to find you", url: "https://js13kgames.com/games/thecoders-game/index.html", site: "https://js13kgames.com/entries/thecoders-game" },
    { title: "WasteWorld", info: "Reclaim the wasteland! Only you and your friends can activate the World Filtration System by exploring and collecting resources!", url: "https://wasteworld.herokuapp.com/", site: "https://js13kgames.com/entries/wasteworld" },
]

// takes a random list and place's it in inside the iframe
document.getElementById("button").onclick = function () {
    const x = Math.floor(Math.random() * list.length);
    document.getElementById("game").src = (list[x].url);
    document.getElementById("title").innerText = (list[x].title);
    document.getElementById("info").innerText = (list[x].info);
    document.getElementById("site").innerText = ("Wanna visit the original site?");
    document.getElementById("site").href = (list[x].site);
}