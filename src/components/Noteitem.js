import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
    const context = useContext(NoteContext)
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3" style={{color : "black"}}>

            <div className="card my-3 " >
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div>
                            <i className="fas fa-trash-alt mx-1" onClick={() => { deleteNote(note._id); props.showAlert("deleted successfully", "success") }}></i>
                            <i className="far fa-edit mx-2" onClick={() => {updateNote(note) }}></i>

                        </div>

                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
