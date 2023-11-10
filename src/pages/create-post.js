import React from 'react'

function CreatePost() {
  return (
    <div className="container">
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Title"
          />
          <label for="floatingName">Title</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="floaringTextArea"
            placeholder="Description"
          ></textarea>
          <label for="floaringTextArea">Description</label>
        </div>

        <div>
          <input
            type="file"
            className="form-floating cursor-pointer mb-3 d-flex align-items-center"
            id="floatingFile"
            title="Choose image to publish"
          />
        </div>
      </form>
    </div>
  )
}

export default CreatePost