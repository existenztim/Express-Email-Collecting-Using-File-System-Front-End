const formContainer = document.getElementById("emailForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userSubmit = document.getElementById("userSubmit");
const checkForm = document.getElementById("checkForm");

// fetch("http://localhost:3000/users/form")
// .then(response => response.text()) //text instead of json since we want to get html elements
// .then(data => {
//     formContainer.innerHTML = data;
// })

userSubmit.addEventListener("click", () => {
    let user = {
        userName: userName.value, 
        userEmail: userEmail.value
    }
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (user.userName.length >= 1 && emailRegex.test(user.userEmail)){
        fetch("http://localhost:3000/users/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        checkForm.innerText = "User has been added!"
    } else {
        checkForm.innerText = "Some input fields are either not filled in or is in the wrong format."
    }
})



// const sendForm = () => {
//     fetch("http://localhost:3000/users/form", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user)
// })
// }