import React from 'react'

const BookTable = props => (
  <table>
    <thead>
      <tr>
        <th>Book name</th>
        <th>Author</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.books.length > 0 ? (
      props.books.map(book => (
        <tr key={book.id}>
          <td>{book.name}</td>
          <td>{book.author}</td>
          <td>
            <button className="button muted-button">Edit</button>
            <button onClick={() => props.deleteBook(book.id)} className="button muted-button">
              Delete
          </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No books</td>
      </tr>
    )}
    </tbody>
  </table>
)

export default BookTable
