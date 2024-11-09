//10. Event Handeling Using(EventListeners)
//bettee option then 8,9 

// let x=document.querySelector("div");
// x.addEventListener("click",()=>{
// console.log("Div click");
// });
let z=document.querySelector("p");
z.addEventListener("mouseover",()=>{
  console.log(" Button click 2 times ");
});
z.removeEventListener("mouseover",()=>{
    console.log(" Button click 2 times ");
  });








//9.Event Handeling with event object
//let a=document.querySelector("div");
// a.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clickX,e.clickY);
// }





//8.Event Handeling 
// let div=document.querySelector("#box");
// div.onclick=()=>{
//     console.log("Mous click here");
//     div.style.height="60px";
//     div.style.width="60px";
//     div.style.color="red";
//     div.style.backgroundColor="green";

// }

//8.1
// let div=document.querySelector("#bt1");
// div.onclick=(eve)=>{
//     console.log(eve);
//     console.log(eve.type);
//     console.log("Mous click here");
//     div.style.height="60px";
//     div.style.width="60px";
//     div.style.color="red";
//     div.style.backgroundColor="green";
   
// }










//7.Insert element (append,prepand,before,after)
//append=(document.createElement(""))

// let d=document.querySelector("#box");
// console.log(d);
// console.dir(d.innerText);

// let newBtn=document.createElement("button");
// newBtn.innerText="Click me!";
// console.log(newBtn);

// d.append(newBtn);

// d.prepend(newBtn);

// d.before(newBtn);

// d.after(newBtn);

// newBtn.style.alignContent="center";

// let a=document.querySelector("p").remove();
//or
// a.remove();









// 6.Dom part 2 
//6.1. get attribut (like -id,class or any additional information value)
//getAttribute("nameofattribute");setAttribute("attname","value")

// let a= document.querySelector("div");
// console.log(a.getAttribute("id"));
// console.log(a.getAttribute("class"));

// a.setAttribute("class","Tasnia");
// console.log(a.getAttribute("class"));
// console.log(a.getAttribute("name"));
// a.style.backgroundColor="red";
// a.style.height="100px";
// a.style.width="100px";









//5.or 
// let divs=document.querySelectorAll(".box");
// // divs[0].innerText="Tasnia";
// let i=1;
// for(let div of divs)
// {
//     console.log(div);
//     div.innerText=" The id is = "+i;
//     i++;
// }






//5.practice 
// let div=document.querySelectorAll(".box");
// console.dir(div);
// console.dir(div[0]);
// console.dir(div[0].innerHTML="<i> Thsnia 982 <i>");
// console.dir(div[1]);
// console.dir(div[1].innerText="Niloy 901");
// console.dir(div[2].innerText="Utshab 976");
// console.dir(div[0].style.color="red");
// console.dir(div[1].style.color="green");





//4. practice 
//let j=document.querySelector("h2");
// console.log(j.innerText=" Hellow Javascript form Apna College student");
//or
//console.log(j.innerText= j.innerText + " form Apna College student");








//3.1 last 
// let c=document.querySelector("div");
// console.log(c.innerHTML);
// console.log(c.innerText);
// console.log(c.tagName);
// let a=document.querySelector(".divClass");
// console.log(a.innerHTML=" <p> 982 is Tasnia Id </p>");

// let b=document.querySelector("p");
// console.dir(b.innerText=" DIU Software Student .");


// let r=document.querySelector("h3");
// console.log(r.innerText="Tasnia (982)");
// console.log(r.innerHTML="<i> Niloy (901) </i>");

// let u=document.querySelector("h1");
// console.log(u.textContent);
// console.log(u.innerText);
// console.log(u.innerText=" Masuduzzaman");









//3.1 set property
// let b=document.querySelector("div");
// console.log(b.tagName);
// console.log(b.innerText);
// console.log(b.innerHTML);
// console.log(b.childNodes);
// console.log(b.children);
// console.log(b.innerText=" Tasnia ");
// console.log(b.innerHTML="<h1> Tasnia 982 is a DIU student </h1>");









//3.access element using query selectoe then check the value of the property & can change it(get,set,update)
// using (tagName,innerText,innerHTML,textContent )
//get property 
// let a=document.querySelector("p");//all a tagName kj korbe na
// console.dir(a);
// console.log(a.tagName);
// console.log(a.innerText);

// let d=document.querySelector("div");
// console.log(d.tagName);
// console.log(d.innerText);
// console.log(d.innerHTML);










//2.access element using query selector - better option then process 1
//document.querySelector(" tag/class/id  name ") = akbar  a ak ta element a kj korbe 
//document.querySelectorAll(" tag/class/id  name")= same nam ar jotogola acha sobar opor kj korbe
// let firstElement= document.querySelector("p");
// console.dir(firstElement);


// let allElement=document.querySelectorAll("p");
// console.dir(allElement);

// let firstId=document.querySelector("#para");
// console.dir(firstId);







//1.Dom Manupulatiom (39m)
//(id,class,tag)=(document.getElementById(""),document.getElementsByClassName(" "),
//document.getElementsByTagName(" "))
//access element from the page 




// let he= document.getElementsByClassName("heading-class");
// console.dir(he);
// console.log("he");

// let paragraph=document.getElementById("para");
// console.dir(paragraph);

// let pa=document.getElementsByTagName("p");
// console.dir(pa);










// alert(" Hii Js coder");
// document.write(" Hii Tasnia Rahman ");
// document.body.childNodes[3].innerText="ZXCV";
// let para=document.querySelectorAll("p");
// para.innerText="AB";
