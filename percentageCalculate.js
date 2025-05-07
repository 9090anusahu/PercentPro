let Z=document.getElementById("z");
let result=document.getElementById("result");
let btn=document.getElementById("calci-btn");




btn.addEventListener("click",()=>{
    let xValue=parseFloat(document.getElementById("x").value)
    let yValue=parseFloat(document.getElementById("y").value);
    if(!isNaN(xValue) && !isNaN(yValue)){
        Z.value=((xValue * yValue)/100).toFixed(2);
        result.innerHTML=`${xValue}% of ${yValue} is <span>${Z.value}</span>`;
    }else{
        result.innerHTML="Input can not be defined!";
    }

});

