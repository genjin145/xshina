import React from 'react'
import ContactItem from './ContactItem.jsx'

function ContactList({ points, currentPoint, setCurrentPoint }) {
  return (
    <ul className="contacts__list contact-list">
      {points.map((point, index) => (
        <ContactItem
          key={index}
          index={index}
          {...point}
          currentPoint={currentPoint}
          setCurrentPoint={setCurrentPoint}
        />
      ))}
    </ul>
  )
}

export default ContactList
