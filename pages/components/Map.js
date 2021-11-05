import React from 'react'
import { useEffect }  from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjaWQtZHJlYW1lciIsImEiOiJja3ZtOWVtODIxZG95Mm90a3F3Y3B1MXpoIn0.MLbpXRO5mayl34wOWo1tig'

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style : 'mapbox://styles/mapbox/streets-v11',
          center: [-99.29011, 39.39172],
          zoom: 3,
        })
      })
    
    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
bg-red-500 flex-1
`
