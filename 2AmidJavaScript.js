// alert("Hello User");

// let option;
// const use=()=>{
//     if(option=="Yes"){
//         console.log("Welcome in this site ");
//     }
//     else{
//         console.log("Please live this site ");
//     }
// }
// let p=(prompt("Are You want to use this site ?"+use));

// let heading=document.querySelector("h3");
// heading.innerHTML="<h1>Welcome in JS world <h1>";
// heading.style.backgroundColor="yellow";
// heading.style.height="300px";
// heading.style.width="250px";


// let para=document.querySelectorAll("p");
// let id=1;
// for(let p of para){
//     console.log(p.innerText="This is Para Number = "+id);
//     id++;
// }

// let div=document.querySelector("div");
// div.innerHTML="Hello Tasnia. Software Engineer!";

// let CreBut=document.createElement("button");
// CreBut.innerText="Tasnia Click Me !";
// console.log(CreBut);

// div.after(CreBut);

// let ev=document.querySelector("#box");
// ev.addEventListener("click",(e)=>{
//     console.log(e);
//     ev.innerHTML="<i><u> div click here </u></i>";
//     ev.style.backgroundColor="aqua";
//     console.log("Tasnia click this div ");

// });


//class and object 
// let studentObject={
//     fullName:"Tasnia Rahman",
//     id:22135982,
//     section:"D",
// }
// let ab=document.querySelector("#div");
// ab.style.backgroundColor="blue";
// ab.style.height="50px";


// for(let d in studentObject){
//    ab.after(document.write("Key = "+d+";Value="+studentObject[d]));
// }

// class NewClass{
   

// }

//object
const student={
    n:"Tas",
    a:23,
    printMasks : function(){
        console.log("Age = ",this.a);
    },
};