const inputs = document.querySelectorAll('input') // get inputs
const button = document.querySelector('input[type="button"]') //get button
const error = document.getElementsByClassName("message") //get paragraphs
console.log(error)

button.addEventListener("click", ()=>{
    inputs.forEach((input, index) =>{
        if(input.value == '' || input.value == null){
            input.classList.add("unfilled")
            error[index].classList.add("error")
            //Another way to do without need to get the index, because this method can get the sibling
            // input.nextElementSibling.classList.add("error")
        }
        
    })
})

inputs.forEach((input, index) => {
    input.addEventListener("change", () => {
        if (input.value != '') {
            input.classList.remove("unfilled")
            input.classList.add("filled")
            error[index].classList.remove("error")
            // input.nextElementSibling.classList.remove("error")
        } else {
            input.classList.remove("filled")
            
        }
    })
})




