//function for Getinput value into :Form(modals of EMI button)

function getinputvalue(inputid){
  const inputfeild=document.getElementById(inputid);
           const inputamounttext=inputfeild.value; 
          
           return inputamounttext;
}






//function for EMI calculation : 
function calculation(month,advance,rate,price){
  const totalelement=document.getElementById('month-payment');
 

  //emi calculation :

  //after advance payment (totalproduct balance-advance)
   const newbal=price-advance;

  //emi calculation method:

  const r = parseFloat(rate)/12/100;
  const P = newbal;
  const n = month;

  const EMI = (P*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
  const totalInterest =(EMI * n) - P;
  const totalPayment  = (totalInterest + parseFloat(P)).toFixed(2);

  //emi monthly set 
  
  totalelement.innerText=totalPayment;
  //rate set
  const totalelement2=document.getElementById('total-rate');
  totalelement2.innerText=rate;    
  //total month set
  const totalelement3=document.getElementById('total-month');
  totalelement3.innerText=month; 


}
// const btn = document.getElementById('calculate-button');
// console.log(btn);

// btn?.addEventListener('click', () => {
// console.log('btn clicked');
// });
document.getElementById('calculate-button').addEventListener('click',function(){

  //get input value
  const bankname=getinputvalue('bank');

  const month=getinputvalue('months');
 
  const advance=getinputvalue('payment');
  const totalelement=document.getElementById('product-price');
 const productprice=totalelement.innerText;
     
console.log(bankname,month,advance,productprice)

//calculation function call 



if (bankname==='DBBL') {
  //if month 3,6,12 then
if(month==3){
    calculation(month,advance,2.5,productprice);
  }
  if(month==6){
      calculation(month,advance,4,productprice);
  }
  if(month==12){
      calculation(month,advance,5.5,productprice);
  }
} 

if(bankname==='SCB'){
  if(month==3){
    calculation(month,advance,4,productprice);
  }
  if(month==6){
      calculation(month,advance,5,productprice);
  }
  if(month==12){
      calculation(month,advance,6,productprice);
  }
}if(bankname==='EBL'){
  if(month==3){
    calculation(month,advance,3,productprice);
  }
  if(month==6){
      calculation(month,advance,4,productprice);
  }
  if(month==12){
      calculation(month,advance,5,productprice);
  }
}


  
 

});

  