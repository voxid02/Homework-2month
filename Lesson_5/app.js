function generateNumbers(){
    let numbers = [];
    for (let i = 0; i< 6; i++){
        numbers.push(Math.floor(Math.random()*99)+1);
    }
    document.querySelector("#numbers").innerHTML = numbers.join();
}