import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Input,
  ImgSlider,
  PlatformIcon,
  Bundled,
  NotBundled,
} from "./components";
import Loader from "react-loader-spinner";

const StyledGame = styled.div`
  width: 980px;
  margin: 0 auto;
  color: inherit;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  .top-input {
    font-size: 21px;
    height: 27px;
    width: 260px;

    input {
      font-size: 21px;
      height: 25px;
      width: 260px;
    }
  }

  @media (max-width: 980px) {
    width: 96%;
  }
`;
const TopbarInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  h1 {
    font-size: 21px;
    margin: 0;
  }

  @media (max-width: 1240px) {
    margin-top: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const GameSection = styled.div`
  display: grid;
  grid-template-columns: 52% 1fr;
  margin-top: 6px;
  background-color: #1a1a1a;
  width: 960px;
  border-radius: 6px;

  @media (max-width: 980px) {
    width: 96%;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
`;
const GameDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;

  h1 {
    color: #fff;
    font-size: 18px;
    min-width: 72%;
    text-align: center;
    margin: 0;
    padding-bottom: 12px;
    border-bottom: 2px solid gray;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0;
    border-bottom: 2px solid gray;
    width: 72%;
    text-align: center;

    :last-of-type {
      border-bottom: none;
    }
  }

  .detailsQ {
    margin-right: 4px;
    line-height: 1.6em;
  }

  .detailsA {
    color: #fff;
    font-size: 14px;

    a {
      color: inherit;
      margin-right: 6px;
    }
  }

  .svg-icon {
    margin-right: 4px;
  }
`;

export default function Game(props) {
  const [loading, setLoading] = useState(true);
  const [gameInfo, setGameInfo] = useState([]);
  const [gameImg, setGameImg] = useState([]);
  const [databaseSearch, setDatabaseSearch] = useState([]);
  let params = new URLSearchParams(document.location.search.substring(1));
  const game_title = params.get("title");
  const game_id = params.get("id");

  useEffect(() => {
    const gameInfo = async () => {
      // Using RAWG API to get information about games
      await fetch(
        `https://api.rawg.io/api/games/${game_id}?key=a4f2b0f2ba644c9db2ed4fbcc863365e`,
        {
          headers: {
            "User-Agent": "inbundle.games",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setGameInfo(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      await fetch(
        `https://api.rawg.io/api/games/${game_id}/screenshots?key=a4f2b0f2ba644c9db2ed4fbcc863365e`,
        {
          headers: {
            "User-Agent": "inbundle.games",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setGameImg(data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    gameInfo();

    // send request to backend to search postgress database for a game that user typed in input
    // change whole game title to UPPERCASE to get rid of formatting problems in database <-> API
    const dbSearch = async () => {
      const BACKEND_URL = window.location.href.includes("localhost")
        ? "http://localhost:8888" // for development
        : "https://db.inbundle.games"; // for production

      await fetch(
        `${BACKEND_URL}/api/v1/games?title=${game_title.toUpperCase()}`
      )
        .then((response) => response.json())
        .then((data) => {
          // save response from backend
          setDatabaseSearch(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    dbSearch();
  }, [game_title, game_id]);

  return (
    <StyledGame>
      <TopbarInput>
        <h1>WAS</h1>
        <Input propClass="top-input" />
        <h1>IN A BUNDLE?</h1>
      </TopbarInput>

      {databaseSearch.length > 0 ? (
        <Bundled title={game_title} info={databaseSearch} />
      ) : (
        <NotBundled title={game_title} />
      )}

      {loading ? (
        <Loader
          className="loader"
          type="TailSpin"
          color="#fff"
          height={42}
          width={200}
          timeout={2500}
        />
      ) : (
        <GameSection>
          <ImgSlider img_list={gameImg} />

          <GameDetails>
            <h1>GAME DETAILS:</h1>

            <section>
              <div>
                <span className="detailsQ">Release date:</span>
                <span className="detailsA">{gameInfo.released}</span>
              </div>

              <div>
                <span className="detailsQ">Publisher:</span>
                <span className="detailsA">
                  {gameInfo.publishers && gameInfo.publishers.length > 0
                    ? gameInfo.publishers[0].name
                    : null}
                </span>
              </div>

              <div>
                <span className="detailsQ">Developer:</span>
                <span className="detailsA">
                  {gameInfo.developers && gameInfo.developers.length > 0
                    ? gameInfo.developers[0].name
                    : null}
                </span>
              </div>
            </section>

            <section>
              <div>
                <span className="detailsQ">Platforms:</span>
                <span className="detailsA">
                  {
                    //displaying max 5 platforms
                    gameInfo.platforms
                      ? gameInfo.platforms.map((e, i) =>
                          i <= 5 ? (
                            <PlatformIcon name={e.platform.name} key={i} />
                          ) : null
                        )
                      : null
                  }
                  {
                    //for more than 5 platforms we're displaying how much more there's left
                    gameInfo.platforms ? (
                      gameInfo.platforms.length > 5 ? (
                        <span style={{ fontSize: 12 }}>
                          +{gameInfo.platforms.length - 5}
                        </span>
                      ) : null
                    ) : null
                  }
                </span>
              </div>

              <div>
                <span className="detailsQ">Genres:</span>
                <span className="detailsA">
                  {gameInfo.genres
                    ? gameInfo.genres.map((e, i) =>
                        gameInfo.genres.length > 1 ? (
                          <span key={i}>{e.name}, </span>
                        ) : (
                          <span key={i}>{e.name} </span>
                        )
                      )
                    : null}
                </span>
              </div>
            </section>

            <section>
              <div>
                <span className="detailsQ">Website:</span>
                <a href={gameInfo.website} className="detailsA">
                  {gameInfo.developers && gameInfo.developers.length > 0
                    ? gameInfo.developers[0].name
                    : null}
                </a>
              </div>

              <div>
                <span className="detailsQ">Stores:</span>
                <span className="detailsA">
                  {gameInfo.stores
                    ? gameInfo.stores.map((e, i) => (
                        <a key={i} href={e.url}>
                          {e.store.name}
                        </a>
                      ))
                    : null}
                </span>
              </div>
            </section>
          </GameDetails>
        </GameSection>
      )}
    </StyledGame>
  );
}
