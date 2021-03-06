import React from 'react'
import ToggleableButton from '../components/toggleable_button'

export default function ButtonList(props) {
  function handleButtonClick(e) {
    let clickedStation = e.target.innerText
    props.onClick(e)
  }

  const stations = props.stationList.map((station, index) => {
    return (
      <ToggleableButton
        key={index}
        onClick={handleButtonClick}
        station={station.name}
        coordinates={station.pos}
        onInit={props.onInit}
        clickedStation={props.clickedStation}
      />
    )
  })
  return (
    <>
      <ul className="station-list">{stations}</ul>
    </>
  )
}
