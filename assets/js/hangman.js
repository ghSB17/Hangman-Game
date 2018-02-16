var arrCountries= 
            ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Rep","Chad","Chile","China","Colombia","Comoros","Congo","Congo Democratic Rep","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","St Kitts and Nevis","St Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South","Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]

var vArrCountry=[];
var vCountry="";
var vWins=0;
var vLoss=0;
var vGuessesLeft=10;
var vRandomNum=0;
var vInput="";
var vResult="";
var vArrInput=[];
var vArrGuess=[];
var newWord = true;
var vInputKeyCode;
var vInputWord="";

function toUpCase( strWord ) {
    var strUC = strWord.charAt(0).toUpperCase();
    strWord = strUC + strWord.substring(1, strWord.length);
    for( var i=1; i<strWord.Length; i++ ) {
        if( strWord[i]==' ') {
            str
        }
    }


}


function checkWord() {
    vInputWord =vArrInput.join();
    console.log("97) here" + vInputWord);
    console.log("98): "+ vArrInput.join());
    console.log("99): "+vCountry.toLowerCase());
    vInputWord = vInputWord.replace(/,/g, ' ');
    console.log("100): "+vInputWord);
    if( vArrInput.join().replace(/,/g,'')===vCountry.toLowerCase() ) {
        vWins++;
        vResult="You are Winner!" + arrCountries[vRandomNum];
        // vGuessesLeft=10;
        newWord=true; 
        console.log("103)word matched "+ vWins)
    } else if( vGuessesLeft===0) {
        vLoss++;
        vResult="You Lost!" +"\n"+ "Word: "+vCountry;
        // vGuessesLeft=10;
        newWord=true; 
        console.log("No match");
        console.log("104) No Match and no guessesleft");
    }
}


document.onkeyup = function(event) { functionHangMan(event) } ;

function functionHangMan( event ) {
    var spanInput = document.getElementById("idInput");
    var spanGuess = document.getElementById("idGuess");
    var spanGuessesLeft = document.getElementById("idGuessesLeft");
    var spanWins = document.getElementById("idWins");
    var spanLoses = document.getElementById("idLoses");
    var spanResult = document.getElementById("idResult");
   // alert("here");
    console.log(spanInput.innerText);
    console.log(newWord);
    vInput = event.key.toLowerCase();
    vInputKeyCode = event.keyCode;1
    console.log("38)input char keycode: "+ vInputKeyCode);
    console.log( "39)check match: " + String.fromCharCode(vInputKeyCode));
    console.log( "40)check match2: " + String.fromCharCode(vInputKeyCode).match(/[a-zA-Z]/));
    if( newWord === true ) {
        newWord = false;
        vGuessesLeft=10;
        vResult = "";
        vArrGuess.length=0;
        vArrInput.length=0;
        vArrCountry.length=0;
        vRandomNum = Math.floor(Math.random()*196);

        console.log("49): "+arrCountries[vRandomNum]);
        vCountry = arrCountries[vRandomNum].toLowerCase();
        // vCountry=vCountry.toLowerCase();
        console.log("52): "+vCountry);
        vArrCountry = vCountry.split('');
        for( var i=0; i<vArrCountry.length; i++) {
            if( vArrCountry[i] != " ")
                vArrInput.push("_");
            else
                vArrInput.push(" ");
        }
        console.log("60): "+vArrInput);
    }
    console.log("62)input char:"+vInput);
    if( String.fromCharCode(vInputKeyCode).match(/[a-zA-Z]/) !=null  && vArrGuess.indexOf(vInput) === -1) {
        console.log("here 2nd part");
        vArrGuess.push(vInput);
        console.log("66): "+ vArrGuess.join());
        if ( vArrCountry.indexOf(vInput, 0) === -1)
                vGuessesLeft--;
        console.log("69): "+vGuessesLeft);
        if( vGuessesLeft != 0 ){
            var pos = -1;
            do {
                pos=vArrCountry.indexOf(vInput, pos+1);
                if( pos!= -1)

                    vArrInput[pos] = vInput;
                    console.log("77)I: "+i+"varrinput: "+vArrInput.join());
            } while( pos != -1);    
        } 
        console.log("80): "+vGuessesLeft);
        checkWord(); 
        
    }

    //vInputWord.replace(/" "/g, ' - ' );
    console.log("150) vinputword: "+ vInputWord);
    // alert(vInputWord);
    spanInput.innerHTML = "<pre>"+ vArrInput.join().replace(/,/g,' ') +"</pre>";
    // spanInput.innerText = vInputWord.slice(0,vInputWord.indexOf(" ")) 
    //                         + "  " 
    //                         + vInputWord.slice(vInputWord.indexOf(" ")+1, vInputWord.length-1 ) ;
    spanWins.innerText = vWins;
    spanLoses.innerText = vLoss;
    spanResult.innerText = vResult;
    spanGuessesLeft.innerText= vGuessesLeft;
    spanGuess.innerText = vArrGuess.join();

 
    
}
