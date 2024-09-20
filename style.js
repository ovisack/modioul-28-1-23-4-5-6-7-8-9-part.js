document.getElementById('btn-add-money').addEventListener('click',function(event){


    event.preventDefault();
    const addMoney=document.getElementById('input-add-money').value;
    const addMoneyNumber= parseFloat(addMoney);
    const addPin=document.getElementById('input-add-pin').value;

    console.log(addMoney,addPin);


//   condison if ells

if(addPin === '1234'){
    const account=document.getElementById('accounts-balance').innerText;
  
  
    const balanceNumber= parseFloat(account) ;
    
    const newBalance=  balanceNumber+addMoneyNumber;
    document.getElementById('accounts-balance').innerText =newBalance;
 
}
else{
console.log('your pin wong! enter the  chared  pin');
}

})