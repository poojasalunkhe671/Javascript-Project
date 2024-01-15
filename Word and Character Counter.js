let textbox=document.getElementById("text");
textbox.addEventListener('input',function(){
    let text=this.value
    //console.log(text)
let char=text.length;
   // console.log(char)
     document.getElementById("char").innerHTML=char;
     text=text.trim();
     let words=text.split(" ");
    let remove=words.filter(function(el){
        return el !="";
    })
     console.log(remove)
     //console.log(words)
    document.getElementById("word").innerHTML=remove.length

 })
