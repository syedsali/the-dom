// function to display the error message

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// function to validate the forms

function validateForm() {
    //get all the elements from form
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var phone = document.contactForm.phone.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName('hobbies[]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }
    // define error variables with a default value
    var nameErr = emailErr = mobileErr = genderErr = countryErr = false;

    //validate name 
    if (name == "") {
        printError("nameErr", "Please Enter Your Name")
    } else {
        var regex = /^[a-z A-z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please Enter Your Name");
        } else {
            printError("nameErr", " ")
            nameErr = false;
        }
    }
    //validate email
    if (email == "") {
        printError("emailErr", "Please Enter Your Email")
    } else {
        var regex = /^\S+@\S+\.\S+$/
        if (regex.test(email) === false) {
            printError("emailErr", "Please Enter Your Email");
        } else {
            printError("emailErr", " ")
            emailErr = false;
        }
    }
    //validate mobile
    if (mobile == "") {
        printError("mobileErr", "Please Enter Your Mobile number")
    } else {
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please Enter 10 digit#");
        } else {
            printError("mobileErr", " ")
            mobieErr = false;
        }
    }

    // validate country
    if (country == "select"){
        printError("countryErr", "Please select your country");
        } else{
            printError("countryErr", "");
            countryErr= false;
        }

    // validate gender
    if (gender == false){
        printError("genderErr", "Please select your gender");
    }else {
        printError("genderErr", "");
        genderErr= false;
    }

    if ((nameErr || emailErr || mobieErr || countryErr || genderErr) == true){
        return false;
    }else {
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "/n" +
                          "Mobile Number: " + mobile + "/n" +
                          "Country:"    + country + "/n"+
                          "Gender:"  + gender + "/n";
        if(hobbies.length){
            dataPreview +="Hobbies:" + hobbies.join(", ");

        }
        
        alert(dataPreview);

    }

};


