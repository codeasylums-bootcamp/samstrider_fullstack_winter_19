function userDat(event)
{
    console.log("theek hai")
    event.preventDefault();
        axios.get('http://localhost:3005/users',{
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
        .then((response)=>{
          console.log(response);
          document.querySelector('#name').innerHTML = `<strong>Name :</strong> ${response.data.name}`;
          document.querySelector('#phone').innerHTML = `<strong>Phone :</strong> ${response.data.phone}`;
          document.querySelector('#email').innerHTML = `<strong>Email :</strong> ${response.data.email}`;
          document.querySelector('#linkedin').innerHTML = `<strong>LinkedIn :</strong> ${response.data.linkedin}`;
          document.querySelector('#qr-img').setAttribute("src",`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={
            "name" : "${response.data.name}", 
            "phone" : "${response.data.phone}",
            "email" : "${response.data.email}", 
            "linkedin" : "${response.data.linkedin}"
        }`); 
        })
}











