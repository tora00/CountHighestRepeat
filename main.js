function findGreatest(str){
    //Split sentence into array
    let words = str.split(' ');
    let currentCount = -1;
    let currentWord = -1;
    for(let i = 0; i< words.length; i++){
        let stack = [];
        let letters = words[i].toLowerCase().split("");
        //Iterate through each letter of current word
        for(let j = 0; j<letters.length; j++){
            //Letter not recorded in stack; first occurence
            let index = findIndexByLetter(letters[j],stack);
            if(index===-1){
                //create object with kv pairs of letters and current count
                stack.unshift({'letter' : letters[j], count : 1});
            }
            //letter already recorded, increment count
            else{
                stack[i].count += 1;
            }
        }
        //sort stack list by higest number in descending order
        stack.sort((a,b) => (a.count > b.count)? -1: 1)
        //replace currentCount and currentWord with current word in the list if the highest count in the stack is bigger
        if(stack.length > 0) {
            if (stack[0].count > currentCount && stack[0].count > 1) {
                currentCount = stack[0].count;
                currentWord = words[i];
            }
        }
    }
    return currentWord;
}

function findIndexByLetter(letter, stack){
    for(let i = 0; i<stack.length; i++){
        if(stack[i].letter === letter)
            return i;
    }
    return -1;
}

let str = '';

console.log(findGreatest(str));