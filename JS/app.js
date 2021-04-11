/* dark-mode toggle button 
1.   The dark-mode button is pressed and the background of the app will change to a dark theme.
2.   The button is pressed again and the background will return to its original state
*/

function darkTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode")
  var button = document.getElementById("button").style.backgroundColor;
  var color = '';

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
var newnotebutton = document.getElementById("new-note")
var savebutton = document.getElementById("save-button")
var deletebutton = document.getElementById("delete-button")


savebutton.addEventListener("click", function() {
  createNote();
})

deletebutton.addEventListener("click", function() {
  deleteNote();
})

function createNote() {

}

function deleteNOte() {

}

/* display note that is clicked 

Note title:
    - When a note title is clicked, the note is displayed in the main area
    - A close button will appear which will remove the note from the main area and return
      app to its original state

*/

