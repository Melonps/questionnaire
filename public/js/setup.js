var input_id;

function login_Click() {
    input_id = document.getElementById("login").value;
    debag(input_id);
    if(!input_id) {
        console.log("none");
        return
    }
}