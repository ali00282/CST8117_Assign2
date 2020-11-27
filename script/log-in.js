function validate() {
    var username = document.getElementsById("username").value;
    var password = document.getElementsById("password").value;
    if(username=="admin" && password == "user")
    {
        alert("Login Succefully")
        return false;
    }
    else
    {
        alert("Login failed")
    }
}
