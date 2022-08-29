const btt = document.getElementById("butao");

btt.onclick = () => {
    const xhttp = XMLHttpRequest();
    xhttp.onload = () => {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "texto.txt", true);
    xhttp.send();
}