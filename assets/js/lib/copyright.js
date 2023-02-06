document.body.onload = setCopy;
function setCopy() {
    document.getElementById("copyright").innerHTML =
    "Copyright &copy; Watership Down Enterprises " +
    new Date().getFullYear();
}