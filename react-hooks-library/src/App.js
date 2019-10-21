import React, {useState} from 'react'
import BookTable from './tables/BookTable'
import AddBookForm from './forms/AddBookForm'

const App = () => {

  const booksData = [
    { id: 1, name: 'Great expectations', author: 'Charles dickens' },
    { id: 2, name: 'False escape', author: 'William jones' },
    { id: 3, name: 'New town', author: 'Sheryl kaur' }
  ]

  const [books, setBooks] = useState(booksData)

  const addBook = book => {
    book.id = books.length + 1
    setBooks([...books, book])
  }

  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <div className="container">
      <h1>Library</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add book</h2>
          <AddBookForm addBook={addBook} />
        </div>
        <div className="flex-large">
          <h2>View books</h2>
          <BookTable books={books} deleteBook={deleteBook}/>
        </div>
      </div>
    </div>
  )
}

export default App
