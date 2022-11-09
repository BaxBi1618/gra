
let tablica_1 = []
let tablica_2 = []
let limit = 0
let zaznaczone = 0
let box_number = document.getElementById("number-box")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("tablica").onclick = () => {
    tablica_1 = []
    let box = document.getElementsByClassName("squer")
    for(i = 0; i < 25; i++){
        if(i != 12){
            do{
                liczba = Math.floor(Math.random()*50)+1
            }while(tablica_1.includes(liczba) == true)
        
            tablica_1.push(liczba)
            box[i].innerHTML = liczba
        }
    }
    box_number.innerHTML = '<p style="font-size: 120px; margin-left: 30px; margin-top:-20px;">BINGO</p>'
    tablica_2 = []
    limit = 0
}
document.getElementById("liczba").onclick = function los() {
    if(limit < 50){
        do{
            liczba = Math.floor(Math.random()*50)+1
        }while(tablica_2.includes(liczba) == true)
        limit += 1
        tablica_2.push(liczba)
        box_number.innerHTML = "<p id='text'>Wylosowana liczba to: "+liczba+"<br>"+tablica_2+"</p>"
    }
}

let boxes = document.querySelectorAll('.squer')
function checkNum(){
    for(let i = 0; i<boxes.length;i++){
        boxes[i].addEventListener('click', () => {
            if(tablica_2.length > 0){
                if(tablica_2.includes(Number(boxes[i].innerText))){
                    if(!boxes[i].zaznacz){
                        boxes[i].innerHTML += "<img src='X.png' class=X_pic>"
                        boxes[i].zaznacz = true
                        zaznaczone++
                    }
                    if(zaznaczone == 24){
                        document.getElementById("box").innerHTML += "<div id='win'>Brawo wygrałeś</div>"
                        document.body.style.backgroundImage = "url(conf.gif)"
                        sleep(2000)
                            .then(() => document.getElementById("win").style.display = "none")
                            .then(() => document.getElementById("win").style.visibility = "hidden")
                            .then(() => document.getElementById("win").style.visibility = "hidden")
                            .then(() => window.location.reload())
                    }
    
                }
                else{
                    document.getElementById("box").innerHTML += "<div id='win' style='padding-top:40; font-size:70px;'>ZA PRÓBĘ OSZUSTWA PRZEGRYWASZ</div>"
                    sleep(2000)
                            .then(() => window.location.reload())
                }
            } 
        })
    }
}

checkNum()