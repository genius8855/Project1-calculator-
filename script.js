let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            if(string[string.length-1]!='1' && 
               string[string.length-1]!='2' &&
               string[string.length-1]!='3' &&
               string[string.length-1]!='4' &&
               string[string.length-1]!='5' &&
               string[string.length-1]!='6' &&
               string[string.length-1]!='7' &&
               string[string.length-1]!='8' &&
               string[string.length-1]!='9' &&
               string[string.length-1]!='0'){
               string="INVALID"
               document.querySelector('input').value=string;
            }
            else{
                string = eval(string);
                document.querySelector('input').value=string;
            }
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})