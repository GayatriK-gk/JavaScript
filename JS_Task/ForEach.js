document.querySelector("#btn").addEventListener("click",function(){
    let numbers=[1,2,3,4,5];
    let result="";

    numbers.forEach(function(num){
        result=result+num+" ";
    });
    document.querySelector("#output").innerText=result;
});