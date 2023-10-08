let input = document.querySelector("input");
let addBtn = document.querySelector("#addBtn");
let listItems = document.querySelector(".item").cloneNode(true);
let itemContainer = document.querySelector("#itemContainer");

listItems.style.opacity = "0";

function addItem(){
    let newItem = document.querySelector(".item").cloneNode(true);

    if(input.value.trim() == ""){
        return false;
    } else{
        newItem.querySelector("li").textContent = input.value
    }


    let deleteBtn = newItem.querySelector("#delBtn");

    deleteBtn.addEventListener('click', function(){
        newItem.remove();
    })

    itemContainer.append(newItem);
    console.log(input.value);
}

addBtn.addEventListener('click', addItem);