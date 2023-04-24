import { Item } from "./item";

export class List {
    public items: Item[] = [];
    public dom: HTMLElement = document.createElement('div');

    constructor (parent: HTMLElement) {
        //this.dom.innerHTML = 'HelloWorld';
        parent.append(this.dom)

    }

    public addItem(title: string) {
        //this.items.push(new Item(this.dom, title))
        const item = new Item(this.dom, title);
        item.dom.addEventListener('click', () => {
        item.completed = !item.completed;
        if (item.completed) {
            item.dom.classList.add('completed');
            console.log(`Completed: ${item.title}`);
        } else {
            item.dom.classList.remove('completed');
            console.log(`Not completed: ${item.title}`);
        }
        });
        this.items.push(item);
    }

    public clearItems() {
        this.items = [];
        this.dom.innerHTML = '';
    }

}




// clearItems() {
//     this.items.forEach ( title => {
//         title.remove();
//     });
//     this.items = []
// }