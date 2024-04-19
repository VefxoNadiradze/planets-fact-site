import styled from "styled-components";
import Datas from "../data.json";
import { useParams } from "react-router-dom";
import Sourceicon from "/assets/icon-source.svg";
import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
interface PlanetSizes {
  Desktop: { height: string; width: string };
  Tablet: { height: string; width: string };
  Mobile: { height: string; width: string };
}

export default function Planets() {
  let { Planet } = useParams();
  let Planets = Datas.find((item) => item.name === Planet);

  const [overview, setOverview] = useState<boolean>(true);
  const [structure, setStructure] = useState<boolean>(false);
  const [geology, setGeology] = useState<boolean>(false);

  const HandleDescription = (event: MouseEvent<HTMLButtonElement>) => {
    let target = event.target as HTMLElement;

    if (target.firstElementChild?.innerHTML === "01") {
      setOverview(true);
      setStructure(false);
      setGeology(false);
    } else if (target.firstElementChild?.innerHTML === "02") {
      setOverview(false);
      setStructure(true);
      setGeology(false);
    } else if (target.firstElementChild?.innerHTML === "03") {
      setOverview(false);
      setStructure(false);
      setGeology(true);
    }
  };

  return (
    <>
      {Planets && (
        <PlanetImageAbout
          planetSizes={Planets?.planetSize}
          planetName={Planets.name}
        >
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
            </motion.div>

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
                transform: "perspective(1000px) rotateY(0deg)  translateY(0px)",
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
                transform: "perspective(1000px) rotateX(0deg)  translateY(0px)",
              }}
              transition={{ duration: 1.1 }}
            >
              Source:
              <a href={Planets.overview.source} className="source">
                Wikipedia
                <img src={Sourceicon} alt="source icon" />
              </a>
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
}>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 96px;
  color: white;

  img {
    height: ${(props) => props.planetSizes.Desktop.height};
    width: ${(props) => props.planetSizes.Desktop.width};
  }

  .AboutPlanet {
    display: flex;
    flex-direction: column;

    .planetName {
      color: rgb(255, 255, 255);
      font-family: "Antonio", sans-serif;
      font-size: 80px;
      font-weight: 400;
      line-height: 104px;
      text-transform: uppercase;
      margin-bottom: 23px;
    }

    .Description {
      color: rgb(255, 255, 255);
      max-width: 350px;
      font-size: 14px;
      font-weight: 400;
      line-height: 25px;
      margin-bottom: 23px;
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

        img {
          width: 12px;
          height: 12px;
          margin-left: 15px;
        }
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

        span {
          opacity: 0.5;
          margin-right: 28px;
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

    p {
      color: rgb(255, 255, 255);
      font-size: 11px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      opacity: 0.5;
    }

    h4 {
      color: rgb(255, 255, 255);
      font-family: "Antonio", sans-serif;
      font-size: 40px;
      font-weight: 400;
      line-height: 52px;
      letter-spacing: -1.5px;
      text-transform: uppercase;
    }
  }
`;
