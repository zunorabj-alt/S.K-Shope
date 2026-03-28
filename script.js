let selectedPack = "";

function showTab(tab){
document.getElementById("ff").classList.add("hidden");
document.getElementById("pubg").classList.add("hidden");
document.getElementById(tab).classList.remove("hidden");

document.getElementById("btn-ff").classList.remove("active");
document.getElementById("btn-pubg").classList.remove("active");
document.getElementById("btn-" + tab).classList.add("active");
}

function openOrder(pack){
selectedPack = pack;

document.getElementById("overlay").classList.remove("hidden");
document.getElementById("formBox").classList.remove("hidden");

document.getElementById("selectedPack").innerText = "🎮 Pack: " + pack;

/* 💳 PAYMENT INFO + EMOJIS */
document.getElementById("msg").innerText =
"📲 💳 PAIEMENT INFOS:\n\n" +
"1️⃣ 0375348868\n   👤 HERY NIRINA HENINTSOA RAHELIARIMANANA\n\n" +
"2️⃣ 0387508615\n   👤 Miora\n\n" +
"🔰 Veuillez envoyé votre argent à l'un de ses numéro";
}

function closeOrder(){
document.getElementById("overlay").classList.add("hidden");
document.getElementById("formBox").classList.add("hidden");
}

function sendOrder(){


