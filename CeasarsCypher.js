/*
One of the simplest and most widely known *ciphers* is a *Caesar cipher*, also known as a *shift cipher*. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of 
the letters are shifted by 13 places. Thus `A ↔ N`, `B ↔ O` and so on.

Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and 
returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
but do pass them on.
*/
function rot13(str) {
    let newStr = str.split("")
    .map(elem => 
    {
     // console.log(elem);
      if(elem.match(/[A-Z]/))
      {
        let val = elem.charCodeAt(0);
        let val2 = val + 13;
        if((val2) > 90)
          {
            let val3 = (val+13) - 90 + 65 - 1;
            val2 = val3;
          }
        //console.log(val);
        //console.log("val", String.fromCharCode(val));
        return String.fromCharCode(val2);
      }
      else
        return elem;
    });
    // console.log(newStr);
    return newStr.join("");
  }