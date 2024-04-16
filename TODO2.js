let btn=document.querySelector("button")
let inp=document.querySelector("input")
let ul=document.querySelector("ul")



    btn.addEventListener("click",func)


function func(){
    let li=document.createElement("li")
    ul.append(li)
    
    let btn1=document.createElement("button")
    btn1.innerText="Delete"
    btn1.classList.add("delete")

    li.innerText=inp.value.toUpperCase()

    inp.value=""

    li.appendChild(btn1)

    
    
}

    ul.addEventListener("click",func1)



function func1(event){

    if(event.target.nodeName=="BUTTON"){
        let item=event.target.parentElement
        item.remove()
    }
}

inp.addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        func()
    }
})


