const fullData = [
    ["Coppersmith Barbet", "Megalaima haemacephala", "./imgs/coppersmith barbet.jpg",
        "rat", "berries", "leaves", 2,
    "Davidvraju, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],
    
    ["Black Drongo", "Dicrurus macrocercus","./imgs/black drongo.jpg",
        "insects", "snake", "berries", 1,
    "Shino jacob koottanad, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],
    
    ["Brahminy Kite", "Haliastur indus","./imgs/brahminy kite.jpg",
        "insects", "leaves", "fish", 3,
    "Afsar Nayakkan, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons"],

    ["Black Winged Kite", "Elanus caeruleus","./imgs/black winged kite.jpg",
        "fish", "berries", "insects", 3,
    "Rison Thumboor CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"],

    ["Common Iora", "Aegithina tiphia","./imgs/common iora.jpg",
        "fish", "frog", "caterpillar", 3,
    "Flickr user NatureAtYourBackyard. Photo uploaded to commons by user ltshears, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"],

    ["Greater Coucal", "Centropus sinensis","./imgs/greater coucal.png",
        "insects", "leaves", "rat", 1,
    "Davidvraju, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],

    ["Crested Serpent Eagle", "Spilornis cheela", "./imgs/crested serpent eagle.png",
        "berries", "snake", "caterpillar", 2,
    "Rahans, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],
    
    ["Grey Junglefowl", "Gallus sonneratii","./imgs/grey junglefowl.jpg",
        "rat", "insects", "leaves", 2,
    "Arshad ameen, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],
    
    ["Indian Golden Oriole", "Oriolus kundoo","./imgs/indian golden oriole.jpg",
        "berries", "snake", "frog", 1,
    "Imran Shah, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"],

    ["Indian Yellow Tit", "Machlolophus aplonotus","./imgs/indian yellow tit.jpg",
        "rat", "berries", "insects", 3,
    "Graf orlok2004, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],

    ["Indian Grey Hornbill", "Ocyceros birostris","./imgs/indian grey hornbill.jpg",
        "snake", "berries", "rat", 2,
    "Raman Kumar, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],

    ["Indian Peafowl", "Pavo cristatus","./imgs/indian peafowl.jpg",
        "fish", "leaves", "snake", 3,
    "Shino jacob koottanad, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],

    ["Indian Blackbird", "Turdus simillimus","./imgs/indian blackbird.jpg",
        "snake", "fish", "insects", 3,
    "Dr. Raju Kasambe, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],

    ["Indian Scimitar Babbler", "Pomatorhinus horsfieldii","./imgs/indian scimitar babbler.jpg",
        "insects", "frog", "snake", 1,
    "Prajwalkm, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],

    ["Indian Jungle Crow", "Corvus culminatus","./imgs/indian jungle crow.jpg",
        "frog", "leaves", "berries", 1,
    "Timothy A. Gonsalves, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"],
];

//-----------------------------------------------------------------------------------------------------------------------------

let wins = 0;

function checkAnswer(correctId, btnId) {
    if (! selected) {
        selected = true;
        newAnimalButton.classList.remove("invisible");
        btnToManipulate = document.querySelector(`#btn${btnId}`);
        if (btnId === correctId) {
            let audio = new Audio("./sounds/correct.wav");
            wins++;
            btnToManipulate.textContent = "✔";
            audio.play();
        } else {
            btnToManipulate.textContent = "❌";
        }

        btnToManipulate.classList.toggle("pressed");
        setTimeout(function () {
            btnToManipulate.classList.toggle("pressed");
        }, 100);
    }
}

animals = [];

for (let i = 0; i < 5; i++) {
    randomIndex = Math.floor(Math.random() * fullData.length);
    animals.push(fullData[randomIndex]);
    fullData.splice(randomIndex, 1);
}

function setButtonTicksToNull() {
    btn1.textContent = "";
    btn2.textContent = "";
    btn3.textContent = "";
}

const animalName = document.querySelector(".animal-name");
const sciName = document.querySelector(".scientific-name");
const animalImg = document.querySelector(".animal-img");
const photoCredit = document.querySelector(".photo-credit");
const newAnimalButton = document.querySelector(".new-animal-button");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

let id = 1;

animalName.textContent = animals[0][0];
sciName.innerHTML = `<em>${animals[0][1]}<em/>`;
animalImg.setAttribute("src", animals[0][2]);
photoCredit.textContent = `Bird image by: ${animals[0][7]}`;

let selected = false

newAnimalButton.classList.add("invisible");

btn1.classList.add(animals[0][3]);
btn2.classList.add(animals[0][4]);
btn3.classList.add(animals[0][5]);

setButtonTicksToNull()

function getNewAnimalSB() {
    newAnimalButton.classList.add("invisible");

    if (id === animals.length) {
        const prompt = document.querySelector(".prompt");
        if (wins > 3) {
            animalName.textContent = "Amazing!";
            sciName.textContent = "You really know your birds!";
        }

        else if (wins < 3) {
            animalName.textContent = "Good try!";
            sciName.textContent = "Try learning more about birds and what they eat.";
        }

        else if (wins === 3) {
            animalName.textContent = "Great!";
            sciName.textContent = "You know a great deal about birds.";
        }

        btn2.classList.add("invisible");
        btn3.classList.add("invisible");
        prompt.textContent = `${wins}/5 Correct`;
        prompt.classList.add("big-out-of");

        btn1.classList = [];
        btn1.classList.add("new-animal-button");
        btn1.classList.add("big");
        btn1.classList.add("restart-btn")
        btn1.innerHTML = '<a href="./index.html" >RESTART</a>';

        let finalAudio = new Audio("./sounds/final.wav");
        finalAudio.play();
    } else {
        selected = false;

        setButtonTicksToNull();

        btn1.classList = ["food-btn"];
        btn2.classList = ["food-btn"];
        btn3.classList = ["food-btn"];
        
        animalImg.setAttribute("src", animals[id][2]);
        animalName.textContent = animals[id][0];
        sciName.innerHTML = `<em>${animals[id][1]}<em>`;
        photoCredit.textContent = `Bird image by: ${animals[id][7]}`;

        btn1.classList.add(animals[id][3]);
        btn2.classList.add(animals[id][4]);
        btn3.classList.add(animals[id][5]);

        id++;

        return id;
    }
}

btn1.addEventListener("click", function () {
    checkAnswer(animals[id - 1][6], 1);
})

btn2.addEventListener("click", function () {
    checkAnswer(animals[id - 1][6], 2);
})

btn3.addEventListener("click", function () {
    checkAnswer(animals[id - 1][6], 3);
})

newAnimalButton.addEventListener('click', function () {
    id = getNewAnimalSB();
});
