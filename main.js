var championship = [
    'Mushroom Cup',
    'Flower Cup',
    'Star Cup',
    'Special Cup',
    'Shell Cup',
    'Banana Cup',
    'Leaf Cup',
    'Lightning Cup',
    'Egg Cup',
    'Triforce Cup',
    'Crossing Cup',
    'Bell Cup'
]


function newChamp() {
var randomNumber = Math.floor(Math.random() * (championship.length));
document.getElementById('champName').innerHTML = championship[randomNumber];

}