const btt = document.getElementById("butao");

btt.onclick = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        document.getElementById("demo").innerHTML = xhttp.responseText;
    }
    xhttp.open("GET", "texto.txt", true);
    xhttp.send();
}