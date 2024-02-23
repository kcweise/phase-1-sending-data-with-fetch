// Add your code here
//const nameEmailObj = {name:string1, email:string2}

const { create } = require("json-server");

function submitData(name1,email1){
    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name: name1, email: email1}),
    })
    .then(res => {
        if(res.ok){
            return res.json()
        }
        else {
            alert("POST not successful")
        }

        })
    .then(data => renderInfo(data))
    .catch(err => {
        const para = document.querySelector("p");
        const errMsg = document.createTextNode(err);
        para.appendChild(errMsg);
    });
    

}

function renderInfo(data){
    // set the body to a variable
    //const body = document.body
    const dataStr = JSON.stringify(data);
    const create = document.createElement("p");
    const text = document.createTextNode(dataStr)
    //append the element to body
    create.appendChild(text);
    //body.append(create).textContent(data);
    document.body.appendChild(create);



}