let Add = document.querySelector('.btn-Add');



Add.addEventListener("click", () => {
    let firstdiv = document.querySelector('.comp-Delet');
    let newDiv = document.createElement("div");
    let button1 = document.createElement("button");

    let button2 = document.createElement("button");
    let paragraphe = document.createElement("p");
    let para = document.querySelector('.ent-place');
    button1.innerHTML = "complete";
    button2.innerHTML = "delete";
    paragraphe.innerHTML = para.value;
    newDiv.appendChild(button1);
    newDiv.appendChild(button2);
    newDiv.appendChild(paragraphe);
    firstdiv.appendChild(newDiv);

    button1.addEventListener("click", () => {
        if (button1.innerHTML === "complete") {
            button1.nextElementSibling.nextElementSibling.classList.add("throug");
            button1.innerHTML = "undo";
        }
        else {
            button1.innerHTML = "complete"
            button1.nextElementSibling.nextElementSibling.classList.add("nothroug")
        }



    })


    button2.addEventListener("click", () => {
        button2.parentElement.remove();

    })
})
