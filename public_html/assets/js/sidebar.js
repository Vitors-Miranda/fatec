let body = document.querySelector("body"), 
sidebar = body.querySelector(".sidebar"), 
toggle = body.querySelector(".brand"),
modeSwitch = body.querySelector(".theme"),
textSwitch = body.querySelector(".mode-text");
sol_lua = body.querySelector(".sol-lua");

toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("fechar");
})
modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        sol_lua.innerHTML = "<i class='bi bi-moon-fill icon moon'></i>"
    } else 
        sol_lua.innerHTML = "<i class='bi bi-brightness-high-fill icon sun'></i>"
    }
});

