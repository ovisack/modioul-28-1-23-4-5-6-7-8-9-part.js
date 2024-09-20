document.getElementById('shadow-add-maney-form')
.addEventListener('click', function(){
    console.log('shado add money button clicked');
    showSectionById('add-money-form')
})

document.getElementById('bnt-cash-out').addEventListener('click', function(){
    showSectionById('cash-out-form');

})
document.getElementById('shadow-transaction-history')
.addEventListener('click', function(){
    showSectionById('Tractions -form'); 

})