document.querySelector("#btn").addEventListener("click",function(){
    let numbers=[1,2,3,4,5];
    let doubled=numbers.map(function(num){
        return num*2;
    });
    document.querySelector("#output").innerText=doubled;

});