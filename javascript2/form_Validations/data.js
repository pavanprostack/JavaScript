
function form_Validate() {
    let name = document.getElementById('ename').value;
    //alert(name)
    if (name == "") {
        document.getElementById('ename_Message').innerHTML = "Please Enter User Name"
        //alert("Pls Enter Name")
    }

    let email = document.getElementById('eemail').value;
    if (email == "") {
        document.getElementById('eemail_Message').innerHTML = "Pleae Enter Email Id"
    }

    let password = document.getElementById('password').value
    if (password == "") {
        document.getElementById('passwordmessage').innerHTML="Please Enter Password"
    }


    return false
}