const register_form = document.getElementById("register_form");

register_form.addEventListener("submit", (e) => {
    const fullname = document.getElementById("fullname");
    const dob = document.getElementById("dob");
    const email = document.getElementById("email");    
    const gender = document.getElementById("gender");
    const terms = document.getElementById("terms");
    let dateValue = new Date(dob.value);

    e.preventDefault();
    if (fullname.value.trim() == "") {
        alert("Full name must not be empty");
    }

    else if (dob.value == ""){
        alert("Date of birth must be filled")
    }
    else if (dob.value == "" || dateValue.getFullYear() >= 2010) {
        alert("Date of birth must be before 2010");
    }

    else if (email.value.trim() == "") {
        alert("Email must not be empty");
    } 
    
    else if (!email.value.includes("@") || !email.value.endsWith(".com")) {
        alert("Email format is invalid");
    } 

    else if (gender.value === "") {
        alert("You must select a gender");
    }

    else if (!terms.checked) {
        alert("You must agree to the terms and conditions");
    }
    else {
        register_form.submit();
    }
});

