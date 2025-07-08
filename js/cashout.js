document.getElementById('caash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashoutInputNumbers=libareCashout('input-cash-out');
    const cashoutInputPinNumber=libareCashout('input-pin-cashout');
    
    if(cashoutInputPinNumber===1234){
       const cashoutDibFildNumber = libareCashoutInnertext('total-many');
       const newBalance = cashoutDibFildNumber-cashoutInputNumbers;
       document.getElementById('total-many').innerText=newBalance;
       const p =document.createElement('p');
       p.innerText=
       `আমি রনি অনলাইন জুয়া খেলে সব টাকা শেষ করে ফেলেছি`
    document.getElementById('contioner').appendChild(p);
    }else{
        alert('Wring')
    }
})