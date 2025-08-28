// Clicking on the 💗 heart icon of any card will increase the count in the Navbar
//  Heart Icons
let btn = document.getElementsByClassName("heart-icon")

for(let button of btn){
    button.addEventListener('click', function(e){
         let love = document.getElementById("love").innerText
         let plus = Number(love) + 1
         document.getElementById("love").innerText = plus
    })
}

// Call Buttons 

let callBtn = document.getElementsByClassName("call-btn")
for(let allBtn of callBtn){
    allBtn.addEventListener('click', function(){

       
        let name = allBtn.parentNode.parentNode.childNodes[5].innerText
        let num = allBtn.parentNode.parentNode.childNodes[7].innerText
        // alert(name + " " +  num)

        let coin = document.getElementById("coin").innerText
        let parseCoin = parseInt(coin)
        
         if (parseCoin < 20){
        alert('আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে   কয়েন লাগবে ।')
        return
       }
       let minus = parseCoin - 20
        document.getElementById("coin").innerText = minus
        alert(name + " " +  num)
       
       
        


        


        
       




    })
}

