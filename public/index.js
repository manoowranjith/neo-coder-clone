var x=true;
var y=true;
function click1()
{
    var element = document.getElementById("secret-services-1");
//    element.classList.toggle("secret-services-1-1");
    if(x==true)
    {
        element.style.display="block";
        x=false;
    }

    else if(x==false)
    {
        element.style.display="none";
        x=true;
    }
}
function click2()
{
    var element = document.getElementById("secret-services-2");
//    element.classList.toggle("secret-services-1-1");
    if(y==true)
    {
        element.style.display="block";
        y=false;
    }

    else if(y==false)
    {
        element.style.display="none";
        y=true;
    }
}