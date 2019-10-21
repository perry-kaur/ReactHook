import React, { useState } from 'react'

const AddBookForm = props => {

  const initialFormState = { id: null, name: '', author: '' }
  const [book, setBook] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setBook({ ...book, [name]: value })
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
        if (!book.name || !book.author) return

        props.addBook(book)
        setBook(initialFormState)
      }}>
      <label>Book name</label>
      <input type="text" name="name" value={book.name} onChange={handleInputChange} />
      <label>Author</label>
      <input type="text" name="author" value={book.author} onChange={handleInputChange} />
      <button>Add new book</button>
    </form>
  )
}

export default AddBookForm
