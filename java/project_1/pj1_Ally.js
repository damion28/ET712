let btnpressme = document.querySelector(".btnpressme")

btnpressme.addEventListener("click", function(e){
    if(e.target.textContent === "View Colors"){
        e.target.textContent = "Loading..."
    }
    else{
        e.target.textContent = "View Colors"
    }
    // toggle between class 'btnactive' and 'btnpressme'
    e.target.classList.toggle("btnactive")
})