/*
Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument 
(`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you 
cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal 
to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest
 to lowest order, as the value of the `change` key.
*/

function checkCashRegister(price, cash, cid) {
    //console.log("*************************************")
    let change = [];
    let changeAmount = (cash - price) * 100;
    let status;
    let currency = [
      ["PENNY", 1],
      ["NICKEL", 5],
      ["DIME", 10],
      ["QUARTER", 25],
      ["ONE", 100],
      ["FIVE", 500],
      ["TEN", 1000],
      ["TWENTY", 2000],
      ["ONE HUNDRED", 10000]
    ];
  
    let totalCidAmount = cid.filter(elem => elem[1] > 0).reduce((sum, elem) => sum += elem[1], 0);
    totalCidAmount *= 100;
    //console.log("totalCidAmount", totalCidAmount);
  
    let cidMultiplied = cid.map(elem => {return [elem[0], Math.round(elem[1] * 100)]});
    //console.log("cidMultiplied" , cidMultiplied);
  
    for(let i = cidMultiplied.length - 1; i >= 0; --i)
    {
      //console.log(i, "----------")
      //console.log("changeAmount", changeAmount);
      //if the value inside is not 0
      if(cidMultiplied[i][1] > 0)
      {
        //if the value is evenly divisible
        if(changeAmount / currency[i][1] > 1)
        {
          //console.log(cidMultiplied[i][0], "\n");
          let tempCid = cidMultiplied[i][1];
          let tempCurrency = (changeAmount / currency[i][1]) * currency[i][1];
          //console.log("tempCid", tempCid);
          //console.log("tempCurrency", tempCurrency);
          
          //if
          if(tempCurrency > tempCid)
          {
            //let tempCurrentBalance = changeAmount - tempCid;
            //console.log("tempCurrentBalance1", tempCurrentBalance);
            changeAmount -= tempCid;
            change.push([cidMultiplied[i][0], tempCid / 100]);
          }
          else
          {
            let tempCurrentBalance = Math.floor(changeAmount / currency[i][1]) * currency[i][1];
            //console.log("tempCurrentBalance2", tempCurrentBalance);
            changeAmount -= tempCurrentBalance;
            totalCidAmount -= tempCurrentBalance;
            //console.log("changeAmountINSIDE", changeAmount);
            change.push([cidMultiplied[i][0], tempCurrentBalance / 100]);
          }
        }
      }
      else if(cidMultiplied[i][1] <= 0)
      {
        change.push([cidMultiplied[i][0], cidMultiplied[i][1]]);
        //should clear it if there is insufficient funds
      }
    }
    //console.log("changeAmount", changeAmount);
    //console.log("change", change);
    //console.log("totalCidAmount", totalCidAmount);
    //console.log("===============================================");
  
    if(totalCidAmount < changeAmount)
    {
      status = "INSUFFICIENT_FUNDS";
      change = [];
    }
    else if(totalCidAmount === 0)
    {
      status = "CLOSED";
      //reverse change
      change.reverse();
    }
    else if(totalCidAmount > 0)
    {
      status = "OPEN";
      if(changeAmount > 0)
      {
        status = "INSUFFICIENT_FUNDS";
        change = [];
      }
    }
  
    let result = {status, change};
    //console.log("*************************************")
    console.log(result);
    return result;
  }
  

  /* ******** TEST CASES **********************
  // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  // checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  // checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  */