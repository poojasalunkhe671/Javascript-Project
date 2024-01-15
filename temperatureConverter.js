let cel=document.getElementById("cel");
let fah=document.getElementById("fah");

cel.addEventListener( 'input', function(){
    let c=this.value;//we will get  celsius value
   let f= (c * 9/5) + 32 //cel-fah
   if(!Number.isInteger(f)){
f=f.toFixed(4)
   }
   fah.value=f;

})
fah.addEventListener( 'input', function(){
    let f=this.value;//we will get value    
   let c =(f - 32)*5/9 //fah-cel
   if(!Number.isInteger(c)){
    c=c.toFixed(4)}
   cel.value=c;


})
