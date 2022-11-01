import React from 'react'

export default function Notes({item, notes, setNotes, setEdited}) {

    const removeHandler = (id) => {
        const newNotes = notes.filter((e) => {
            if(e.id !== id){
                return e
            }
        })
        setNotes(newNotes)
    }

    const editHandler = (id) => {
        setEdited(id)
        notes.filter((e) => {
            if(e.id === id){
                document.getElementById("edittitle").value = e.title
                document.getElementById("editdesc").value = e.desc
            }
        })
    }

    return (
        <>
            <div className="card mb-3">
                <div className="card-body text-capitalize">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                        editHandler(item.id)
                    }}>
                        Edit
                    </button>
                    <button className="btn btn-danger mx-2" onClick={() => {
                        removeHandler(item.id)
                    }}>Delete</button>
                </div>
            </div>
        </>
    )
}
