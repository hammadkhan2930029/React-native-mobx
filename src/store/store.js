
import { makeAutoObservable } from "mobx";
class Mynotes {
    notes = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })

    }
    addNotes(note) {
        this.notes.push({
            id: Date.now(),
            ...note
        })

    }
    deleteNote(id) {
        this.notes = this.notes.filter(item => item.id !== id)
    }

    updateNote(id, newNote) {
        this.notes = this.notes.map(item => item.id === id ? { ...item, ...newNote } : item)
    }
}
const myNotesStored = new Mynotes()
export default myNotesStored;