export class Item {
    public title: string = '';
    public complete: boolean = false;
    public dom: HTMLElement = document.createElement('div')

    constructor (parent: HTMLElement, title: string) {
        parent.append(this.dom)
        this.setUpDom(title)

    }

    public setUpDom (title: string) {
        let button = document.createElement('button')
        button.innerHTML = 'complete';
        let t2 = document.createElement('h1')
        t2.innerHTML = title 

        this.dom.append(button, title)
    }
}