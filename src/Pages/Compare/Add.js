function getinputvalue(inputid){
    const inputfeild=document.getElementById(inputid);
             const inputamounttext=inputfeild.value; 
            
             return inputamounttext;
}

//calculation work 
function calculation(month,advance,rate,price,monthpayment){
    const totalelement=document.getElementById(monthpayment);
    const totaltext=totalelement.innerText;
    const previoustotal=parseFloat(totaltext);
 
    const newbal=price-advance;
    const interest=(newbal*(rate* .01))/month;
    const payment =((newbal/month)+interest).toFixed(2);

    const newamount=previoustotal+payment;
    totalelement.innerText=newamount;
    
    const totalelement2=document.getElementById('total-rate');
    totalelement2.innerText=rate;    

    const totalelement3=document.getElementById('total-month');
    totalelement3.innerText=month; 


}

  document.getElementById('calculate-button').addEventListener('click',function(){
    //get input value
    const bankname=getinputvalue('bank');
  
    const month=getinputvalue('months');
   
    const advance=getinputvalue('payment');
    const totalelement=document.getElementById('product-price');
   const productprice=totalelement.innerText;
       
   // const price=parseInt(totaltext);
  console.log(bankname,month,advance,productprice)
  
  //calculation function call 

 

  if (bankname==='DBBL') {
    //if month 3 then
	if(month==3){
      calculation(month,advance,2.5,productprice,'month-payment');
    }
    if(month==6){
        calculation(month,advance,4,productprice,'month-payment');
    }
    if(month==12){
        calculation(month,advance,5.5,productprice,'month-payment');
    }
} else if(bankname==='SCB'){
	// statement
}else{
  // statement
}
  
  
    
   
  
  });