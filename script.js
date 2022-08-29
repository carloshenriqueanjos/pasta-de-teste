const fName = document.getElementById("name");
const bttSave = document.getElementById("bttSave");

let Itens;
let id;

/*
bttSave.onclick = () => {
    if (fName == '') {
        return
    }

    if (id !== undefined) {
        Itens[id].nome = fName.value;
    }
    else {
        Itens.push({'nome': fName.value});
    }

    setItemDB()
    loadItem()
    id = undefined
}
*/

function loadItem() {
    Itens = getItemDB();
    fName.value = '';
}

const getItemDB = () => JSON.parse(localStorage.getItem("TESTEAJAX")) ?? [];
const setItemDB = () => localStorage.setItem("TESTEAJAX", JSON.stringify(Itens));

loadItem();