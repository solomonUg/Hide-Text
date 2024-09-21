const textEl = document.querySelector(".Text");
const btnEl = document.querySelector("#btn");


btnEl.addEventListener ("click", ()=>{
    if (btnEl.textContent == "Hide"){
        textEl.classList.add("hidden")
        btnEl.innerText = "Show";
    } else if (btnEl.textContent == "Show"){
        textEl.classList.remove("hidden")
        btnEl.innerText = "Hide"
    }
    
})