import React, { useEffect, useRef, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = (props) => {
  let history = useHistory();
  const context = useContext(NoteContext);
  const { notes, getNote, editNote } = context;
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      getNote();
    } else {
      history.push("/login")
    }
    //eslint-disable-next-line
  }, []);
  const ref = useRef(null)
  const refclose = useRef(null)


  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "", id: "" })

  const handleclick = (event) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refclose.current.click();
    props.showAlert("Updated succesfully", 'success')

  }
  const updateNote = (currentnote) => {
    ref.current.click();
    setNote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })
  };

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })  // here : is =
  }

  return (
    <>

      <div className="container">
        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Launch static backdrop modal
        </button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel" style={{color:"black"}}>Edit your note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={note.etitle}
                      id="etitle"
                      name="etitle"
                      required
                      onChange={onChange}
                    />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      value={note.edescription}
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      value={note.etag}
                      className="form-control"
                      id="etag"
                      name="etag"
                      onChange={onChange}
                    />
                  </div>


                </form>
              </div>
              <div className="modal-footer">
                <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={note.edescription.length < 5} type="button" onClick={handleclick} className="btn btn-primary">Edit done</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <h2 className="d-flex justify-content-center">{notes.length > 1 ? "Your Notes" : "Your note"}</h2>
          <div className="container d-flex justify-content-center my-3 " >
            {notes.length === 0 && "Your notes will display here!!"}
          </div>
          {notes.map((note) => {
            return (
              <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
