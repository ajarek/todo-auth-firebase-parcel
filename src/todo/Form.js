import { Button } from "./Button"
import { Input } from "./Input"
export class Form   {
    constructor(value, onSubmit) {
    this.value = value
    this.onSubmit = onSubmit
}

    render() {
    const Form = document.createElement("form")
    Form.classList.add("form")
    Form.style.display = "flex"
    Form.style.justifyContent = "flex-start"
    Form.style.alignItems = "center"

    const input = new Input(this.value,(value) => this.value = value, "🖊️")
  
    const button = new Button("Add","#3498db")

      Form.addEventListener("submit", (e) => {
            e.preventDefault()
            this.onSubmit(this.value)
      })
    Form.appendChild(input.render())
    Form.appendChild(button.render())
    return Form
  };
};
