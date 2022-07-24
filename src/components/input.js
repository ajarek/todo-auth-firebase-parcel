export class Input {
    constructor(type, placeholder,classList) {
      this.type = type;
      this.placeholder = placeholder;
      this.classList = classList;
    }
  
    render() {
      const wrapper = document.createElement("div");
      wrapper.classList.add("input-wrapper");
      const input = document.createElement("input");
      input.type = this.type;
      input.placeholder = this.placeholder;
      input.setAttribute("required", true);
      input.classList.add(this.classList);
      wrapper.appendChild(input);
      return wrapper;
    }
  }