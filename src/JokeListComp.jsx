import axios from "axios"
import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import JokeComp from "./JokeComp"
import "./JokeList.css"
import "./Joke.css"

const numJokesToGet = 10
const JokeListComp = () => {
  const [jokes, setJokes] = useState(
    JSON.parse(window.localStorage.getItem("jokes") || "[]")
  )

  const [loading, setLoading] = useState(false)

  const getJokes = async () => {
    setLoading(true)
    try {
      let newJokes = []
      while (newJokes.length < numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" },
        })
        let newJoke = res.data.joke
        newJokes.push({ text: newJoke, votes: 0, id: uuidv4() })
      }
      setLoading(false)
      setJokes(prevJokes => [...prevJokes, ...newJokes])
      window.localStorage.setItem("jokes", JSON.stringify(jokes))
    } catch (e) {
      alert(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    const unsub = () => {
      if (jokes.length === 0) {
        getJokes()
      }
    }

    return unsub()
  }, [])

  const handleVote = (id, delta) => {
    setJokes(prevJokes => {
      const newJokes = prevJokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
      return newJokes
    })
    window.localStorage.setItem("jokes", JSON.stringify(jokes))
  }

  const handleClick = () => {
    setLoading(true)
    getJokes()
  }

  return (
    <>
      {loading ? (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      ) : (
        <div className="JokeList">
          <div className="JokeList-sidebar">
            <h1 className="JokeList-title">
              <span>Dad</span> Jokes
            </h1>

            <img
              src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
              alt="face"
            />
            <button className="JokeList-getmore" onClick={handleClick}>
              Fetch Jokes
            </button>
          </div>
          <div className="JokeList-jokes">
            {jokes.map(j => {
              return (
                <JokeComp
                  key={j.id}
                  text={j.text}
                  votes={j.votes}
                  upvote={() => handleVote(j.id, 1)}
                  downvote={() => handleVote(j.id, -1)}
                />
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default JokeListComp
