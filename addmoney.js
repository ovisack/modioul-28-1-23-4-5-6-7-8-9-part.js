document.getElementById('bnt-cash-out')
.addEventListener('click',function(event){
    event.preventDefault();

const addMoney=getElementById('input-cash-out-number-pin');
 const pinNumber= getElementById('input-cash-money');
//console.log('inside the click ', cashOut,addMoney);


if(pinNumber === 1234){

    const balance= getTextFieldValueById('accounts-balance');

const  newBalance = balance+ addMoney ;
document.getElementById('accounts-balance').innerText = newBalance;


//add transaction to history
const div = document.createEvent('div');
div.class

   
    //console.log('mama haha no', balance);

}
else{
    alert('haha mama your ..... DGM.')
}


})