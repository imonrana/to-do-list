// to do list js

let inputField = document.querySelector(".input_field");
let inputBtn = document.querySelector(".input_btn");
let ul = document.querySelector("ul");
let listItems = document.querySelector(".list_item");
let listBody = document.querySelector(".list_body");
// display list in event click 

const listItem = ()=>{
    let inputValue = inputField.value.trim();
    if(inputValue == "" || inputValue == null){
        alert("please write somethings");
        return false;
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = inputValue;
        ul.appendChild(list);
        let button = document.createElement("button");
        button.innerHTML = "&#10060";
        list.appendChild(button);
        button.classList.add("remove_li");
        inputField.value = '';

        if(ul.childElementCount == "2"){
            let deleteAllBtn = document.createElement("button");
            listBody.appendChild(deleteAllBtn);
            deleteAllBtn.innerHTML = "Remove all task";
            deleteAllBtn.classList.add("delete_all_btn");
            }

    }
}


//  remove list in target
ul.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        alert("do you want to remove task please click x button");
    }
    else if(e.target.tagName == "BUTTON"){
        e.target.parentElement.remove();
        if(ul.childElementCount < "2"){
            let deletAllBtn = document.querySelector(".delete_all_btn");
            deletAllBtn.remove();
        } 
    }
})

// remove All list 



listBody.addEventListener("click", function(evt){
if( evt.target.className == "delete_all_btn"){
    let removeList = document.querySelectorAll("li");
   let  removeListArr = Array.from(removeList);
    removeListArr.map((item) =>{
        item.remove();
        if(ul.childElementCount < "2"){
            let deletAllBtn = document.querySelector(".delete_all_btn");
            deletAllBtn.remove();
        }
    })
}
}) 





