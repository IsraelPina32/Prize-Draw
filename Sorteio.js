const champs = [
    {name: "Akali", origin:"Ionia", img:"img/Akali.jpg"},
    {name: "Katarina", origin:"Noxus", img:"img/kat.jpg"},
    {name: "Leblanc", origin:"Noxus", img:"img/LB.jpg"},
    {name: "Miss fortune", origin:"Águas de Sentina", img:"img/MF.jpg"},
    {name: "Lux", origin:"Demacia", img:"img/Lux.jpg"},
    {name: "Braum", origin:"Freiljord", img:"img/Braum.jpg"},
    {name: "Ahri", origin:"Ionia", img:"img/Ahri.jpg"},
]

function prize_draw(){
    const number = Math.floor(Math.random() * (8-1) + 1)
    return number;
}

function raffle(){
    let number = prize_draw()
    let name = document.getElementById("name");
    let img = document.getElementById("img");
    let origin = document.getElementById("location");
    name.innerHTML = `${champs[number - 1].name}`
    img.src = `${champs[number - 1].img}`
    origin.innerHTML = `${champs[number - 1].origin}`
    
}
   
