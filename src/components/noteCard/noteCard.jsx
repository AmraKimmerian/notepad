import './noteCard.css'
import { Link } from 'react-router-dom'
import { logDOM } from '@testing-library/react'

const NoteCard = ({ id, title, text }) => {
  return (
    <Link
      to={`/notes/${id}`}
      className="card m-2 p-0"
      role="button"
      style={{
        width: '18rem',
        textDecorationLine: 'none',
        textDecorationColor: '#аа0000',
      }}
    >
      <div className="card-body p-0">
        <h5 className="card-title bg-info p-3">{title}</h5>
        <div className="card-text note-text m-3">{text}</div>
      </div>
    </Link>
  )
}
export default NoteCard
