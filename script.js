let btnMode = document.querySelector(".mode");
let currMode = "light";
btnMode.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="rgb(248, 218, 223)";
    }
    console.log(currMode);
})
