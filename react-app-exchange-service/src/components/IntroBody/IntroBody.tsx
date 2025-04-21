import NoteCard from "../NoteCard/NoteCard"
import {mockNotes} from "../../../test_data/Notes"
import Button from "../Button/Button"
import "./IntroBody.css"

export default function IntroBody() {
    return (
    <div className="intro-body">
        <div className="about-container">
            <div className="intro-title-container">
                <h1 className="intro-title first-title">Легко записывай </h1>
                <h1 className="intro-title second-title">Умно используй</h1>
            </div>
            <p className="intro-text">
                Записывайте идеи и делайте их реальностью с 
                помощью интеллектуальной <br />
                системы заметок, 
                которая подстраивается под ваши нужды.
            </p>
            <Button className="intro-button" text="Начать!" href="/register" />
        </div>
        <p className="cards-title">ОТКРЫТЫЕ ЗАМЕТКИ</p>
        <div className="cards-container">
        {mockNotes.slice(0, 8).map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
        </div>
    </div>
)}