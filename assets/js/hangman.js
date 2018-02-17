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
// var spanInput 
// var spanGuess 
// var spanGuessesLeft;
// var spanWins;
// var spanLoses;
// var spanResult; 


//To display first letter of each word UpperCase
function toUC ( str ) {
    if( typeof(str) == 'string' ) {
        str = str.charAt(0).toUpperCase() + str.substring(1, str.length);
        for( var i=1; i<str.length; i++)
        if(str[i]==' ') {
        str = str.substring(0,i) + ' ' 
                + str.charAt(i+1).toUpperCase()
                + str.substring(i+2, str.length);
        }
    } else if ( newWord == false && str[0] != undefined ) {
        str[0]=str[0].toUpperCase();
        for( var i=0; i<str.length; i++) 
            if( str[i]===' ')
             str[i+1] = str[i+1].toUpperCase();
    }
    return str;
}

//To check the letters guessed matches the random word picked by the application
function checkWord() {
    
    if( vArrInput.join().replace(/,/g,'').toLowerCase() === vCountry.toLowerCase() ) {
        vWins++;
        vResult="You are a Winner!  ";
        newWord=true; 
    } else if( vGuessesLeft===0) {
        vLoss++;
        vResult="You Lost!" +"\n"+ "Word: "+ toUC(vCountry);
        newWord=true; 
    }
}



function functionHangMan( event ) {
    var spanInput = document.getElementById("idInput");
    var spanGuess = document.getElementById("idUserGuess");
    var spanGuessesLeft = document.getElementById("idGuessesLeft");
    var spanWins = document.getElementById("idWins");
    var spanLoses = document.getElementById("idLoses");
    var spanResult = document.getElementById("idResult"); 

    if( event.key != undefined )   {
        vInput = event.key.toLowerCase();
        vInputKeyCode = event.keyCode;
    } else {
        vInput='';
        vInputKeyCode=0;
    }
    
    if( newWord === true ) {
        newWord = false;
        vGuessesLeft=10;
        vResult = "";
        vArrGuess.length=0;
        vArrInput.length=0;
        vArrCountry.length=0;
        vRandomNum = Math.floor(Math.random()*196);
        vCountry = arrCountries[vRandomNum].toLowerCase();
        vArrCountry = vCountry.split('');
        for( var i=0; i<vArrCountry.length; i++) {
            if( vArrCountry[i] != " ")
                vArrInput.push("_");
            else
                vArrInput.push(" ");
        }
    }
    if( String.fromCharCode(vInputKeyCode).match(/[a-zA-Z]/) !=null  && vArrGuess.indexOf(vInput) === -1) {
        vArrGuess.push(vInput);
        if ( vArrCountry.indexOf(vInput, 0) === -1)
                vGuessesLeft--;
        if( vGuessesLeft != 0 ){
            var pos = -1;
            do {
                pos=vArrCountry.indexOf(vInput, pos+1);
                if( pos!= -1)
                    vArrInput[pos] = vInput;
            } while( pos != -1);    
        } 
        checkWord(); 
    }
    spanInput.innerHTML = "<pre>"+  toUC(vArrInput).join().replace(/,/g,' ')  +"</pre>";
    spanWins.innerText = vWins;
    spanLoses.innerText = vLoss;
    spanResult.innerText = vResult;
    spanGuessesLeft.innerText= vGuessesLeft;
    spanGuess.innerText = vArrGuess.toString().replace(/,/g, ' ,');

}

function functionReset(event) {
    
    console.log(event.target.nodeName);
    console.log(event.target.key);
    newWord = true;
    vWins = 0;
    vLoss = 0;
    functionHangMan(event.target);
}


document.onkeyup = function(event) { functionHangMan(event) } ;

