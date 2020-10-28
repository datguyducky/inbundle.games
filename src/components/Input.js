import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const StyledForm = styled.form`
  margin: 12px 0;

  input {
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    border: none;
    color: #fff;
    width: 480px;
    font-size: 44px;
    font-family: "Spartan", sans-serif;
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 48px;

    :focus,
    :active {
      outline: none;
    }

    @media (max-width: 960px) {
      font-size: 24px;
      height: 28px;
    }

    @media (max-width: 560px) {
      width: 240px;
    }

    @media (max-width: 380px) {
      font-size: 18px;
      height: 22px;
    }
  }
  h3 {
    position: absolute;
  }
  label {
    position: relative;
    width: 480px;
    display: block;
    display: flex;
    margin: 0 16px;
    font-size: 44px;
    font-weight: 400;
    height: 50px;
    align-items: flex-end;
    border-bottom: 2px solid currentColor;
    overflow: hidden;

    #u-text {
      color: #fff;
    }

    @media (max-width: 960px) {
      font-size: 24px;
      height: 30px;
    }

    @media (max-width: 560px) {
      width: 240px;
    }

    @media (max-width: 380px) {
      font-size: 18px;
      height: 24px;
    }
  }
`;

function Input(props) {
  const [SearchValue, setSearch] = useState("");
  const [recentSearch, setRecent] = useState(true);
  const [stopTyping, setStopTyping] = useState(false);
  
  let params = new URLSearchParams(document.location.search.substring(1));
  const game_title = params.get("title");

  // Array with title of games for auto-typing effect on search input
  const gamesArr = [
    "Grand Theft Auto V",
    "Rimworld",
    "My Friend Pedro",
    "Fallout 76",
    "Stardew Valley",
    "Prison Architect",
    "Frostpunk",
  ];

  const searchHandler = async (e) => {
    // to be available to search for other game, when we're on SEARCH route or even further
    setRecent(false);

    const target = e.target;
    const value = target.value;
    setSearch(value);
  };

  useEffect(() => {
    if (SearchValue) {
      const timeout = setTimeout(() => setStopTyping(true), 1000);
      return () => clearTimeout(timeout);
    } else {
      setStopTyping(false);
    }
  }, [SearchValue]);

  const submitHandler = (event) => {
    // kinda hacky way to submit form without button, but with only by pressing ENTER key
    event.preventDefault();
    props.history.push({
      pathname: "/search",
      state: { game_title: SearchValue },
      search: `?title=${SearchValue}`,
    });
    // it takes us to SEARCH route with game_title query
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <label id="lb" className={props.propClass}>
        <span id="u-text">
          {SearchValue === "" ? (
            game_title ? (
              ""
            ) : (
              <ReactTypingEffect
                text={gamesArr}
                typingDelay="1000"
                eraseDelay="2000"
                speed="200"
              />
            )
          ) : (
            ""
          )}
        </span>

        <input
          type="text"
          value={game_title && recentSearch ? game_title : SearchValue}
          onChange={(e) => searchHandler(e)}
          autoFocus={props.autoFocus}
        />
      </label>

      <input type="submit" hidden />
      {
        stopTyping ? <h3>Press enter to search for a game</h3> : ''
      }
      
    </StyledForm>
  );
}

export default withRouter(Input);
