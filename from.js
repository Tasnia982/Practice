












//8.1 = Arro Function (vedio-5)
// const arrosum=(a,b)=>{
//     console.log(" This is a arro function");
//     console.log(a+b);
// }
// arrosum(3,1);



// const vowel=(st)=>{
//     console.log(st.length);
//     for(let s of st){
//         console.log("Value= ",s);
//     }
// }
// vowel("functionCount");




// const vo=(str)=>{
//     console.log(str.length);
//     for(let si of str){
//         if(si=="a"|| si=="e"||si=="i"||si=="o"||si=="u"){
//          console.log(" This is a Vowel = ",si);
//         }
//     }
// }
// vo("Tasnia Love ");




//8.Function (vedio-5)
// function Myplane(){
//     console.log("Revise all Topic");
// }
// console.log(Myplane());

// let s;
// function Plane(shedule){
//     console.log(shedule);
// }
// console.log(Plane(prompt("Enter Your schedule",s)));


// function sum(a,b){
//     s=a+b;
//     console.log("Before return ");
//     return s;
// }
// let val=sum(2,6);
// console.log("the sum is = ",val);




//7.Array(vedio-4)
// let studentMark=[30,40,34,90,30,94];
// console.log(studentMark);
// console.log(studentMark.length);
// let Myfriend=["Niloy","Utshab","Erin","Tonima"];
// console.log(Myfriend);
// console.log(studentMark[4]);









//6.class & onject (lesture-11)
// class Person{
//     constructor(){
//         this.species="homo sapience";
//         console.log(" Print Person = ",this.species);
//     }
    
// }
// let Me=new Person();


// class Mycar{
//     start(){
//         console.log(" This is my car ");
//     }
//     stop(){
//         console.log(" This neet to br fine ");
//     }
// }
// let fortuner=new Mycar();
// console.log(typeof fortuner);
// console.log(fortuner.start());
// console.log( typeof Mycar);
// console.log(Mycar);
// class Toyota extends Mycar{
//     brand(){
//     console.log(" This is a good Brand  ");
//     }
// }
// let tasnia=new Toyota();
// console.log(tasnia.start());






//5.string (vedio-3)







//4.prompt (vedio-3)
// alert(" Hello User . Are you want to play game ? ");
// let gessnumber=20;
// let user=prompt(" Gess the game number : ");
// while(user!=gessnumber){

//    user= prompt("Wrong Number .  Gess the game number again  : ");
// }
// console.log( " Congratulation ! You won the Game .");






//3.2 = for in (object,array ) vedio-3
// let tasnia={
//     fullName:"Tasnia Rahman ",
//     id:221_35_982,
//     cgpa:4.00,
//     section:"d",
//     isPass:true,

// };
// for(let i in tasnia){
//     console.log(" Key = ",i,"Value = ",tasnia[i]);
// }







//3.1= for of loop(vedio-3)= string , array 
// let str="Daffodil";
// let size=0;
// for(let i of str){
//     console.log("i = ",i);
//     size++;
// }
// console.log("size= ",size);





//3.Loops (For Loop Vedio-3)
// let sum=0;
// for(i=0; i<=5 ; i++){
//     sum=sum+i;
//      console.log(" The update sequence for i = ",i);
// }
// console.log("Sum is =",sum);
// let x=2;
// while(x<=30 ){
//     if(x%2==0 ){
//         console.log(" Let  even x is= ",x);
//     }
//     else{
//         console.log(" The odd x is = ",x);
//     }
//     x++;
// }









//2.Object (Non-Premetive Data Type = 1.06m ,vedio=1)
// const student={
//     fullName:"Tasnia Rahman",
//     age:23,
//     id:221_35_982,
//     cgpa:4.00,
//     isPass:true,
// };
// student.age=student.age+2;
// student["age"]=student["age"]+1;
// console.log(student);
// console.log(typeof student);
// console.log(student.id);
// console.log(student.age);


// const Nilo={
//     fullName:"Masuduzzaman",
//     age:24,
//     cgpa:3.98,
// };
// console.log(Nilo);






//1.Data Type in js (Premitive Data type=7 type vedio=1)
// let age= 23;
// console.log(typeof age);
// let fullName="Tasnia Rahman ";
// console.log(typeof fullName);
// isFollow=false;
// console.log(typeof isFollow);
// full=true;
// console.log(typeof full);
// let x=BigInt("1234");
// console.log(typeof x);
// let y=Symbol("Hello Tasnia ");
// console.log(typeof y);





//### Practice code 
// let name="Tasnia";
// const id=982;

// document.write(" Hi",name,"Your id is ",id);
// document.write( " <br>This is ",name,id);

// document.write("Hello Tasnia ! ");
// console.log("This is me ");
// alert("confirm all coki");
// document.write("<br> This is a information form");
// alert("hello users !");