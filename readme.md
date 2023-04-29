# A Todolist
We will use typescript to make a todo-list application
### Purpose
Manage a list to things that you need to do.
enter it into the app and it will store the data for you.

## Getting Started
To start developing:
- <div style='display:flex;align-items:center;'>We use Vite<a href="https://vitejs.dev/"><img src="https://vitejs.dev/logo-with-shadow.png" width="50px" height="50px" style="padding:1em"></a></div>

- <div style='display:flex;align-items:center;'>We also use Typescript <a href="https://www.typescriptlang.org/"><img src="./public/typescript.svg" style="padding:1em"></a></div>
- <div style='display:flex;align-items:center;'>We should be using scss for styling <a><img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" style="padding:1em" width="50px" height="50px"></a></div>


Run these commands

- `git clone`

- `cd todo-list`

- `npm install`

To start a dev server

- `npm run dev`

To build the project for production

- `npm run build` 


## Workflow

#### Wanted Features
- The app needs an interface and some way to store data
- The app needs to have some kind of input taking capability
- The app need to be able to handle user interactions

#### Stuff we can use
Getting stuff from our html pages
```typescript
/**
 * Gets element with specific id attribute
 */
document.getElementById('id');
/**
 * Gets first element that satisfies given value
 * use #id to get id
 * use .id to get elements by their class
 * use id to get element by type
 */
document.querySelector('id');   
/**
 * Same as above but gets a list of elements
 */
document.querySelectorAll('id');
```

Managing Buttons
```typescript
/**
 * If Button is already in your HTML
 */
const button = document.getElementById('some-button')
button.addEventListener("click",()=>{
    console.log("stuff")
});
/**
 * If the button is created in your script
 */
const created_button = document.createElement('button')
created_button.addEventListener("click",()=>{
    console.log("stuff")
});
/**
 * Don't forget to add this type of button to the dom
 */
const button_parent = document.getElementById('button-parent')
button_parent.append(created_button)

/**
 * You can add the button to a created element too
 */

const created_button_parent = document.createElement('div');
created_button_parent.append(created_button)

```

Managing Database
```typescript
/**
 * We can use the localStorage api
 */

// Set a value
localStorage.setItem('name','value')
// Get a value
localStorage.getItem('name')
// Set an object
const value = {
    first_name:"Yash"
    last_name:"Giri"
}
// You need to convert the value into a json string
localStorage.setItem('name', JSON.stringify(value))
// Get an object
const gotten_value = JSON.parse(localStorage.getItem('name', JSON.stringify(value)))
// It will return a string, use `JSON.parse` to convert it into code friendly stuff 

```


#### Keywords
[`DOM(Document Object Model)`](https://www.w3schools.com/js/js_htmldom.asp), [`DOM Methods`](https://www.w3schools.com/js/js_htmldom_document.asp), [`DOM Collections`](https://www.w3schools.com/js/js_htmldom_collections.asp),
[`Web API's`](https://www.w3schools.com/js/js_api_intro.asp), [`JS JSON`](https://www.w3schools.com/js/js_json_intro.asp), [`localStorage`](https://www.javascripttutorial.net/web-apis/javascript-localstorage/), [`DOM Events`](https://www.w3schools.com/js/js_htmldom_events.asp), [`DOM Event Listeners`](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)