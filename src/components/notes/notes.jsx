import NoteCard from '../noteCard/noteCard'
import { useEffect, useState } from 'react'
import api from '../../api/api'
import './notes.css'
import { Link, useHistory, useParams } from 'react-router-dom'
import Note from '../note/note'
import Loader from '../../loader'

const Notes = () => {
  const { noteId } = useParams()
  const [notes, setNotes] = useState()
  const [loading, setLoading] = useState(false)
  const [newNote, setNewNote] = useState()
  const history = useHistory()

  useEffect(() => {
    setLoading(true)
    api.getNotes().then(result => {
      setNotes(result)
      setLoading(false)
    })
  }, [])

  if (noteId) {
    return <Note id={noteId} />
  }

  if (loading) {
    return <Loader />
  }
  const handleSaveNote = () => {
    setLoading(true)
    api
      .saveNote(newNote)
      .then(result => {
        setLoading(false)
        setNewNote(undefined)
        if (result) {
          history.push('/notes')
        } else {
          alert('Не удалось сохранить заметку')
        }
      })
      .catch(error => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="center-in-parent center-children note mt-3">
        <div className="input-group mb-3">
          <span className="input-group-text">Заголовок</span>
          <input
            type="text"
            className="form-control"
            onChange={event => {
              setNewNote({ ...newNote, title: event.target.value })
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Текст</span>
          <textarea
            type="text"
            className="form-control"
            onChange={event => {
              setNewNote({ ...newNote, text: event.target.value })
            }}
          />
        </div>
        <button className="btn btn-primary mb-3" onClick={handleSaveNote}>
          Добавить
        </button>
      </div>
      {notes && (
        <div className="row m-3">
          {notes.map(note => (
            <NoteCard id={note.id} title={note.title} text={note.text} />
          ))}
        </div>
      )}

      <Link to="notes/15" className="m-3">
        Go to not existed note
      </Link>
    </>
  )
}

export default Notes
