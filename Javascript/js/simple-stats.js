function clearInput()
{
    document.getElementById("array").value = "";
};

function genRandom(){
    let randomArray = []
    for (let i=0; i<10; i++){
        randomArray.push(Math.floor(100*Math.random()))
    }
    document.getElementById("array").value = randomArray.toString();
}

function summaryCalc()
{
    var array = document.getElementById("array");
    array2 = array.value.split(",").map(function (item) {
    return parseFloat(item, 3);
});


if (array2.length===1) {
    document.getElementById("numElements").innerHTML = '';
    document.getElementById("max").innerHTML = '';
    document.getElementById("min").innerHTML = '';
    document.getElementById("sum").innerHTML = '';
    document.getElementById("mean").innerHTML = '';
    document.getElementById("stdDev").innerHTML = '';
}
else{
// Number of input
numInput = array2.length
document.getElementById("numElements").innerHTML = 'There are <strong>'+numInput+'</strong> numbers in total.';
// Max
    max = Math.max(...array2)
    document.getElementById("max").innerHTML = '<strong>'+max+'</strong>';

// Min
min = Math.min(...array2)
document.getElementById("min").innerHTML = '<strong>'+min+'</strong>';

// Sum
    sum = array2.reduce(function(acc, val) { return acc + val; }, 0);
    document.getElementById("sum").innerHTML = '<strong>'+sum.toFixed(3)+'</strong>';

// Mean
getMean =  (data) => {
    return data.reduce(function (a, b) {
        return Number(a) + Number(b);
    }) / data.length;
}
    mean = getMean(array2);
    document.getElementById("mean").innerHTML = '<strong>'+mean.toFixed(3)+'</strong>';
    
// Standard deviation
getSD = function (data) {
    let m = getMean(data);
    return Math.sqrt(data.reduce(function (sq, n) {
            return sq + Math.pow(n - m, 2);
        }, 0) / (data.length - 1));
}
    stdDev = getSD(array2);
    document.getElementById("stdDev").innerHTML = '<strong>'+stdDev.toFixed(3)+'</strong>';
}
}