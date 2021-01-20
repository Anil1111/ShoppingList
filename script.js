function buy (name) {
    elem = document.createElement ("div");
    elem.className = "item"

    const li = document.createElement("li");
    li.textContent = name;

    const buttom = document.createElement("button")
    buttom.textContent = "Delete"
    buttom.setAttribute("delete_buy", "");

    elem.appendChild (li)
    elem.appendChild (buttom)
    return elem
}

function addDiv (event){
    event.preventDefault();
    divAdd = event.target.parentNode
    contentText = divAdd
    text = divAdd.children[1].value
    if (text.length != 0){
        item = buy(text)
        divAdd.children[1].value = ""
        divAdd.parentNode.querySelector('#all-itens').appendChild(item)
        const itens = document.querySelectorAll('[delete_buy]')
        console.log(itens)
        itens.forEach(item => item.onclick = deleteDiv)
    }
}

function deleteDiv (event) {
    event.preventDefault()
    event.target.parentNode.remove()
}

function main () {
    const addItemButtom = document.querySelector("[add_buy]")
    addItemButtom.onclick = addDiv 
}

main()









/* <div id="item">
    <li>Milk</li>
    <button>Delete</button>
</div> */