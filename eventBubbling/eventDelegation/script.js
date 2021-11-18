const form = document.querySelector("#signin");
form.addEventListener('click', (event)=>{
    console.log(event.target)
})


const form2 = document.querySelector("#signin2");
form2.addEventListener('input', (event)=>{
    console.log(event.target)
})

