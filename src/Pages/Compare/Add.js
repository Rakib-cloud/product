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
const handleClick2 = () =>{
  
  //get input value
  const bankname=getinputvalue('bank');

  const month=getinputvalue('months');
 
  const advance=getinputvalue('payment');
  const totalelement=document.getElementById('product-price');
 const productprice=totalelement.innerText;
     
console.log(bankname,month,advance,productprice)

//calculation function call 

const dbbl3=document.getElementById('dbbl3rate').innerText;
const dbbl6=document.getElementById('dbbl6rate').innerText;
const dbbl12=document.getElementById('dbbl12rate').innerText;


const scb3=document.getElementById('scb3rate').innerText;
const scb6=document.getElementById('scb6rate').innerText;
const scb12=document.getElementById('scb12rate').innerText;


const ebl3=document.getElementById('ebl3rate').innerText;
const ebl6=document.getElementById('ebl6rate').innerText;
const ebl12=document.getElementById('ebl12rate').innerText;

if (bankname==='DBBL') {
  //if month 3,6,12 then
if(month==3){
    calculation(month,advance,dbbl3,productprice);
  }
  if(month==6){
      calculation(month,advance,dbbl6,productprice);
  }
  if(month==12){
      calculation(month,advance,dbbl12,productprice);
  }
} 

if(bankname==='SCB'){
  if(month==3){
    calculation(month,advance,scb3,productprice);
  }
  if(month==6){
      calculation(month,advance,scb6,productprice);
  }
  if(month==12){
      calculation(month,advance,scb12,productprice);
  }
}if(bankname==='EBL'){
  if(month==3){
    calculation(month,advance,ebl3,productprice);
  }
  if(month==6){
      calculation(month,advance,ebl6,productprice);
  }
  if(month==12){
      calculation(month,advance,ebl12,productprice);
  }
}


  
 

}

  