function validate() {
    var pass = document.getElementById("password");
    var confPass = document.getElementById("Confirm_Password");
    if (pass.value==confPass.value) {
        if (pass.value != "" && confPass.value != "" && pass.value != " " && confPass.value != " "){
            return true;
        } else{
        alert("YOUR PASSWORD CAN'T BE BLANK!")
        return false;
        }
    }
    alert("BOTH PASSWORDS MUST BE SAME!")
    return false;
}