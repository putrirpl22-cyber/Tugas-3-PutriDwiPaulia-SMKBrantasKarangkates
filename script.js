const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');
//
btnTema.addEventListener('click', function()  {
bodyHalaman.classList.toggle('light-mode');
//
if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Mode Gelap ';
    } else {
    btnTema.textContent = '☀️ Mode Terang ';    
    }
});
const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');
//
btnBukaModal.addEventListener('click', function(event) {
event.preventDefault();
elemenModal.classList.add('show');
});
//
btnTutupModal.addEventListener('click', function() {
elemenModal.classList.remove('show');   
});
//
const btnSemangat = document.getElementById("btnSemangat");
const semangat = document.getElementById("semangat");

btnSemangat.addEventListener("click", function () {
    semangat.textContent = "Semangat belajar coding! Kita pasti bisa! ✨";
});
// FITUR MOOD HARI INI
const btnMood = document.getElementById("btnMood");
const hasilMood = document.getElementById("hasilMood");

btnMood.addEventListener("click", function () {
    const moods = [
        "😊 Hari ini semangat!",
        "😴 Sepertinya butuh istirahat.",
        "😎 Siap belajar coding!",
        "🥰 Hari ini penuh energi positif!",
        "🤓 Waktunya belajar JavaScript!",
        "🥹 Semangat pagi"
    ];

    const randomMood = Math.floor(Math.random() * moods.length);

    hasilMood.textContent = moods[randomMood];
});