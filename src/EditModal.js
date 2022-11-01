import React from 'react'

export default function EditModal({ edited, notes, setNotes }) {
    const updateHanlder = () => {
        const updateNotes = notes.map((e) => {
            if (edited === e.id) {
                return (
                    {
                        ...e, title: document.getElementById("edittitle").value,
                        desc: document.getElementById("editdesc").value
                    })
            } else {
                return e
            }
        })

        setNotes(updateNotes)
    }
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="edittitle" placeholder="Enter Your Title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                    <textarea name="desc" id="editdesc" rows="3" className="form-control" placeholder="Enter Your Description"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateHanlder}>Edit Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
