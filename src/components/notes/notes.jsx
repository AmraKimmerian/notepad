import NoteCard from '../noteCard/noteCard'
import { useEffect, useState } from 'react'
import api from '../../api/api'
import './notes.css'
import { Link, useParams } from 'react-router-dom'
import Note from '../note/note'
import Loader from '../../loader'

const Notes = () => {
  const { noteId } = useParams()
  const [notes, setNotes] = useState()
  const [loading, setLoading] = useState(false)

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
  if (!notes) {
    return (
      <div className="center-in-parent no-notes center-children">
        <div className="center-in-parent">Пока нет записок в блокноте.</div>
        <button className="btn btn-primary m-1 center-in-parent">
          Добавьте уже одну
        </button>
      </div>
    )
  }
  return (
    <>
      <h1 className="m-3">Notes</h1>
      <div className="row m-3">
        {notes.map(note => (
          <NoteCard id={note.id} title={note.title} text={note.text} />
        ))}
      </div>
      <Link to="notes/15">Go to not existed note</Link>
    </>
  )
}

export default Notes
