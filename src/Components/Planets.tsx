import styled from "styled-components";
import Datas from "../data.json";
import { useParams } from "react-router-dom";
import Sourceicon from "/assets/icon-source.svg";
import { useState, MouseEvent, useEffect } from "react";
import { motion } from "framer-motion";
interface PlanetSizes {
  Desktop: { height: string; width: string };
  Tablet: { height: string; width: string };
  Mobile: { height: string; width: string };
}

interface ActiveInterface {
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  activeColor: string | {};
}

export default function Planets({
  setActiveLink,
  activeColor,
}: ActiveInterface) {
  let { Planet } = useParams();
  let Planets = Datas.find((item) => item.name === Planet);
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    setActiveLink(`/Page/${Planet}`);
  }, [Planet, setActiveLink]);

  const [overview, setOverview] = useState<boolean>(true);
  const [structure, setStructure] = useState<boolean>(false);
  const [geology, setGeology] = useState<boolean>(false);

  const HandleDescription = (event: MouseEvent<HTMLButtonElement>) => {
    let target = event.target as HTMLElement;

    if (target.firstElementChild?.innerHTML === "01") {
      setOverview(true);
      setStructure(false);
      setGeology(false);
      setActiveButton(target.firstElementChild.innerHTML);
    } else if (target.firstElementChild?.innerHTML === "02") {
      setOverview(false);
      setStructure(true);
      setGeology(false);
      setActiveButton(target.firstElementChild.innerHTML);
    } else if (target.firstElementChild?.innerHTML === "03") {
      setOverview(false);
      setStructure(false);
      setGeology(true);
      setActiveButton(target.firstElementChild.innerHTML);
    }
  };

  return (
    <>
      {Planets && (
        <PlanetImageAbout
          planetSizes={Planets?.planetSize}
          planetName={Planets.name}
          activeColor={activeColor}
        >
          <motion.div
            className="MobileButtonsParent"
            initial={{
              opacity: 0,

              transformStyle: "preserve-3d",
              transform: "perspective(1000px) rotateY(80deg) translateX(30px)",
            }}
            animate={{
              opacity: 1,

              transformStyle: "preserve-3d",
              transform: "perspective(1000px) rotateY(0deg)  translateX(0px)",
            }}
            transition={{ duration: 1.1 }}
          >
            <button onClick={(e) => HandleDescription(e)}>
              <span>01</span>OVERVIEW
            </button>

            <button onClick={(e) => HandleDescription(e)}>
              <span>02</span> Internal Structure
            </button>
            <button onClick={(e) => HandleDescription(e)}>
              <span>03</span>
              Surface Geology
            </button>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,

              transformStyle: "preserve-3d",
              transform:
                "perspective(1000px) rotateY(180deg) translateY(200px)",
            }}
            animate={{
              opacity: 1,

              transformStyle: "preserve-3d",
              transform: "perspective(1000px) rotateY(0deg)  translateY(0px)",
            }}
            transition={{ duration: 1.1 }}
          >
            <img src={Planets.images.planet} alt="Planet Image" />
          </motion.div>
          <div className="AboutPlanet">
            <motion.div
              initial={{
                opacity: 0,

                transformStyle: "preserve-3d",
                transform:
                  "perspective(1000px) rotateY(-80deg) translateX(-250px)",
              }}
              animate={{
                opacity: 1,

                transformStyle: "preserve-3d",
                transform: "perspective(1000px) rotateY(0deg)  translateY(0px)",
              }}
              transition={{ duration: 1.1 }}
            >
              <h2 className="planetName">{Planets.name}</h2>

              <motion.div
                initial={{
                  opacity: 0,

                  transformStyle: "preserve-3d",
                  transform:
                    "perspective(1000px) rotateY(80deg) translateX(150px)",
                }}
                animate={{
                  opacity: 1,

                  transformStyle: "preserve-3d",
                  transform:
                    "perspective(1000px) rotateY(0deg)  translateY(0px)",
                }}
                transition={{ duration: 1.1 }}
              >
                <p className="Description">
                  {overview && Planets.overview.content}
                  {structure && Planets.structure.content}
                  {geology && Planets.geology.content}
                </p>
              </motion.div>

              <motion.div
                className="sourceParent"
                initial={{
                  opacity: 0,

                  transformStyle: "preserve-3d",
                  transform:
                    "perspective(1000px) rotateX(80deg) translateY(30px)",
                }}
                animate={{
                  opacity: 1,

                  transformStyle: "preserve-3d",
                  transform:
                    "perspective(1000px) rotateX(0deg)  translateY(0px)",
                }}
                transition={{ duration: 1.1 }}
              >
                Source:
                <a href={Planets.overview.source} className="source">
                  Wikipedia
                  <img src={Sourceicon} alt="source icon" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="buttonsParent"
              initial={{
                opacity: 0,

                transformStyle: "preserve-3d",
                transform:
                  "perspective(1000px) rotateY(80deg) translateX(30px)",
              }}
              animate={{
                opacity: 1,

                transformStyle: "preserve-3d",
                transform: "perspective(1000px) rotateY(0deg)  translateX(0px)",
              }}
              transition={{ duration: 1.1 }}
            >
              <button
                className={activeButton == "01" ? "activeButton" : ""}
                onClick={(e) => HandleDescription(e)}
              >
                <span>01</span>OVERVIEW
              </button>

              <button
                className={activeButton == "02" ? "activeButton" : ""}
                onClick={(e) => HandleDescription(e)}
              >
                <span>02</span> Internal Structure
              </button>
              <button
                className={activeButton == "03" ? "activeButton" : ""}
                onClick={(e) => HandleDescription(e)}
              >
                <span>03</span>
                Surface Geology
              </button>
            </motion.div>
          </div>
        </PlanetImageAbout>
      )}

      <PlanetsFooter>
        <motion.div
          initial={{
            opacity: 0,

            transformStyle: "preserve-3d",
            transform: "perspective(1000px) rotateY(50deg) translateX(30px)",
          }}
          animate={{
            opacity: 1,
            transformStyle: "preserve-3d",
            transform: "perspective(1000px) rotateY(0deg)  translateX(0px)",
          }}
          transition={{ duration: 1.1 }}
        >
          <p>ROTATION TIME</p>
          <h4>{Planets?.rotation} </h4>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,

            transformStyle: "preserve-3d",
            transform: "perspective(1000px) rotateY(50deg) translateX(30px)",
          }}
          animate={{
            opacity: 1,
            transformStyle: "preserve-3d",
            transform: "perspective(1000px) rotateY(0deg)  translateX(0px)",
          }}
          transition={{ duration: 1.1 }}
        >
          <p>REVOLUTION TIME</p>
          <h4>{Planets?.revolution} </h4>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,

            transformStyle: "preserve-3d",
            transform: "perspective(1000px) rotateY(50deg) translateX(30px)",
          }}
          animate={{
            opacity: 1,
            transformStyle: "preserve-3d",
            transform: "perspective(1000px) rotateY(0deg)  translateX(0px)",
          }}
          transition={{ duration: 1.1 }}
        >
          <p>radius</p>
          <h4>{Planets?.radius} </h4>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,

            transformStyle: "preserve-3d",
            transform: "perspective(1000px) rotateY(50deg) translateX(30px)",
          }}
          animate={{
            opacity: 1,
            transformStyle: "preserve-3d",
            transform: "perspective(1000px) rotateY(0deg)  translateX(0px)",
          }}
          transition={{ duration: 1.1 }}
        >
          <p>AVERAGE TEMP.</p>
          <h4>{Planets?.temperature} </h4>
        </motion.div>
      </PlanetsFooter>
    </>
  );
}

