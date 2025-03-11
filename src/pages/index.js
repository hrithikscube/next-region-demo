import React, { useEffect, useState } from 'react'

const Home = () => {

  const [coords, setCoords] = useState({
    latitude: '',
    longitude: ''
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
        setCoords({
          ...coords,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, [])

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>

      <p>Main Landing Page</p>

      <p>
        {coords?.latitude}
      </p>

      <p>
        {coords?.longitude}
      </p>


    </div>
  )
}

export default Home