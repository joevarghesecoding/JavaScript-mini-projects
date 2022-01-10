function getSymbol(power)
{ 
  switch(power) {
      case 1 : return 'I';
      case 5 : return'V';
      case 10 : return'X';
      case 50 : return'L';
      case 100 : return'C';
      case 500 : return'D';
      case 1000 : return 'M';
    }
}

function getRoman(val, power) {

    //let result = "";
    if(val >= 1 && val <= 3)
    {
      for(let i = 0; i < val; i++)
      {
        result += getSymbol(power);
      }
    }
    //console.log("val =", val);
    if(val >= 4 && val <= 8)
    {
      let tempVal = val - 5;
      if(tempVal === -1)
      {
        result += getSymbol(power);
        result += getSymbol(power*5);
      }
      else
      {
        result += getSymbol(power*5);
        for(let i = 0; i < tempVal; i++)
        {
           result += getSymbol(power);
        }
      }
    }
    if(val >= 9 && val <= 10)
    {
      let tempVal = val - 10;
      if(tempVal === -1)
      {
        result += getSymbol(power);
        result += getSymbol(power * 10);
      }
      else
      {
        result += getSymbol(power) * 10;
      }
    }
    
    //console.log(result);
 return result;
}

function convertToRoman(num) {
 
 let stringVal = num.toString().split("");
 //console.log(stringVal.length);
 let result = "";
 
 for(let i = stringVal.length - 1, j = 0; i >= 0; i--, j++)
 {
   let powerVal = 10 ** i;
   let val = stringVal[j];
   //console.log("val", val, "power", powerVal);
   

   result = result.concat(getRoman(val, powerVal));

 }
  console.log("FINAL RESULT:",result);
  //result = result.join('');

  return result;
}