console.log("yes");
let s = "";
let input = Array.from(document.getElementsByClassName("input"));
let output = document.getElementsByClassName('output')[0];
input.forEach((element) => {
    element.addEventListener('click', () => {
        s = s + element.textContent;
        output.innerHTML = s;


    });
});

    document.addEventListener('keypress', (e) => {
        s = s + e.key;
        output.innerHTML = s;


    });

input.forEach((element) => {
    element.addEventListener('mousedown', () => {
        element.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
    });
});
input.forEach((element) => {
    element.addEventListener('mouseup', () => {
        element.style.boxShadow = "none";
    });
});
let clear = document.getElementsByClassName("clear")[0];
clear.addEventListener("click", () => {
    let a = s.substring(0, s.length - 1);

    output.innerHTML = a;
});
clear.addEventListener('mousedown', () => {
    clear.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
});
clear.addEventListener('mouseup', () => {
    clear.style.boxShadow = "none";
});
let allclear = document.getElementsByClassName("AC")[0];
allclear.addEventListener("click", () => {
    s = '';
    output.innerHTML = s;
    output.style.backgroundPosition="right";output.style.color="black";
});
allclear.addEventListener('mousedown', () => {
    allclear.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
});
allclear.addEventListener('mouseup', () => {
    allclear.style.boxShadow = "none";
});
let enter = document.getElementsByClassName("enter")[0];
enter.addEventListener("click", () => {
    
    let n = eval(s);
    output.innerHTML = n;
    output.style.backgroundPosition="left";output.style.color="white";
});
enter.addEventListener('mousedown', () => {
    enter.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
   
});
enter.addEventListener('mouseup', () => {
    enter.style.boxShadow = "none";
});