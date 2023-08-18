// step 1: add eventlistener
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step 2:get the deposit amount from the deposit input field;
  // for input field use.value to the value input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //get the total deposit amount;
  // for non-input (element other thann input, textarea) use innerText to get the text;
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step 4: add number ti set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  // step 5: get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceString);

  // step 6: ca;culate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // clear the deposit field
  depositField.value = "";
});
