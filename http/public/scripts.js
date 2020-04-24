const ul = document.querySelector("ul")
const input = document.querySelector("input")
const form = document.querySelector("form")

function addElement({ name, url }){
    const li = document.createElement("li")
    const a = document.createElement("a")
    const trash = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash)

    li.append(a)
    li.append(trash)
    ul.append(li)
}

function removeElement(el){
    if(confirm('Tem certeza que deseja deletar?')){
        el.parentNode.remove()
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let { value } = input
    if(!value){
        return alert('Preencha os campos!!')
    }

    const [name, url] = value.split(", ")
    if(!url){
        return alert('Formate o texto da maneira correta!!')
    }
    if(!/^http/ .test(url)){
        return alert('Digite a URL da maneira correta!!')
    }

    addElement({ name, url })
    input.value = ""
})