import { Item } from "./item";

export class List {
    public items: Item[] = [];
    public dom: HTMLElement = document.createElement('div');

    constructor (parent: HTMLElement) {
        //this.dom.innerHTML = 'HelloWorld';
        parent.append(this.dom)

    }

    public addItem(title: string) {
        this.items.push(new Item(this.dom, title))
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