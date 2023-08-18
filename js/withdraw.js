// add event handler withdraw button
// get the withdraw amount from the withdraw field;
// also make sure to convert the input into a number by using parseFloat;
// get previous withdraw amount;
// calculate total withdraw amount; 
// set total withdraw amount;
// get the previous balance;
// calculate  new balance total 
// set the new balance total;

// clear the input field

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);
    if(isNaN(newWithdrawAmount)){
        alert('Please provide your valid info')
        return;
    }

    // step 3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    // step 5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7;
    withdrawField.value = '';

    if(newWithdrawAmount > previousBalanceTotal){
        alert('INSUFFICIENT BALANCE');
        return;
    }

    // step 4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    
    // step 6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})