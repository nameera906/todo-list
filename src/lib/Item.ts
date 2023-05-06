export class Item {
    public title: string = '';
    public completed: boolean = false;
    public dom: HTMLElement = document.createElement('div')
    private messageDom: HTMLElement = document.createElement('p');

    constructor (parent: HTMLElement, title: string) {
        parent.append(this.dom)
        this.setUpDom(title)

    }


    public setUpDom(title: string) {
        let br = document.createElement('br')
        br.innerHTML = ' '
        let completeButton = document.createElement('button')
        completeButton.innerHTML = 'complete'
        completeButton.addEventListener('click', () => {
          this.completed = true
          this.dom.classList.add('completed')
          this.messageDom.innerHTML = 'Task has been completed.';
          this.messageDom.style.display = 'block';
        })
        let incompleteButton = document.createElement('button')
        incompleteButton.innerHTML = 'not complete'
        incompleteButton.addEventListener('click', () => {
          this.completed = false
          this.dom.classList.remove('completed')
          this.messageDom.innerHTML = 'Task has not been completed';
          this.messageDom.style.display = 'block';
        })
        let t2 = document.createElement('h1')
        t2.innerHTML = title
    
        this.dom.append(completeButton, incompleteButton, t2, this.messageDom)
      }
    


    // public setUpDom (title: string) {
    //     let br = document.createElement('br')
    //     br.innerHTML= ' '
    //     let button = document.createElement('button')
    //     button.innerHTML = 'complete';       
    //     let t2 = document.createElement('h1')
    //     t2.innerHTML = title 

    //     this.dom.append(button, title)
    // }
}