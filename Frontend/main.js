 
// const pass = document.querySelector("#pass-id");
// const repeatPass = document.querySelector("#repeat-pass-id");
// const signUpBtn = document.querySelector("#sign-up-id");

function signUp(event)
{
    console.log("cnnc");
    event.preventDefault();
        axios.post('http://localhost:3005/register',{
            name:document.querySelector('#namee').value,
            phone:document.querySelector('#phonee').value,
            email:document.querySelector('#emaill').value,
            password:document.querySelector('#pass-id').value,
            linkedin:document.querySelector('#linkedin').value,
            //  profession:document.querySelector('#proff').value,
            
        })
        .then((response)=> {
            localStorage.setItem("token",response.data.token);
            window.location="userData.html";
        })
        .then((response)=>{
          console.log("data entry working fineeee");
        })
    
}

function loginEve(event)
{
    console.log("hbhbhbub")
    console.log(document.querySelector('#defaultForm-email').value);
    event.preventDefault();
    
        axios.post('http://localhost:3005/login',{
            email:document.querySelector('#defaultForm-email').value,
            password:document.querySelector('#defaultForm-pass').value,
        })
        .then((response)=> {
            console.log(response);
            localStorage.setItem("token",response.data.token);
            window.location="userData.html";
        })
}


