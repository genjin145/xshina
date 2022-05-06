import React from 'react'
import classNames from 'classnames'

function ContactItem({
  index,
  currentPoint,
  address,
  budgets = [],
  setCurrentPoint,
}) {
  const isActive = currentPoint === index
  const buttonStyles = classNames([
    'contact-list__item-inner',
    { 'contact-list__item-inner_active': isActive },
  ])

  return (
    <li className="contact-list__item">
      <button className={buttonStyles} onClick={() => setCurrentPoint(index)}>
        <span className="contact-list__address">{address}</span>

        <span className="contact-list__labels">
          {budgets.map((budget) => (
            <span key={budget} children={budget} />
          ))}
        </span>
      </button>
    </li>
  )
}

export default ContactItem
