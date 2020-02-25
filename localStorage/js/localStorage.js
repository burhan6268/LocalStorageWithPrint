// localStorage.js
/* Later we will be using Classes and loading student data from external data file */
function saveData()
{
    for(let x=1;x<=2;x++)
    {
        //setItem(key,value)
        localStorage.setItem(`sname${x}`,document.getElementById(`sname${x}`).value);
        localStorage.setItem(`sid${x}`,document.getElementById(`sid${x}`).value);
        localStorage.setItem(`tuition${x}`,document.getElementById(`tuition${x}`).value);
        localStorage.setItem(`fees${x}`,document.getElementById(`fees${x}`).value);
        localStorage.setItem(`scholarship${x}`,document.getElementById(`scholarship${x}`).value);
        document.getElementById("select").innerHTML+=`<option>${document.getElementById(`sid${x}`).value}</option>`;
    }//End of For
    alert("Data Saved");
}//End of Function

function makeReport()
{
    current=document.getElementById("select").value;
    for(let key in localStorage)
    {
        if(localStorage.getItem(key) == current)
        {
            let lastChar = key.substr(key.length-1);
            document.getElementById("outid").value=localStorage.getItem(`sid${lastChar}`);
            document.getElementById("outname").value=localStorage.getItem(`sname${lastChar}`);
            let amount=parseFloat(localStorage.getItem(`tuition${lastChar}`));
            document.getElementById("outamount").value=((amount)*1.13).toFixed(2);
        }//end of IF
    }//end of For
}//end of function

function printData()
{
    window.print();
}