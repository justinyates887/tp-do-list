function addItem() {
    let todoItems;
    let todoDate;

    todoItems = (document.createTextNode(document.getElementById("text-box").value));
    todoDate = (document.createTextNode(document.getElementById("date").value));

    let row = document.createElement("div");
    row.classList.add("row");


    let colOne = document.createElement("div");
    colOne.classList.add("col");
    colOne.classList.add("text-center");

    let hOne = document.createElement("h2");
    hOne.classList.add("bg-secondary");


    let colTwo = document.createElement("div");
    colTwo.classList.add("col");
    colTwo.classList.add("text-center");

    let hTwo = document.createElement("h2");
    hTwo.classList.add("bg-secondary");

    hTwo.appendChild(todoDate);
    hOne.appendChild(todoItems);
    colOne.appendChild(hOne);
    colTwo.appendChild(hTwo);
    row.appendChild(colOne);
    row.appendChild(colTwo);
    document.getElementById("container").appendChild(row);
}