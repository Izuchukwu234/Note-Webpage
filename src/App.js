import React, { useState } from 'react'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import EditModal from './EditModal'
import Notes from './Notes'

export default function App() {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [notes, setNotes] = useState(getNotesFromLs)
  localStorage.setItem("notes", JSON.stringify(notes))
  const [edited, setEdited] = useState("")

  return (
    <>
      <EditModal edited={edited} notes={notes} setNotes={setNotes}/>
      <Navbar />
      <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="mb-3">Your Notes</h1>
            {
              notes.length === 0 ?
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Message</h5>
                    <p className="card-text">No notes are available for reading</p>
                  </div>
                </div>
                : notes.map((item) => {
                  return (
                    <Notes item={item} key={item.id} notes={notes} setNotes={setNotes} setEdited={setEdited}/>
                  )
                })
            }
          </div>
        </div>
      </div>
    </>
  )
  function getNotesFromLs(){
    const note = JSON.parse(localStorage.getItem("notes"))
    if(note){
      return note
    }else{
      return []
    }
  }
}