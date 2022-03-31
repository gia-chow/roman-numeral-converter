function convertToRoman() {
    var userInput = document.getElementById("userInput").value;
    const lookup = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
    let result = "";
    
    for (i in lookup) {
        result += i.repeat(Math.floor(userInput/lookup[i]));
        userInput %= lookup[i];
    }
    
    document.getElementById("output").innerHTML = result;
   };
   