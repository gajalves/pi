let cadastarDespesa = document.getElementById("cadastrar-despesa")

cadastarDespesa.addEventListener("click", () => {
    let request = new XMLHttpRequest();
    console.log(cadastarDespesa);
    request.open("GET", "http://localhost:3000/despesas");
    request.send();
    
    request.addEventListener("load", () => {
        console.log(request.responseText);
    })
})