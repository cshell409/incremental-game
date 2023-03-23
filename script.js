const sapling = document.getElementById("sapling");
const saplingAgeElement = document.getElementById("sapling-age");
const resetButton = document.getElementById("reset-button");
const resinCounter = document.getElementById("resin-counter");
const photosynthesisButton = document.getElementById("photosynthesis-button");
const photosynthesisLevelElement = document.getElementById("photosynthesis-level");
const photosynthesisCostElement = document.getElementById("photosynthesis-cost");

let ageInDays = 0;
let resin = 0;
let photosynthesisLevel = 0;

function updateSaplingAge() {
  const years = Math.floor(ageInDays / 365);
  const days = ageInDays % 365;
  saplingAgeElement.textContent = `Age: ${years} years, ${days} days`;
}

function updateResinCounter() {
  resinCounter.textContent = `Resin: ${resin}`;
}

function updatePhotosynthesisCost() {
    photosynthesisCostElement.textContent = `${20 * Math.pow(10, photosynthesisLevel)} Resin`;
}

function updatePhotosynthesisLevel() {
  photosynthesisLevelElement.textContent = photosynthesisLevel;
}

function applyPhotosynthesis() {
  const ageAndResinIncrement = 5 * Math.pow(5, photosynthesisLevel - 1);
  ageInDays += ageAndResinIncrement;
  resin += ageAndResinIncrement;
  updateSaplingAge();
  updateResinCounter();
}





sapling.addEventListener("click", () => {
  ageInDays++;
  updateSaplingAge();
  resin++;
  updateResinCounter();
});

resetButton.addEventListener("click", () => {
  ageInDays = 0;
  resin = 0;
  photosynthesisLevel = 0;
  updateSaplingAge();
  updateResinCounter();
  updatePhotosynthesisLevel();
  updatePhotosynthesisCost();
});

photosynthesisButton.addEventListener("click", () => {
  const cost = 20 * Math.pow(10, photosynthesisLevel);
  if (resin >= cost) {
    resin -= cost;
    photosynthesisLevel++;
    updateResinCounter();
    updatePhotosynthesisLevel();
    updatePhotosynthesisCost();
  }
});

setInterval(() => {
  if (photosynthesisLevel > 0) {
    applyPhotosynthesis();
  }
}, 1000);
