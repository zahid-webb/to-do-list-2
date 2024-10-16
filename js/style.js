// dom start ==================
let input             = document.querySelector('.main_input')
let button            = document.querySelector('.main_button')
let result            = document.querySelector('.result')
// function part start ==================
let onlyclick = ()=>{
    if(input.value == ''){
        alert('Put a value')
    }else{
        // element create
        let result_child        = document.createElement('div')
        let result_input        = document.createElement('input')
        let result_editbutton   = document.createElement('button')
        let result_removebutton = document.createElement('button')
        // making child
        result.appendChild(result_child)
        result_child.appendChild(result_input)
        result_child.appendChild(result_editbutton)
        result_child.appendChild(result_removebutton)
        // adding class name
        result_child.classList.add('result_child')
        result_input.classList.add('result_input')
        result_editbutton.classList.add('result_editbutton')
        result_removebutton.classList.add('result_removebutton')
        // adding content 
        result_editbutton.innerHTML    = 'Edit'
        result_removebutton.innerHTML  ='Delete'
        // adding data to function
        result_input.value = input.value
        input.value = ''
        // setting input attri
        result_input.setAttribute('readonly', 'readonly')
        // deleting data
        result_removebutton.addEventListener('click' , ()=>{
            result_child.remove()
        })
        // edit button
        result_editbutton.addEventListener('click' , ()=>{
            if(result_editbutton.innerHTML == 'Edit'){
                result_editbutton.innerHTML = 'Save'  
                result_editbutton.style = 'background:blue; color: white;'  
                result_input.removeAttribute('readonly', 'readonly')

            }else{
                result_editbutton.innerHTML= 'Edit'
                result_editbutton.style = 'background:#B3FFAB; color: black;'  
                result_input.setAttribute('readonly', 'readonly')
            }
        })
    }
}
// enter press function
let enterb =(item)=>{
    if(item.key == 'Enter'){
        onlyclick()
    }
}