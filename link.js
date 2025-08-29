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
        alert("❌"+ ' ' +'আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে ।')
        return
       }
       let minus = parseCoin - 20
        document.getElementById("coin").innerText = minus
        alert("📞" +' ' + name + " " +  num)
       





       let name1 = allBtn.parentNode.parentNode.childNodes[3].innerText
        let num1 = allBtn.parentNode.parentNode.childNodes[7].innerText
        
        let mainDiv = document.getElementById('nameAndNumber')

        let div = document.createElement("div")
       div.classList.add("flex","justify-between","shadow-md","mx-6", "mt-2", "p-2", "rounded-2xl", 'items-center' , "bg-[#FAFAFA]" )
   
       let leftDiv = document.createElement('div')
       
       leftDiv.innerHTML =
        `
       <h2 class="text-lg font-medium">${name1}</h2>
       <h2 class="text-lg font-medium">${num1}</h2>
       
       `

       let rightDiv = document.createElement("div")

       let timeH2 = document.createElement("h2")
       timeH2.classList.add('text-lg', 'font-medium')
       rightDiv.appendChild(timeH2);


   

div.appendChild(leftDiv);
div.appendChild(rightDiv);
mainDiv.appendChild(div);


function showtime(element) {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    element.textContent = timeString;
}

showtime(timeH2); 
setInterval(showtime, 1000, timeH2);


// mainDiv.appendChild(div)
      
 let clear = document.getElementById("clearBtn")
 clear.addEventListener('click', function(){
     let cartContainer = document.getElementById('nameAndNumber')
     cartContainer.innerHTML = ''

 })


       
       
     
       
    })
}




// copy button

let copyBtn = document.getElementsByClassName("copy-btn")

for(let copyButton of copyBtn){
    copyButton.addEventListener('click', function(){
        let number = copyButton.parentNode.parentNode.childNodes[7].innerText
      
        alert("নতুন কপি করা হয়েছে" +' '+  number )
        navigator.clipboard.writeText(number)

       let copyNumber = document.getElementById('copy-number').innerText
       let copyNumberParse = parseInt(copyNumber)
       let CopyNumberPlus = copyNumberParse + 1
       document.getElementById('copy-number').innerText = CopyNumberPlus

    })
}

