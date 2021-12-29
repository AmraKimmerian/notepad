import { useEffect, useState } from 'react'
import api from '../../api/api'
import './note.css'
import { Link, useHistory } from 'react-router-dom'
import Loader from '../../loader'

const Note = ({ id }) => {
  const [note, setNote] = useState()
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState()

  const history = useHistory()

  useEffect(() => {
    setLoading(true)
    api
      .getNote(id)
      .then(result => {
        setLoading(false)
        setNote(result)
      })
      .catch(error => {
        setLoading(false)
        setErrorText(error)
      })
  }, [])

  const handleSaveNote = () => {
    setErrorText(undefined)
    setLoading(true)
    api
      .saveNote(note)
      .then(result => {
        setLoading(false)
        if (result) {
          history.push('/notes')
        } else {
          alert('Не удалось сохранить заметку')
        }
      })
      .catch(error => {
        setLoading(false)
        setErrorText(error)
      })
  }

  const handleDeleteNote = () => {
    setErrorText(undefined)
    setLoading(true)
    api
      .deleteNote(note.id)
      .then(result => {
        setLoading(false)
        if (result) {
          history.push('/notes')
        } else {
          alert('Не удалось удалить заметку')
        }
      })
      .catch(error => {
        setLoading(false)
        setErrorText(error)
      })
  }

  if (loading) return <Loader />

  if (!note) {
    return (
      <div className="center-in-parent center-children" role="status">
        <p>{errorText ? errorText : 'Не удалось загрузить заметку'}</p>
        <Link to="/notes" className="btn btn-primary">
          Назад
        </Link>
      </div>
    )
  }

  return (
    <div className="center-in-parent center-children note">
      <div className="input-group mb-3">
        <span className="input-group-text">Заголовок</span>
        <input
          type="text"
          className="form-control"
          value={note.title}
          onChange={event => {
            setNote({ ...note, title: event.target.value })
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Текст</span>
        <textarea
          type="text"
          className="form-control"
          value={note.text}
          onChange={event => {
            setNote({ ...note, text: event.target.value })
          }}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleSaveNote}>
        Сохранить
      </button>
      <button className="btn btn-danger btn-sm" onClick={handleDeleteNote}>
        Удалить
      </button>
    </div>
  )
}
export default Note
