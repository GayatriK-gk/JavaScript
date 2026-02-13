document.querySelector("#btn").addEventListener("click",function(){
    let result= " ";

    for(let i=1;i<=5;i++){
        result=result+ i+ " ";
    }
    document.querySelector("#output").innerText=result;
});

document.querySelector("#btn2").addEventListener("click",function(){
    let result2=" ";

    for(let i=5; i>=1; i--){
        result2=result2+ i + " ";
    }
    document.querySelector("#output2").innerText=result2;
});