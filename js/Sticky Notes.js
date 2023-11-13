const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(" .add-note");

function getNotes() {
    return JSON.parse(localStorage.getItem("sticky-notes") || "[]");

}

function saveNotes() {
    localStorage.setItem("sticky-notes", JSON.stringify(notes));
    const element = document.createElement("textarea");
}

function createNoteElement(id, content) {

}

function addNote() {

}

function updateNote(it, Newcontent) {

}