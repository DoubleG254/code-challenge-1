// This function outputs whether the speed input is ok and issues points to speed above the limit
function speedreader(){  
    let speed = document.querySelector("#speed").value;
    let analysis = document.querySelector("#analysis");
    if(speed<=70){
        analysis.innerHTML = "OK"
    }
    if(speed>70){
        let n= (speed - 70) / 5;  // n is the value of the calculated points for speed above 70
        let points= parseInt(n, 10);   // points is the value of n in integer
        if (points>12) {
            analysis.innerHTML= "License suspended";  //if the points are above 12 then the license is suspended
        } else {
            analysis.innerHTML = `Points:${points}`;
        }
        
    }
}