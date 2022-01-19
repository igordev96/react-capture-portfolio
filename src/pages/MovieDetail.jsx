import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../MovieState";
import { useEffect, useState } from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export default function MovieDetail() {
  const location = useLocation();
  const url = location.pathname;
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    currentMovie[0] && setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award, index) => (
              <Award
                key={index}
                title={award.title}
                description={award.description}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="secondary movie" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
}

const Details = styled(motion.div)`
  color: white;
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 915px) {
    flex-direction: column;
    margin: 0;
    text-align: center;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    height: 0.5rem;
    background: #23d997;
    margin: 1rem 0rem;
    @media screen and (max-width: 915px) {
      width: 100%;
    }
  }
  p {
    padding: 2rem 0rem;
  }
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media screen and (max-width: 700px) {
    h2 {
      text-align: center;
    }
    img {
      object-fit: contain;
      height: auto;
      margin-top: 5rem;
    }
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  @media screen and (max-width: 915px) {
    min-height: 10vh;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media screen and (max-width: 915px) {
      height: 100%;
      object-fit: contain;
    }
  }
`;

//Award component

function Award({ title, description }) {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
}
