import React, { useState, useEffect, useMemo } from 'react'
import ContactList from './ContactList.jsx'
import ContactMap from './ContactMap.jsx'
import { fetchPoints } from '../api'
import { geometryDefault, placemarkOptions } from '../ymap/options'

function Contacts() {
  const [currentPoint, setCurrentPoint] = useState(0)
  const [points, setPoints] = useState([])
  const geometry = points.length
    ? [points[currentPoint].latitude, points[currentPoint].longitude]
    : geometryDefault
  const memoGeometry = useMemo(() => geometry, [currentPoint, points])

  useEffect(() => {
    fetchPoints().then((data) => setPoints(data.pickPoints))
  }, [])

  return (
    <div className="container">
      <section className="contacts">
        <h2 className="visually-hidden">Контакты</h2>

        <ContactList
          points={points}
          currentPoint={currentPoint}
          setCurrentPoint={setCurrentPoint}
        />

        <ContactMap geometry={memoGeometry} options={placemarkOptions} />
      </section>
    </div>
  )
}

export default Contacts
