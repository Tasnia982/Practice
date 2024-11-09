let d=document.querySelectorAll("div");
console.dir(d);
d[0].innerText=" new Box Created ";
let ind=1;
for(div of d){
    div.innerText=" New Text Number = "+ind;
    ind++;
}



// let h=document.querySelector("h1");
// console.dir(h);
// h.innerText=h.innerText+" From Apna Colege ";