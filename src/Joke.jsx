import React from "react"
import "./Joke.css"

const colorsEmojis = {
  lessThanZero: {
    color: "#f44336",
    emoji: "em em-angry",
  },
  moreThanZero: {
    color: "#ff9800",
    emoji: "em em-confused",
  },
  moreThanThree: {
    color: "#ffc107",
    emoji: "em em-neutral_face",
  },
  moreThanSix: {
    color: "ffeb3b",
    emoji: "em em-slightly_smiling_face",
  },
  moreThanNine: {
    color: "#cddc39",
    emoji: "em em-smiley",
  },
  moreThanTweleve: {
    color: "#8bc34a",
    emoji: "em em-laughing",
  },
  moreThanFifteen: {
    color: "#4caf50",
    emoji: "em em-rolling_on_the_floor_laughing",
  },
}

const JokeComp = ({ text, votes, upvote, downvote }) => {
  const getColorEmoji = type => {
    if (votes >= 15) {
      return colorsEmojis.moreThanFifteen[type]
    } else if (votes >= 12) {
      return colorsEmojis.moreThanTweleve[type]
    } else if (votes >= 9) {
      return colorsEmojis.moreThanNine[type]
    } else if (votes >= 6) {
      return colorsEmojis.moreThanSix[type]
    } else if (votes >= 3) {
      return colorsEmojis.moreThanThree[type]
    } else if (votes >= 0) {
      return colorsEmojis.moreThanZero[type]
    } else {
      return colorsEmojis.lessThanZero[type]
    }
  }

  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up" onClick={upvote} />
        <span
          className="Joke-votes"
          style={{ borderColor: getColorEmoji("color") }}
        >
          {votes}
        </span>
        <i className="fas fa-arrow-down" onClick={downvote} />
      </div>
      <div className="Joke-text">{text}</div>
      <div className="Joke-smiley">
        <i className={getColorEmoji("emoji")} />
      </div>
    </div>
  )
}
export default JokeComp

//<i class="em em-bird" aria-role="presentation" aria-label="BIRD"></i>
