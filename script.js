document.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();

    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    if(username === "" || password === ""){
        alert("Please fill all fields");
    }
    else{
        alert("Login Successful!");
    }

});
