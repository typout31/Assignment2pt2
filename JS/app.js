/* dark-mode toggle button 
1.   The dark-mode button is pressed and the background of the app will change to a dark theme.
2.   The button is pressed again and the background will return to its original state
*/

function darkTheme() {
  let bodyElement = document.body;
  let menuElement = document.getElementById("menu");
  let buttonElement = document.getElementById("button");
  bodyElement.classList.toggle("dark-mode")
  menuElement.classList.toggle("dark-mode-menu")
  buttonElement.classList.toggle("dark-mode-button")
}


/* New note save 
New note button:
    - the button will create a note taking area (textarea) and will have new buttons below it
      for save and cancel
         - clicking save will add it to notesArray
    - clicking the save and cancel button will return the client to a screen without a note taking area

-    new notes in the notesArray should display on the the list of notes with a note title on the side
*/
const notesArray = []

function defineNoteWritingSection() {
  html = `
  <div id="note-area">
    <div id="note" contenteditable="true"></div>
    <button onclick="saveNote()">save</button>
    <button onclick="clear()">clear</button>
  </div>
  `
  return html
}

function createContentWritingArea() {
  const div = document.querySelector('#note-content')
  div.insertAdjacentHTML('beforeend', defineNoteWritingSection())
  setCursor()
}

function setCursor() {
  const div = document.querySelector("#note")
  div.focus()
}

function saveNote() {
  const div = document.querySelector('#note')
  const title = div.firstChild.textContent
  const body = convertDivsToString()
  notesArray.push(createNote(title, body))
  menuitem(title)
  clear()
}

function createNote(title, body) {
  return { title, body }
}

function convertDivsToString() {
  let str = ""
  const divs = [...document.querySelectorAll('[contenteditable] > div:not(:first-child)')]
  for (const i of divs) {
    str += `${i.textContent}\n`
  }
  return str
}

function clear() {
  const div = document.querySelector('#note-area')
  div.remove()
}

let titleList = ''
function menuitem(title) {
  titleList += `<li id="display" onclick="displayNote()">${title}</li><br>`
  document.getElementById('title-list').innerHTML = titleList;
}


/* display note that is clicked 

Note title:
    - When a note title is clicked, the note is displayed in the main area
    - A close button will appear which will remove the note from the main area and return
      app to its original state

*/

function displayNoteArea(body) {
  html = `
  <div id="note-area">
    <div id="note" contenteditable="true">${body}</div>
    <button onclick="saveNote()">save</button>
    <button onclick="clear()">clear</button>
  </div>
  `
  return html
}

function displayNote() {
  let title = document.getElementById('display')
  for (i = 0; i < notesArray.length; i++) {
    if (title === notesArray[i][0]) {
      let body = notesArray[i][1]
      const div = document.querySelector('#note-content')
      div.insertAdjacentHTML('beforeend', defineNoteArea(body))
      setCursor()
    }
  }
}

