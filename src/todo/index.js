import { Form } from "./Form"
import {EasyHTTP} from './EasyHTTP-class'
import { List } from "./List"
import { Modal } from "./modalEdit"
const root = document.querySelector("#root")
const http=new EasyHTTP()
 
 function addTasks(task){
    if(task){  
        const data={
            task: task,
            isCompleted: false
        }     
     http.post('https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/todo/.json',data)
     .then(()=>{render()})
    }    
}

function loadTasks(){    
    http.get('https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/todo/.json')
    .then(data=>{
        Object.entries(data).forEach(([key,value])=>{
        const list=new List(value.task,value.isCompleted,key)
        root.append(list.render())     
    })
    isCompletedSetting()
    isCompletedSettingDB()
    deleteTaskEvent()
    editTaskEvent()
})
}

function isCompletedSetting(){
const paragraphs=document.querySelectorAll('p')
paragraphs.forEach(paragraph=>{

    if(paragraph.dataset.isCompleted==='true'){
        paragraph.style.textDecoration="line-through"
    }
    else{
        paragraph.style.textDecoration="none"
    }
})
}

function isCompletedSettingDB(){
const paragraphs=document.querySelectorAll('p')
paragraphs.forEach(paragraph=>{
paragraph.addEventListener('click',()=>{
    const data={
        isCompleted: paragraph.dataset.isCompleted==='true'?false:true
    }
    http.patch(`https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/todo/${paragraph.id}.json`,data)
    .then(()=>{
        render()
    })
    
})
})
}

function deleteTask(e){
    const id=e.target.dataset.id
    http.delete(`https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/todo/${id}.json`)
    .then(()=>{
        render()
    })
}
function deleteTaskEvent(){
    const deleteBtns=document.querySelectorAll('.deleteBtn')
    deleteBtns.forEach(deleteBtn=>{
        deleteBtn.addEventListener('click', deleteTask)
    })
}

function editTask(e){
const modal=new Modal(e.target.parentNode.parentNode.firstChild.innerHTML,e.target.parentNode.parentNode.firstChild.dataset.isCompleted,e.target.dataset.id)

   root.append(modal.render())
   saveChangesEvent()
}

function editTaskEvent(){
    const editBtns=document.querySelectorAll('.editBtn')
    editBtns.forEach(editBtn=>{
        editBtn.addEventListener('click', editTask)
    }
    )
}

function saveChanges(e){
    console.log(e);
    const id=e.target.dataset.id
    const task=e.target.parentNode.children[1].value
    const isCompleted=e.target.previousElementSibling.value
    const data={
        task: task,
        isCompleted: isCompleted
    }
    http.patch(`https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/todo/${id}.json`,data)
    .then(()=>{
        render()
    }
    )
}

function saveChangesEvent(){
    const saveBtns=document.querySelectorAll('.saveChangesBtn')
    saveBtns.forEach(saveBtn=>{
        saveBtn.addEventListener('click', saveChanges)
    }
    )
}

export function render(){
root.innerHTML=""
const form = new Form("", (task) => {addTasks(task)})
root.append(form.render())
loadTasks()

}
//render()
