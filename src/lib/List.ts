import { Item } from "./Item";
/**
 * TODO: Add a comment to explain what the list class is
 * TODO: Add a function to remove an item
 * TODO: Add a button store the items data into localStorage
 */
export class List {
    public items: Item[] = [];
    public dom: HTMLElement = document.createElement('div');

    constructor (parent: HTMLElement) {
        this.dom.innerHTML = 'HelloWorld';
        parent.append(this.dom)

    }

    public addItem(title: string) {
        this.items.push(new Item(this.dom, title))
    }
}