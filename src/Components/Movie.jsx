import { useScrollTrigger } from "@material-ui/core";
import "../css/Movie.css";
import { useState } from "react";

//movie 컴포넌트

function Movie({ data }) {
  const [hover, setHover] = useState(false); //hover 상태 관리
  const PosterUrl = `https://image.tmdb.org/t/p/w1280/${data.poster_path}`; //이미지 url 수정

  const handleHover = () => {
    //마우스 오버 시 hover true로 변경
    setHover(true);
  };

  const handleLeave = () => {
    //마우스 오버 시 hover false로 변경
    setHover(false);
  };
  return (
    <div
      onMouseEnter={handleHover} //마우스 오버 이벤트
      onMouseLeave={handleLeave}
      className={`movieWrap ${hover ? "hovered" : ""}`}
      //className={hover ? "hovered" : "movieWrap"} 이렇게 써도 됨.
    >
      <img className={`poster ${hover ? "hidden" : ""}`} src={PosterUrl} />
      <div className={`textWrap ${hover ? "hidden" : ""}`}>
        <div className="title">{data.title}</div>
        <div className="rate">{data.vote_average}</div>
      </div>
      {hover && (
        <div className="hoverwrap">
          <div className="hovertitle">{data.title}</div>
          <div className="overview">{data.overview}</div>
        </div>
      )}
    </div>
  );
}

export default Movie;