const PlanetImageAbout = styled.div<{
  planetSizes: PlanetSizes;
  planetName: string;
  activeColor: string | {};
}>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 96px;
  color: white;

  .MobileButtonsParent {
    display: none;

    @media screen and (max-width: 660px) {
      margin-bottom: 96px;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #393850;
      width: 100%;
      column-gap: 43px;
      button {
        border: none;
        background-color: transparent;
        padding: 20px 0;
        color: rgb(255, 255, 255);
        font-size: 9px;
        font-weight: 700;
        line-height: 10px;
        letter-spacing: 1.93px;
        text-transform: uppercase;

        span {
          display: none;
        }
      }
    }

    @media screen and (max-width: 428px) {
      column-gap: 18px;
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 970px) {
    flex-direction: column;
  }

  @media screen and (max-width: 660px) {
    margin-top: 0;
  }

  img {
    height: ${(props) => props.planetSizes.Desktop.height};
    width: ${(props) => props.planetSizes.Desktop.width};

    @media screen and (max-width: 1032px) {
      height: ${(props) => props.planetSizes.Tablet.height};
      width: ${(props) => props.planetSizes.Tablet.width};
    }

    @media screen and (max-width: 500px) {
      height: ${(props) => props.planetSizes.Mobile.height};
      width: ${(props) => props.planetSizes.Mobile.width};
    }
  }

  .AboutPlanet {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 970px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }

    @media screen and (max-width: 660px) {
      justify-content: center;
      text-align: center;
      margin-top: 98px;
    }

    .planetName {
      color: rgb(255, 255, 255);
      font-family: "Antonio", sans-serif;
      font-size: 80px;
      font-weight: 400;
      line-height: 104px;
      text-transform: uppercase;
      margin-bottom: 23px;

      @media screen and (max-width: 970px) {
        font-size: 48px;
      }

      @media screen and (max-width: 660px) {
        margin-bottom: 19px;
      }
    }

    .Description {
      color: rgb(255, 255, 255);
      max-width: 350px;
      font-size: 14px;
      font-weight: 400;
      line-height: 25px;
      margin-bottom: 23px;

      @media screen and (max-width: 970px) {
        font-size: 11px;
      }
    }

    .sourceParent {
      display: flex;
      align-items: center;
      margin-bottom: 39px;

      .source {
        color: rgb(255, 255, 255);
        font-size: 14px;
        font-weight: 700;
        line-height: 25px;
        margin-left: 10px;

        @media screen and (max-width: 970px) {
          font-size: 12px;
        }

        img {
          width: 12px;
          height: 12px;
          margin-left: 15px;
        }
      }
      @media screen and (max-width: 660px) {
        justify-content: center;
      }
    }

    .buttonsParent {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      cursor: pointer;

      button {
        padding: 13px 28px;
        background-color: transparent;
        cursor: pointer;
        text-align: left;
        color: rgb(255, 255, 255);
        font-size: 12px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 2.57px;
        text-transform: uppercase;
        box-sizing: border-box;
        border: 1px solid #393850;
        transition: 0.5s ease-in-out;

        &.activeButton {
          background-color: ${(props) => props.activeColor};
        }

        &:hover {
          background-color: ${(props) => props.activeColor};
        }

        @media screen and (max-width: 970px) {
          font-size: 9px;
          letter-spacing: 1.93px;
          padding: 8px 20px;
        }

        @media screen and (max-width: 660px) {
          display: none;
        }

        span {
          opacity: 0.5;
          margin-right: 28px;

          @media screen and (max-width: 970px) {
            margin-right: 15px;
          }
        }
      }
    }
  }
`;

const PlanetsFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 87px;
  flex-wrap: wrap;

  div {
    padding: 20px 23px 27px 23px;
    min-width: 255px;
    box-sizing: border-box;
    border: 1px solid #2f2f47;

    @media screen and (max-width: 970px) {
      padding: 16px 15px 19px 15px;
      min-width: 164px;
    }

    p {
      color: rgb(255, 255, 255);
      font-size: 11px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      opacity: 0.5;

      @media screen and (max-width: 970px) {
        font-size: 8px;
      }
    }

    h4 {
      color: rgb(255, 255, 255);
      font-family: "Antonio", sans-serif;
      font-size: 40px;
      font-weight: 400;
      line-height: 52px;
      letter-spacing: -1.5px;
      text-transform: uppercase;
      @media screen and (max-width: 970px) {
        font-size: 24px;
      }
    }
  }
`;
