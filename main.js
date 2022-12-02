
// list of all the links and info of the programs
// enter all information like this and add it to the list to give the program a program{ title: "", info: "", url: "", site: "" }  
const list = [
    { nah: 0 },
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
    { title: "Finn: the Little Collector", info: "Finn is a probationary grim reaper. He has a couple of souls to collect before the midnight. Reading the list carefully, he thought.", url: "https://js13kgames.com/games/finn-the-little-collector/index.html", site: "https://js13kgames.com/entries/finn-the-little-collector" },
    { title: "Dying Dreams", info: "You are having the same dream again... the dream where everyone must die...", url: "https://js13kgames.com/games/dying-dreams/index.html", site: "https://js13kgames.com/entries/dying-dreams" },
    { title: "Warp Station 13K", info: "A space roomba simulator and and exercise in procedural generation.", url: "https://js13kgames.com/games/warp-station-13k/index.html", site: "https://js13kgames.com/entries/warp-station-13k" },
    { title: "Templo Mayor", info: "Reach the bottom of the temple to complete today's sacrifice.You can move left and right by pressing A/D and ←/→, or by tapping the sides of your screen on mobile.", url: "https://js13kgames.com/games/templo-mayor/index.html", site: "https://js13kgames.com/entries/templo-mayor" },
    { title: "Stand By Me", info: "Only you and your chatty, adorable Defense Module Companion can protect the Central Core from creepy parasites trying to contaminate it.", url: "https://js13kgames.com/games/stand-by-me/index.html", site: "https://js13kgames.com/entries/stand-by-me" },
    { title: "Skull Ocean", info: "experiment with this wave simulation and appreciate the graphics.", url: "https://js13kgames.com/games/skull-ocean/index.html", site: "https://js13kgames.com/entries/skull-ocean" },
    { title: "The Space Between Us", info: "Our two blocks have been separated. You must bring them together again. Press the arrow keys to control the blue block. The red block will move in the opposite direction.", url: "https://js13kgames.com/games/the-space-between-us/index.html", site: "https://js13kgames.com/entries/the-space-between-us" },
    { title: "Galaxy Rider", info: "Ride sick lines though the galactic bowl system adding to your star collection along the way. Try to finish each course as fast as you can!", url: "https://js13kgames.com/games/galaxy-rider/index.html", site: "https://js13kgames.com/entries/galaxy-rider" },
    { title: "Cat Goric must escape!", info: "Choose your moves wisely. There are movement sensors in the chamber. So the more you move, the less space you have due to the proximity of the lasers.", url: "https://js13kgames.com/games/cat-goric-escape-from-the-warp-chamber/index.html", site: "https://js13kgames.com/entries/cat-goric-escape-from-the-warp-chamber" },
]

//{ title: "", info: "", url: "", site: "" },

const colorLike = document.getElementById("likeButton");
let x

// takes a random list and place's it in inside the iframe
function srcChanger(item) {
    if (item) {
        random = item
    } else {
        random = Math.floor(Math.random() * 29 + 1);
        console.log(x)
    }

    document.getElementById("likeButton").style.backgroundColor = "black"
    document.getElementById("game").src = (list[random].url);
    document.getElementById("title").innerText = (list[random].title);
    document.getElementById("info").innerText = (list[random].info);
    document.getElementById("site").innerText = ("visit the original site for more information");
    document.getElementById("site").href = (list[random].site);
    console.log(x)

    if (list[random].like == true) {
        colorLike.style.background = "green"
    }
}// changes the color of the like button

function likeButton() {
    if (list[random].like) {
        colorLike.style.backgroundColor = "black"
        list[random].like = false
    } else {
        colorLike.style.backgroundColor = "green"
        list[random].like = true
    }

}

function linkback() {
    // Generate 24 li element
    for (let i = 1; i < list.length; i++) {
        const li = document.createElement("li"); // <li></li>
        li.id = i;
        // i = number så at den vet vilken list title functionen använder
        li.innerText = (list[i].title)
        li.onclick = function () {
            srcChanger(i);
        };
        // Add the li to the ul
        document.querySelector("ul").appendChild(li);


    }
}

srcChanger()
linkback()