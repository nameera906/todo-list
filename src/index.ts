import { List } from "./lib/list";

const clearbtn = document.querySelector('.clear-all') as HTMLButtonElement

const l1 = new List(document.body)
const addbtn = document.getElementById('add-button')
const t1: HTMLInputElement = document.getElementById('t1') as HTMLInputElement
addbtn?.addEventListener('click', ()=>{
    l1.addItem(t1.value)
})

const clearTodos = ()=> {
    l1.clearItems();
};
clearbtn.onclick = () => clearTodos();

 