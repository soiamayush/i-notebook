import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const Addnote = (props) => {

    const context = useContext(NoteContext);
  const { addNote } = context;

// -------- function define
 const [note, setNote] = useState({title : "", description : "", tag : ""})

    const handleclick = (event) =>{
      event.preventDefault();
      addNote(note.title, note.description, note.tag);
      setNote({title : "", description : "", tag : ""})
      props.showAlert("Added successfully", "success")

    }

    const onChange = (event) =>{
      setNote({...note, [event.target.name] :  event.target.value})  // here : is =
    }


    return (
        <div >
            <div className="container ">
              
        <h1 >Add a note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              required
              value={note.title}
              placeholder="Enter your title"
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5}
              required
              value={note.description}
              placeholder="Enter your description"
            />
          </div>


          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            value={note.tag}
            style={{width : "20vw"}}
            placeholder="Your tag"

            />
          </div>
          <div className="d-flex justify-content-center" >

          <button disabled={ note.description.length < 5 }  style={{width : "250px", borderRadius:"5px"}}  type="submit" className="btn btn-primary" onClick={handleclick}>
            Add note
          </button>
          </div>
        
                {/* <div className="d-flex justify-content-center" disabled={note.description.length <5} style={{margin:"30px 15px", padding : "30px"}} >
                <Button type="submit"  buttonStyle='btn--outline' onClick={handleclick}>Add note </Button> 

                 </div> */}


        </form>
      </div>
        </div>
    )
}

export default Addnote
