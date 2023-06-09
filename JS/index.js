
var yes=true
var value=[1,0,1,0,1,0,0,1,0]

document.querySelector('table').addEventListener('click',function(e){
    var index=e.target.id;


if(value[index]==0 || value[index]==1)
{
   e.target.innerHTML=getVal()
   value[index]=getVal()
   yes=!yes
}

else
{
    alert("NA");
}

console.log(value);

getWinner();




})

function getVal()
{
    return (yes)? "X":"O";
}


function getWinner()
{
    if((value[0]==value[1] && value[1]==value[2]) || (value[3]==value[4] && value[4]==value[5]) || (value[6]==value[7] && value[7]==value[8]))
    {
    
        alert("Row Winner")
    
    }
    

    if((value[0]==value[3] && value[3]==value[6]) || (value[1]==value[4] && value[4]==value[7]) || (value[2]==value[5] && value[5]==value[8]))
    {
    
        alert("Column Winner")
    
    }


    if((value[0]==value[4] && value[4]==value[8]) || (value[2]==value[4] && value[4]==value[6]))
    {
    
        alert("Diagonal Winner")
    
    }

}


var player1=document.querySelector('#user1').value;
var player2=document.querySelector('#user2').value;
document.querySelector('#sub').addEventListener('click',function(){

if(player1==''|| player2=='')
{
    alert("invalid")
}
else 
{
    alert("valid")
}



})





































