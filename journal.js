var journal = new Map();

function addToJournal(){
    letter = document.getElementById('letter').value;
    letterOperation = document.getElementById('operation1').value;
    letter2 = document.getElementById('letter2').value;
    value = document.getElementById('value').value;
    valueOperation = document.getElementById('operation2').value;
    value2 = document.getElementById('value2').value;
    
    if (!(letter === "") && !(value === "")){
        if (letterOperation == '='){
            if (journal.has(value) && journal.has(letter)){
                console.log('both values cannot exist in journal');
            }
            else if(journal.has(value)){
                if (isNaN(letter)){
                    journal.set(letter, journal.get(value))
                }
                else{
                    console.log('letter 1 must be a letter');
                }
            }   
            else if (journal.has(letter)){
                if(isNaN(value)){
                    journal.set(value, journal.get(letter));
                }
            }
            else{
                if (isNaN(letter) && isNaN(value)){
                    console.log('Either the letter or value must be a number');
                }
                else if (isNaN(letter)){
                    journal.set(letter, value);
                }
                else if (isNaN(value)){
                    journal.set(value, letter);
                }
                else{
                    console.log('Both can not be numbers')
                }
            }
        }
        else if (letterOperation == "+" && !(letter2==="")){
            if (isNaN(value)){
                //if value is not a number, then check if that value is a key in the map.
                //if it is, then one of letter 1 or letter 2 must be in the map
                //if it is not, then letter 1 and letter 2 must be in the map
                if (journal.has(value)){
                    if (journal.has(letter) && journal.has(letter2)){
                        alert('Both letters can not exist in the journal already')
                    }
                    else if (journal.has(letter)){
                        if (isNaN(letter2)){
                            journal.set(letter2, (parseInt(value, 10) - parseInt(journal.get(letter1), 10)).toString())
                        }
                        else{
                            alert('letter 2 must be a letter since letter 1 exists in the journal')
                        }
                    }
                    else{
                        if (isNaN(letter1)){
                            journal.set(letter1, (parseInt(value, 10) - parseInt(journal.get(letter2), 10)).toString())
                        }
                    }
                }
            }
            else{
                intValue = parseInt(value, 10);
                if (journal.has(letter)){
                    journal.set(letter2, (intValue - parseInt(journal.get(letter), 10)).toString());
                }
                else if(journal.has(letter2)){
                    journal.set(letter, (intValue - parseInt(journal.get(letter2), 10)).toString());
                }
                else{
                    alert('Neither value exists')
                }
            }
        }
        else if(valueOperation == "+" && !(value2==="")){
            if(journal.has(value) && journal.has(value2)){
                result = parseInt(journal.get(value), 10) + parseInt(journal.get(value2), 10)
                journal.set(letter, result.toString())
            }
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

function hideOp2Elements(){
    if (document.getElementById('operation2').value == '+'){
        document.getElementById('value2Label').style.display = 'block';
    }
    else{
        document.getElementById('value2Label').style.display = 'none';
    }
}