import React from "react";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CreateTweet from "../components/CreateTweet";
import TweetList from "../components/TweetList";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { HomeContext } from "../context/HomeContext";
import { useCollection } from "../hooks/useCollection";

function Homepage() {
  const { documents: tweets, setDocuments: setTweets } =
    useCollection("tweets");
  const [isLoading] = useState(false);
  const { userName } = useContext(UserContext);
  const [checked, setChecked] = useState(false);
  function addTweet(newTweet) {
    setTweets((preTweets) => [...preTweets, newTweet]);
  }
  const handleChange = () => {
    setChecked(previous => !previous);
  };

  return (
    <>
      <input type="checkbox" checked = {checked} id ="box" name="box" onChange={handleChange}></input>
      <label for="box">click me </label> 
      <HomeContext.Provider value={{ addTweet, userName, tweets }}>
        {isLoading && <CircularProgress />}
        {!isLoading && <CreateTweet />}

        {checked && <div></div>}
        {!checked && 
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* {tweets
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((tweet) => (
                <TweetList
                  key={tweet.id}
                  content={tweet.content}
                  userName={tweet.userName}
                  date={tweet.date}
                />
              ))} */}

            
            {tweets
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((tweet) => (
                <TweetList
                  key={tweet.id}
                  content={tweet.content}
                  userName={tweet.userName}
                  date={tweet.date}
                />
              ))}
        </div>
        }
      </HomeContext.Provider>
    </>
  );
}

export default Homepage;
