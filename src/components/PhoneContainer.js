import React, { useState } from 'react'

import { connect } from 'react-redux'

import { buyPhone } from '../redux/phone/actionPhone'

import phone from '../images/phone.png'

const PhoneContainer = (props) => {
  const [totalPhone, setTotalPhone] = useState(1)
  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponibilité
        <span id="count">{props.phones}</span>
      </p>
      <p>
        Couleur
        <span id="count">{props.color}</span>
      </p>
      <div className="btnContainer">
        <button onClick={() => props.buyPhone(totalPhone)}>Acheter</button>
        <input
          type="number"
          value={totalPhone}
          onChange={(e) => setTotalPhone(e.target.value)}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    phones: state.phones.phones,
    color: state.phones.infos.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: (totalPhone) => dispatch(buyPhone(totalPhone))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer)
