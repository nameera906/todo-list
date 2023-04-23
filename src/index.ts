import { List } from "./lib/List";

const list = new List(document.body)
const add_btn = document.getElementById('add-button')!;
const item_name: HTMLInputElement = document.getElementById('t1') as HTMLInputElement
add_btn.addEventListener('click', ()=>{
    list.addItem(item_name.value)
})


 