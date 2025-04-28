let Input = document.getElementById("inputbox")
let Buttons = document.querySelectorAll("button")
let string = ""
let arr = Array.from(Buttons)
arr.forEach(button => {
    button.addEventListener("click", (x) =>{
        if (x.target.innerHTML == "="){
            string = eval(string)
            Input.value=string
        }
        else if (x.target.innerHTML == "Clear"){
            string = ""
            Input.value=string
        }
        else if (x.target.innerHTML == "Delete"){
            string = string.substring(0, string.length-1)
            Input.value=string
        }
        else {
            string += x.target.innerHTML
            Input.value = string
        }
    })
})