/* dark-mode toggle button 
1.   The dark-mode button is pressed and the background of the app will change to a dark theme.
2.   The button is pressed again and the background will return to its original state
*/

function darkTheme() {
  let element = document.body;
  element.classList.toggle("dark-mode")
  let button = document.getElementById("button").style.backgroundColor;
  let color = '';

  if (color !== '#6e6a86') {
    color = '#6e6a86';
    document.getElementById('button').style.backgroundColor = color;
    }

  else if (color == '#6e6a86') {
  color = '#f2e9de';
  document.getElementById('button').style.backgroundColor = color;
    }
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

/* display note that is clicked 

Note title:
    - When a note title is clicked, the note is displayed in the main area
    - A close button will appear which will remove the note from the main area and return
      app to its original state

*/



