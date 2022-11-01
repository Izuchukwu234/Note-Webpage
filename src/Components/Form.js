import React from 'react'

export default function Form({ title, setTitle, desc, setDesc, notes, setNotes}) {
  const inputHandler = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value)
    } else {
      setDesc(e.target.value)
    }
  }

  const addNoteHandler = (e) => {
    e.preventDefault()
    if (title !== "" && desc !== "") {
      setNotes((note) => {
        return (
          [...note, {
            title: title,
            desc: desc,
            id: new Date().getTime()
          }]
        )
      })
    }
    setTitle("")
    setDesc("")
  }
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form style={{ border: "2px solid #ced4da", borderRadius: "10px", padding: "30px" }}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter Your Title" value={title} onChange={inputHandler} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <textarea name="desc" id="desc" rows="3" className="form-control" placeholder="Enter Your Description" value={desc} onChange={inputHandler}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" onClick={addNoteHandler}>Add Notes</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}