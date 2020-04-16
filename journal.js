var journal = new Map();

function addToJournal(){
    letter = document.getElementById('letter').value;
    letterOperation = document.getElementById('operation1').value;
    letter2 = document.getElementById('letter2').value;
    value = document.getElementById('value').value;
    valueOperation = document.getElementById('operation2').value;
    value2 = document.getElementById('value2').value;
    
    if (!(letter === "") && !(value === "")){
        if (letterOperation == "+" && !(letter2==="")){
            intValue = parseInt(value, 10);
            if (journal.has(letter)){
                journal.set(letter2, (intValue - parseInt(journal.get(letter), 10)).toString());
            }
            else if(journal.has(letter2)){
                journal.set(letter, (intValue - parseInt(journal.get(letter2), 10)).toString());
            }
            else{
                console.log('Neither value exists')
            }
        }
        else if(valueOperation == "+" && !(value2==="")){
            if(journal.has(value) && journal.has(value2)){
                result = parseInt(journal.get(value), 10) + parseInt(journal.get(value2), 10)
                journal.set(letter, result.toString())
            }
        }
        else if (journal.has(value)){
            journal.set(letter, journal.get(value))
        }
        else if (!journal.has(letter)){
            journal.set(letter, value);
        }
        console.log(journal);
    }
}

function getCode(){
    var code = document.getElementById('code').value;
    var result = '';
    [...code].forEach(value => result = result.concat(journal.get(value)))
    document.getElementById('codeResult').innerText = result
}

function hideElements(){
    if (document.getElementById('operation1').value == '='){
        document.getElementById('letter2Label').style.display = 'none';
    }
    else{
        document.getElementById('letter2Label').style.display = 'block';
    }
}