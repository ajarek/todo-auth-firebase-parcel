export class Button{
    constructor( text,color, onClick,dataset ,classBtn) {
        this.text = text
        this.color = color
        this.onClick = onClick
        this.dataset = dataset
        this.classBtn = classBtn
    }
    
    render(){
        const Button = document.createElement('button')
        Button.classList.add(this.classBtn)
        Button.innerText = this.text
        Button.setAttribute('type','submit')
        Button.style.backgroundColor = this.color
        Button.style.borderColor = this.color
        Button.style.color = "white"
        Button.style.height = '32px'
        Button.style.padding = '0 2rem'
        Button.style.margin = "0 0.2rem"
        Button.style.borderRadius = '0.25rem'
        Button.dataset.id=this.dataset
        Button.addEventListener('click',this.onClick)
        Button.style.cursor = "pointer"
        
        return Button
    }
   
}
