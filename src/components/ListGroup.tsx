import React from 'react'

const ListGroup = () => {
//   only city names of america
  let items = [
    'New York',
    'San Francisco',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Diego',
    'Dallas',
    'San Antonio',
    'Jacksonville',
    'Fort Worth',
    'Seattle',
    'Denver',
    'El Paso',
    'Washington',
    'Boston',
    'Memphis',
    'Detroit',
    'Nashville',
    'Milwaukee',
    'Portland',
    'Oklahoma City',
    'Las Vegas',
  ]

  items = []
  
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup