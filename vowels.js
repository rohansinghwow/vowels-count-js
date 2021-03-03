function vowelsCounter(strInput){
    let counter = 0;
    vowels ="aeiou";
    for(let i=0;i<=strInput.length;i++){
      if(vowels.includes(strInput[i])){
        counter ++;
      }
    }
    return counter;
  }
  console.log(vowelsCounter("rohan singh"))