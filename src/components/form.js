import { Input } from "../components/input"
export class Form{
    constructor(title,id,selectorResult){
        this.title = title;
        this.id = id;
        this.selectorResult = selectorResult;
    }
    
    
    render(){
        const container = document.createElement("div");
        container.classList.add("form-container","p-4");
        const title= document.createElement("div");
        title.classList.add("title");
        title.innerHTML = this.title;
        const form = document.createElement("form");
        form.id=this.id;
        form.classList.add("form");
        const emailInput = new Input("email","Email",("form-control" ,"my-4"));
        const passwordInput = new Input("password","Password" ,("form-control" ,"my-4"));
        const wrapperBtn= document.createElement("div");
        wrapperBtn.classList.add("wrapper-btn");
        const submitBtn = document.createElement("button");
        submitBtn.innerHTML = "Submit";
        submitBtn.classList.add("btn","btn-primary","mb-4");
        wrapperBtn.appendChild(submitBtn);
        const result = document.createElement("div");
        result.classList.add(this.selectorResult);
        result.innerHTML = "Result:";
        form.append(emailInput.render(),passwordInput.render(),wrapperBtn,result);
        container.append(title,form);
        return container;
       }
       
    
}