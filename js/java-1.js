document.getElementById('log-in').addEventListener('click', function(e){
    e.preventDefault();
   const inputAdd=document.getElementById('input-addmany').value;
   const addNumber=parseFloat(inputAdd);
  
   const inputPin =document.getElementById('input-pin').value;
   if(inputPin==="1234"){
    const totalMany = document.getElementById('total-many').innerText;
    const totalManyNumber =parseFloat(totalMany);
   const newBalance=totalManyNumber+addNumber;
   document.getElementById('total-many').innerText=newBalance;
   }
   else{
    alert('worng')
   }
   
})