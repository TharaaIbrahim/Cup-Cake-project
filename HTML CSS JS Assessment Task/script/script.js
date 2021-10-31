$(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];
localStorage.removeItem('userName');

let form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // validate();
    let msg=validate();
    if(msg[0]==="Okay" && msg[1]==="Okay" && msg[2]==="Okay" && msg[3]==="Okay" && msg[4]==="Okay"){
        console.log("true");
        window.location.href="./index.html";
    }
});



function show_cupcakes(){
    //write code that shows the cupcakes in the table as per the instructions
    let table=document.getElementById("table");
    for(let i=0;i<cup_cakes.length;i++){
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        td1.innerHTML=cup_cakes[i].name;
        td2.innerHTML=cup_cakes[i].calories;
        td3.innerHTML=cup_cakes[i].weight;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    
        if(cup_cakes[i].calories==="low"){
            td2.style.backgroundColor="lightgreen";
        }else if(cup_cakes[i].calories==="medium"){
            td2.style.backgroundColor="orange";
        }else if(cup_cakes[i].calories==="high"){
            td2.style.backgroundColor="red";
        }
    }

}





function validate(){
    //write code that validates the form
    let errorIcon=document.querySelectorAll(".error");
    let correctIcon=document.querySelectorAll(".correct");
    let custName=document.getElementById("customerName");
    let count=document.getElementById("count");
    let favorSelector=document.getElementById("favorSelector");
    let deliverySel=document.getElementById("deliverySel");
    let allegrigesSelector=document.getElementById("allegrigesSelector");
    let msg=document.querySelectorAll(".msg");
        msg[4].innerHTML="Okay";
        allegrigesSelector.style.border="1px solid green";
        correctIcon[4].style.visibility="visible";
        if(custName.value.length<5 || custName.value.length>16){
        msg[0].innerHTML="The name must be between 5 and 16 characters long";
        msg[0].style.color="red";
        custName.style.border="1px solid red";
        errorIcon[0].style.visibility="visible";
        correctIcon[0].style.visibility="hidden";
        }
       else{
           localStorage.setItem("userName",`${custName.value}`);
            msg[0].innerHTML="Okay";
            msg[0].style.color="green";
            custName.style.border="1px solid green";
            correctIcon[0].style.visibility="visible";
            errorIcon[0].style.visibility="hidden";
        }
        if(count.value<1 || count.value>15){
            msg[1].innerHTML="The count must be between 1 and 15";
            msg[1].style.color="red";
            count.style.border="1px solid red";
            errorIcon[1].style.visibility="visible";
            correctIcon[1].style.visibility="hidden";
        }
        else{
            msg[1].innerHTML="Okay";
            msg[1].style.color="green";
            count.style.border="1px solid green";
            correctIcon[1].style.visibility="visible";
            errorIcon[1].style.visibility="hidden";
        }
        if(favorSelector.value==="none"){
            msg[2].innerHTML="Please fill out the cupcake type";
            msg[2].style.color="red";
            favorSelector.style.border="1px solid red";
            errorIcon[2].style.visibility="visible";
            correctIcon[2].style.visibility="hidden";
        }
        else{
            msg[2].innerHTML="Okay";
            msg[2].style.color="green";
            favorSelector.style.border="1px solid green";
            correctIcon[2].style.visibility="visible";
            errorIcon[2].style.visibility="hidden";
        }
        if(deliverySel.value==="none"){
            msg[3].innerHTML="Please fill out the delivery type";
            msg[3].style.color="red";
            deliverySel.style.border="1px solid red";
            errorIcon[3].style.visibility="visible";
            correctIcon[3].style.visibility="hidden";
        }
       
        
        if(favorSelector.value==="choclate" && allegrigesSelector.value==="dairyFree"){
            msg[4].innerHTML="The choclate cake is not dairy free";
            msg[4].style.color="red";
            allegrigesSelector.style.border="1px solid red";
            errorIcon[4].style.visibility="visible";
            correctIcon[4].style.visibility="hidden";
        }else{
            allegrigesSelector.style.border="1px solid green";
            msg[4].innerHTML="Okay";
            errorIcon[4].style.visibility="hidden";
            correctIcon[4].style.visibility="visible";
             msg[4].style.color="green";
            }
        if(favorSelector.value==="pecan" && allegrigesSelector.value==="nutFree"){
            msg[4].innerHTML="The pecan cake is not nut free";
            msg[4].style.color="red";
            errorIcon[4].style.visibility="visible";
            correctIcon[4].style.visibility="hidden";
            allegrigesSelector.style.border="1px solid red";
        }else if(favorSelector.value!=="none" &&allegrigesSelector==="dairyFree"){  
            errorIcon[4].style.visibility="hidden";
            correctIcon[4].style.visibility="visible";
            msg[4].style.color="green";
        }
        if(favorSelector.value==="choclate" && deliverySel.value==="4"){
            msg[3].innerHTML="The choclate cake cannot be delivered at 4 PM";
            errorIcon[3].style.visibility="visible";
            correctIcon[3].style.visibility="hidden";
            msg[3].style.color="red";
            deliverySel.style.border="1px solid red";
        }else if(deliverySel.value!=="none" ){
            msg[3].innerHTML="Okay";
            msg[3].style.color="green";
            deliverySel.style.border="1px solid green";
            correctIcon[3].style.visibility="visible";
            errorIcon[3].style.visibility="hidden";
        }
    let messages=[msg[0].innerHTML,msg[1].innerHTML,msg[2].innerHTML,msg[3].innerHTML,msg[4].innerHTML];
    return messages;
}

function show_storage(){
    //write code that shows the name from local storage
    let welcome=document.getElementById("welcome");
    let user=localStorage.getItem('userName');
    welcome.innerHTML=`Welcome ${user}`;
}