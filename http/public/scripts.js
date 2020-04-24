const ul = document.querySelector("ul")
const input = document.querySelector("input")
const form = document.querySelector("form")

async function load(){
    const res = await fetch("http://127.0.0.1:3000/").then((data)=>data.json())
    res.urls.map(({ name, url }) => addElement({ name, url }))
}

load()

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

    const [name, url] = value.split(" - ")
    if(!url){
        return alert(`Coloque o texto exatamente como está no exemplo, respeitando os espaços e traços!! \n Exemplo: < url name - https://www.exemplo.com.br >`)
    }
    if(!/^https/.test(url)){
        return alert('Digite a URL da maneira correta!!')
    }

    addElement({ name, url })
    input.value = ""
})