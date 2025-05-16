import Note from "../../types/Note"
import "./NoteCard.css"
import tag from "../../../public/tag.svg"

export default function NoteCard({ note }: { note: Note }) {
    return (
        <div className="note-card">
            <p className="note-discription">
                {note.content.length > 100 
                ? note.content.slice(0, 100) + '...' 
                : note.content}
            </p>
            <strong className="note-name">
                {note.title.length > 30 
                ? note.title.slice(0, 30) + '...' 
                : note.title}
            </strong>
            <div className="note-data-container">
                <p className="note-user">
                    {note.userName}
                </p>
                <div className = "tag-container">
                    <img src={tag} className="tag-image" />
                    <p className="tag-name">
                        {note.tag}
                    </p>
                </div>
            </div>
        </div>
    )
}

