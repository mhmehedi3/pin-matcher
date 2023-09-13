



//notify display off / on
const notificTion=document.getElementById("unmatched").style.display="none";
const notify=document.getElementById("matched").style.display="none";
const tryPin =document.getElementById("tryContent").style.display="none";





// for empty value
function emptyValue(id){
    document.getElementById(id).value="";
}
// for empty text
function emptyText (id){
    document.getElementById(id).innerText="";
}
//for display None
function displayNone(id){
    document.getElementById(id).style.display="none";

}
//for display block
function displayBlock(id){
    document.getElementById(id).style.display="block";
}
 //try left 
 function tryLeft(id){
    let tryAgain =document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -=1;
    if (tryAgain == "1"){
        disableBtn ("tryContent");
    }
    
 }

 function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor="not-allowed";
    button.setAttribute = ("disabled","true");
    button.innerHTML= "Please Reload page";
    
    alert("Please reload your page");
 }


//for generate pin 
 function randomNumFunc(){
    let randomNumber= Math.floor(1000 + Math.random()*9000);
    document.getElementById("inputPin").value=randomNumber;

    emptyValue("keyPad");
    displayNone("unmatched");
    displayNone("matched");
    displayNone("tryContent")
 }
 
 //another option for generate pin


 /* const generateBotton = document.getElementById("generateBtn").addEventListener("click",function(){
    var randomNumber= Math.floor(1000 + Math.random()*9000);
   document.getElementById("inputPin").value=randomNumber;
 });
 */

 //input number value
 function keyBtn(id){
    let keyPadNum = document.getElementById("keyPad").value;
    let keyNum= document.getElementById(id).innerHTML;
   document.getElementById("keyPad").value =keyPadNum + keyNum;
 }

 //all input clear ,clean

 function clean() {
    document.getElementById("keyPad").value= "";

          //OR
   //const cleanBtn = document.getElementById("keyPad");
   //cleanBtn.value = "";
 }


 //Last input clean

 function lastClr() {
   const cleanLast =document.getElementById("keyPad").value;
    const cleanLastInput =cleanLast.slice(0,cleanLast.length-1);
    document.getElementById("keyPad").value = cleanLastInput;
 }


//submit button 
 function submitPin(){
  let generatePin= document.getElementById("inputPin").value;
  let keyNumber = document.getElementById("keyPad").value;

   // matching pin
     if(generatePin == keyNumber ){
        displayBlock("matched");
        displayNone("unmatched");
        displayNone("tryContent")
     }
     else
     {
        displayBlock("unmatched");
        displayNone("matched");
        tryLeft("tryleft");
        displayBlock("tryContent");
     }
     emptyValue("keyPad");
 }


