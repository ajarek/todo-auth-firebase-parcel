export class Input{
    constructor(text, onChange,placeholder) {
        this.text = text
        this.onChange = onChange
        this.placeholder = placeholder
    }
        
    render(){
        const Input = document.createElement('input')
        Input.classList.add('input')
        Input.style.height = '30px'
        Input.style.width = '50%'
        Input.style.borderRadius = '0.25rem'
        Input.style.border = '1px solid gray'
        Input.style.outline = 'none'
        Input.style.padding = '0 1rem'
        Input.style.fontSize = '1.3rem'
        Input.value = this.text
        Input.setAttribute('placeholder', this.placeholder)
        setTimeout(function () {
            Input.focus();
          }, 0);
        Input.addEventListener('input', (e) =>
         this.onChange(e.target.value)
        )
        return Input
    }
    
}