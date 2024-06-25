
function focuscursor()
{
    document.getElementById('n1').focus();
}

function clearAllFields()
{
    document.getElementById('n1').value ="";
    document.getElementById('n2').value ="";
    document.getElementById('op').value ="select";
    document.getElementById('res').value ="";
    document.getElementById('n1').focus();

}

    

function Calculate()
{

    CheckEmptyFields();

    const fno =document.getElementById('n1').value;
      const   sno =document.getElementById('n2').value;
       const  opt= document.getElementById('op').value;


    switch(opt)
    {
            case '+':
            var result=parseInt(fno) + parseInt(sno);
            document.getElementById('res').value =result;
            break;

            case '-':
               var result=parseInt(fno) - parseInt(sno) ;
               document.getElementById('res').value =result;
            break; 
            
            case '*':
                var result=parseInt(fno) * parseInt(sno);
                document.getElementById('res').value =result;
            break;
             
            case '/':
                var result =parseInt(fno) / parseInt(sno);
                document.getElementById('res').value =result;
            break;    
    }
}

function CheckEmptyFields()
{
    if(document.getElementById('n1').value =="")
    {
        alert('Please Enter First Number')
        document.getElementById('n1').focus();
    }
    else if(document.getElementById('n2').value=="")
    {
        alert("Please Enter seceond Number")
        document.getElementById('n2').focus();
    }
    else if(document.getElementById('op').value=="select")
    {
        alert("Plese Select An Option");
        document.getElementById('op').focus();
    }
}



console.log("hii");


function btn_Disabled_onload()
{
    const opr= document.getElementById('cal');
      opr.disabled =  true;
    
}



// function foc()
// {
//     document.getElementById('n2').focus();
// }


function isNumber(e)
{
    var ch=String.fromCharCode(e.which)
    {
        if(!(/[0-9]/.test(ch)))
        {
            e.preventDefault();
        }
    }
}
