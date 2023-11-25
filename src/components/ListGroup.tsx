import React from 'react'

const ListGroup = () => {
//   only city names of america
  const items = [
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

  return (
    <>
      <h1>List</h1>
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