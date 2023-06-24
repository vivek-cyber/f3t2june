var signupbutton =document.getElementById("signup")
var name1=document.getElementById("name")
var email=document.getElementById("email")
var pass=document.getElementById("pass")
var cpass=document.getElementById("cpass")
var message=document.getElementById("message")
var mainprofile=document.getElementById("mainprofile")
var signuppart=document.getElementById("signuppart")
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var bt1=document.getElementById("bt1")
var bt2=document.getElementById("bt2")

signupbutton.addEventListener("click",verififunction)

function verififunction(event)
{
    if(name1.value!="")
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
        {
            if(pass.value===cpass.value&&pass.value!="")
            {
                message.innerText=""
                message.innerText="Successfully Signed Up!"
                message.style.color="green"
                
                adddata()
                setTimeout(displayprofile,1000)
            }
            else
            {
                message.innerText=""
                message.innerText="Error please check all the input fileds correctly"
                message.style.color="red"
            }
        }
        else
        {
            message.innerText=""
            message.innerText="Error please check all the input fileds correctly"
            message.style.color="red"
        }
    }
    else
    {
        message.innerText=""
        message.innerText="Error please check all the input fileds correctly"
        message.style.color="red"
    }
}

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
var div1
var div2
var div3
var logoffbtn
var access_token
function adddata()
{
    
    localStorage.setItem("name",name1.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",pass.value)
    access_token=generateString(16)
    localStorage.setItem("access_token",access_token)
    
    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("email"))
    console.log(localStorage.getItem("password"))
    console.log(localStorage.getItem("access_token"))

    div1=document.createElement("div")
    div1.innerText="Full Name: "+localStorage.getItem("name")
    mainprofile.appendChild(div1)

   div2=document.createElement("div")
    div2.innerText="Email: "+localStorage.getItem("email")
    mainprofile.appendChild(div2)


    div3=document.createElement("div")
    div3.innerText="Password: "+localStorage.getItem("password")
    mainprofile.appendChild(div3)

    logoffbtn=document.createElement("button")
    logoffbtn.innerText="Logoff"
    logoffbtn.id="signup"
    mainprofile.appendChild(logoffbtn)


    logoffbtn.addEventListener("click",removefunc)
}

function removefunc()
{
    mainprofile.removeChild(div1)
    mainprofile.removeChild(div2)
    mainprofile.removeChild(div3)
    mainprofile.removeChild(logoffbtn)
    localStorage.clear()


    mainprofile.style.display="none"
    signuppart.style.display="block"
    message.innerText=""
}

function displayprofile()
{
    name1.value=""
    email.value=""
    pass.value=""
    cpass.value=""
signuppart.style.display="none"
mainprofile.style.display="block"
}



bt1.addEventListener("click",signupredirectfun)
function signupredirectfun()
{
    mainprofile.style.display="none"
    signuppart.style.display="block"
    if(localStorage.getItem("access_token"))
    {
       setTimeout(displayprofile,1000)
    }
}


bt2.addEventListener("click",profiledirectfun)
function profiledirectfun()
{
    signuppart.style.display="none"
    mainprofile.style.display="block"
if(!localStorage.getItem("access_token"))
    {
        setTimeout(()=>{
            mainprofile.style.display="none"
        signuppart.style.display="block"
        },1000)
        
    }


}