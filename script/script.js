
document.getElementById("form").addEventListener("submit",
function(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    if(name === "" || email === "" || number === ""){
        name.innerText = "pelskmnajs";
        alert("please 🥃 the abv field")
    }
    else{   
    alert("Name : " +name + "\nEmail : " + email +"\nNumber : " +number);
    }
})


