import { Input } from "./Input"
import { Button } from "./Button"
import { Label } from "./Label"

export class Modal{
    constructor(text,isCompleted,id){
        this.text = text 
        this.isCompleted = isCompleted
        this.id=id   
    }
    render(){
        const modal = document.createElement('div')
        modal.classList.add("modal")
        modal.style.display="flex"
        modal.style.flexDirection="column"
        modal.style.justifyContent="center"
        modal.style.alignItems="center"
        modal.style.position="fixed"
        modal.style.top="0"
        modal.style.left="0"
        modal.style.width="100%"
        modal.style.height="100%"
        modal.style.backgroundColor="rgba(0,0,0,0.5)"
        modal.style.zIndex="10"
        const modalContent = document.createElement('div')
        modalContent.classList.add("modalContent")
        modalContent.style.display="flex"
        modalContent.style.flexDirection="column"
        modalContent.style.justifyContent="space-around"
        modalContent.style.alignItems="center"
        modalContent.style.width="50%"
        modalContent.style.height="50%"
        modalContent.style.backgroundColor="white"
        modalContent.style.borderRadius="10px"
        modalContent.style.padding="20px"
        modalContent.style.zIndex="10"
        const labelText = new Label('text:')
        const modalEdit = new Input(this.text,(value) => this.text = value, "🖊️")
        const modalIsCompleted = new Input(this.isCompleted,(value) => this.isCompleted = value, "🖊️")
        const labelIsCompleted = new Label('isCompleted:false or true')
        const modalBtn = new Button("Save Changes","#2ecc71",null,this.id,"saveChangesBtn")
        modalContent.append(labelText.render(),modalEdit.render(),labelIsCompleted.render(),modalIsCompleted.render(),modalBtn.render())
        modal.append(modalContent)
        return modal
}
}