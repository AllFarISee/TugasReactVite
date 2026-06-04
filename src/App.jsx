import { useState } from "react"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import MovieCard from "./components/MovieCard"
import './components/style/components.css'
import './components/style/profile.css'
import './components/style/moviecard.css'
import './App.css'
import data from './Database/Database.js'
import zodiac from "./Database/Zodiac.js"
import Modal from "./components/Modal.jsx"

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const name = "Alfarisi"
  const birthDay = "28 August 2002"
  const job = "Mechanical & Electrical Engineering Technician"

  // Age Check
  const birthDate = new Date(birthDay)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthGap = today.getMonth() - birthDate.getMonth()
  if(
    monthGap < 0 ||
    (monthGap === 0 && today.getDate() < birthDate.getDate())
  ){
    age = age - 1
  }

  const handleClick = () => {
    setShowModal(true)
  }

  // Zodiac
  const getZodiac = (birthDay) => {
  const date = new Date(birthDay)

  const month = date.getMonth() + 1
  const day = date.getDate()

  return zodiac.find((zodiacs) => {
    if (zodiacs.startMonth === 12 && zodiacs.endMonth === 1) {
      return (
        (month === 12 && day >= zodiacs.startDay) ||
        (month === 1 && day <= zodiacs.endDay)
      )
    }
    return (
      (month === zodiacs.startMonth && day >= zodiacs.startDay) ||
      (month === zodiacs.endMonth && day <= zodiacs.endDay)
    )
  })}
  const zodiacData = getZodiac(birthDay)

  return (
    <div>
      <Navbar/>
      <div className="profile">
        <Profile
          name={name}
          birthDay={birthDay}
          age={age}
          job={job}
          handleClick={handleClick}
        />
      </div>
      <h1 className="title-section">Top Favorites Movies</h1>
      <div className="card-container">
        {
          data.map((x) => (
            <MovieCard
              key={x.id}
              image={x.image}
              title={x.title}
            />
          ))
        }
      </div>
      <Modal
        show={showModal}
        getZodiac={zodiacData}
        onClose={() => setShowModal(false)}
      />
    </div>
  )
}

export default App
