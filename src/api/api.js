import { v4 as uuidv4 } from 'uuid'
import { isEmptyString } from '../utils/utils'

const notes = [
  {
    id: '0',
    title: 'Hello World!',
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: '1',
    title: 'Lorem',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue maximus odio, ac pellentesque nisl tincidunt vitae. Nulla semper efficitur faucibus. Fusce eu porttitor tellus. Vestibulum placerat orci ac convallis egestas. Morbi in luctus erat. In ut rutrum lorem, vel viverra velit. Ut vitae nisi at nunc luctus sollicitudin.',
  },
  {
    id: '2',
    title: 'Lorem1',
    text: 'Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue maximus odio, ac pellentesque nisl tincidunt vitae. Nulla semper efficitur faucibus. Fusce eu porttitor tellus. Vestibulum placerat orci ac convallis egestas. Morbi in luctus erat. In ut rutrum lorem, vel viverra velit. Ut vitae nisi at nunc luctus sollicitudin.',
  },
  {
    id: '3',
    title: 'Note 4',
    text: 'Note 4 text text text',
  },
  {
    id: '4',
    title: 'Note 5',
    text: 'Note 5 text text text',
  },
  {
    id: '5',
    title: 'Note 6',
    text: 'Note 6 text text text',
  },
  {
    id: '6',
    title: 'Note 7',
    text: 'Note 7 text text text',
  },
]

function getNotes(count) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (!count) {
        resolve(notes)
      } else {
        resolve(notes.slice(0, count))
      }
    }, 1000)
  })
}

const getNote = id => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const note = notes.find(note => note.id.toString() === id)
      if (note) {
        resolve(note)
      } else {
        reject('Note not found')
      }
    }, 1000)
  })
}

const saveNote = noteToSave => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!noteToSave) {
        reject("Can't save undefined or null note object")
      }

      if (!isNaN(noteToSave.id)) {
        const index = notes.findIndex(note => note.id === noteToSave.id)
        if (index > -1) {
          notes[index] = noteToSave
        } else {
          notes.push(noteToSave)
        }
      } else {
        notes.id = uuidv4()
        notes.push(noteToSave)
      }
      resolve(true)
    }, 1000)
  })
}

const deleteNote = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isEmptyString(id)) {
        reject("Can't delete note if id is null or undefined")
      }
      const index = notes.findIndex(note => note.id === id)
      if (index > -1) {
        notes.splice(index, 1)
        resolve(true)
      } else {
        resolve(false)
      }
    }, 500)
  })
}

export default {
  getNotes,
  getNote,
  saveNote,
  deleteNote,
}
