import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { apiCall } from '../redux/comments/actionComments'

const CommentsContainer = ({ apiData, apiComment }) => {
  useEffect(() => {
    apiComment()
  }, [apiComment])

  console.log(apiData)

  const displayApiData = apiData.isLoading ? (
    <p>Loading...</p>
  ) : apiData.error ? (
    <p>{apiData.error}</p>
  ) : (
    apiData.comments.map((comment) => {
      return (
        <div key={comment.id} className="comments">
          {comment.body}
        </div>
      )
    })
  )

  return (
    <>
      <h2>Comments : </h2>
      <hr />
      {displayApiData}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    apiData: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    apiComment: () => dispatch(apiCall())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
