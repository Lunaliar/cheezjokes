import React from "react"
import "./Joke.css"

const JokeComp = ({ text, votes, upvote, downvote }) => {
  const getColor = () => {
    if (votes >= 15) {
      return "#4caf50"
    } else if (votes >= 12) {
      return "#8bc34a"
    } else if (votes >= 9) {
      return "#cddc39"
    } else if (votes >= 6) {
      return "#ffeb3b"
    } else if (votes >= 3) {
      return "#ffc107"
    } else if (votes >= 0) {
      return "#ff9800"
    } else {
      return "#f44336"
    }
  }

  const getEmoji = () => {
    if (votes >= 15) {
      return "em em-rolling_on_the_floor_laughing"
    } else if (votes >= 12) {
      return "em em-laughing"
    } else if (votes >= 9) {
      return "em em-smiley"
    } else if (votes >= 6) {
      return "em em-slightly_smiling_face"
    } else if (votes >= 3) {
      return "em em-neutral_face"
    } else if (votes >= 0) {
      return "em em-confused"
    } else {
      return "em em-angry"
    }
  }

  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up" onClick={upvote} />
        <span className="Joke-votes" style={{ borderColor: getColor() }}>
          {votes}
        </span>
        <i className="fas fa-arrow-down" onClick={downvote} />
      </div>
      <div className="Joke-text">{text}</div>
      <div className="Joke-smiley">
        <i className={getEmoji()} />
      </div>
    </div>
  )
}
export default JokeComp

//<i class="em em-bird" aria-role="presentation" aria-label="BIRD"></i>
