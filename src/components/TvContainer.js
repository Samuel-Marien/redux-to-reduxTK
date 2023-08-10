import React, { useState } from 'react'

import { connect } from 'react-redux'

import { buyTv } from '../redux/tv/actionTv'

import tv from '../images/tv.png'

const TvContainer = (props) => {
  const [totalTv, setTotalTv] = useState(1)

  return (
    <div className="container">
      <img src={tv} atl="tv" />
      <p>
        Disponibilité <span id="count">{props.tv}</span>
      </p>
      <div className="btnContainer">
        <button onClick={() => props.buyTv(totalTv)}>Acheter</button>
        <input
          type="number"
          value={totalTv}
          onChange={(e) => setTotalTv(e.target.value)}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tv: state.television.tv
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyTv: (totalTv) => dispatch(buyTv(totalTv))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvContainer)
