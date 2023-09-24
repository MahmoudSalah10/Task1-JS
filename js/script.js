var allproducts = document.querySelectorAll(".list li")

var div1 = document.querySelector("#content")

var btn = document.querySelector("#btn")

var totalprice = 0

var div2 = document.querySelector("#display")



allproducts.forEach(function(item){
        item.onclick = function(){
            div1.innerHTML += item.textContent + " " 
            totalprice += +(item.getAttribute("price"))

        if(div1.innerHTML != ""){
            btn.style.display = "block"
            btn.style.width = "150px"
            btn.style.height = "50px"
            
        }
    }
        
})

btn.onclick = function(){
    div2.innerHTML = "Total Price = " + totalprice + " LE "
}