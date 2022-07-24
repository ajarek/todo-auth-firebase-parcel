export class Label{
    constructor(text){
        this.text = text 
        
    }
    render(){
        const label = document.createElement('label')
        label.classList.add("label")
        label.innerText = this.text
        return label
    }
}