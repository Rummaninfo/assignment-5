let btn = document.getElementsByClassName("heart-icon")

for(let button of btn){
    button.addEventListener('click', function(e){
         let love = document.getElementById("love").innerText
         let plus = Number(love) + 1
         document.getElementById("love").innerText = plus
    })
}



