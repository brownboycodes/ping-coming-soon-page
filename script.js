let btn = document.getElementById("btn");
let input = document.getElementById("input");
let content;
let message = document.getElementById("message");
btn.addEventListener("mouseover", ()=>{
    content = input.value;
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regx.test(content)) {
        return true
    } else {
        message.style.display = "block";
        input.style.borderColor = "hsl(354, 100%, 66%)"
    }
});
input.addEventListener("click", ()=>{
    message.style.display = "none";
    input.style.borderColor = "hsl(223, 100%, 88%)"
});