const bar=document.getElementById('bar');
 const nav=document.getElementById('navbar');
 const close=document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
         nav.classList.add('active');
     })
 }
 if(close){
    close.addEventListener('click',()=>{
         nav.classList.remove('active');
     })
 }



 /*---------------contact.html--------javascript-----------------*/


    document.addEventListener(
                            'DOMContentLoaded',
                            () => { document.getElementById('submitButton'). 
                                addEventListener('click', function(){ alert('Form Submitted');});
                            } 
    )


  /*---------------account.html ------------javascript-----------------*/
  document.addEventListener(
    'DOMContentLoaded',
    () => { document.getElementById('signinbutton'). 
        addEventListener('click', function(){ alert('YOU ARE LOGGED IN');});
    } 
)


  /*---------------account2.html --------------javascript-----------------*/
  document.addEventListener(
    'DOMContentLoaded',
    () => { document.getElementById('createbutton'). 
        addEventListener('click', function(){ alert('YOUR ACCOUNT IS CREATED');});
    } 
)
