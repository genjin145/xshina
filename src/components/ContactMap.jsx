import React from 'react'
import { YMaps, Map, Placemark, GeolocationControl } from 'react-yandex-maps'

function ContactMap({ geometry, options }) {
  return (
    <YMaps>
      <div className="contacts__map">
        <Map
          className="contacts__map-map"
          state={{
            center: geometry,
            zoom: 14,
          }}
        >
          <GeolocationControl options={{ float: 'left' }} />
          <Placemark geometry={geometry} options={options} />
        </Map>
      </div>
    </YMaps>
  )
}

export default React.memo(ContactMap)
