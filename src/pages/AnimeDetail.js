import React from "react";
import { useParams, Link } from "react-router-dom";

const DUMMY_ANIME = {
  "1": { title: "귀멸의 칼날", description: "귀멸의 칼날은 타인과 악마의 싸움을 그린 인기 애니메이션입니다.", img: "https://dummyimage.com/320x450/7f7fff/fff.png&text=귀멸의+칼날" },
  "2": { title: "원피스", description: "원피스는 해적왕을 꿈꾸는 루피의 모험을 담은 장편 애니.", img: "https://dummyimage.com/320x450/ffa07a/fff.png&text=원피스" },
  "3": { title: "나루토", description: "나루토는 닌자가 주인공인 액션 판타지 애니입니다.", img: "https://dummyimage.com/320x450/f9c/fff.png&text=나루토" }
};

export default function AnimeDetail() {
  const { id } = useParams();
  const anime = DUMMY_ANIME[id];

  if (!anime) return <div>존재하지 않는 애니입니다.</div>;

  return (
    <main style={{ padding: "2em" }}>
      <Link to="/">← 홈으로</Link>
      <div style={{ display: "flex", gap: "2em", alignItems: "flex-start", marginTop: "1.4em" }}>
        <img src={anime.img} alt={anime.title} style={{ borderRadius: "15px", width: "320px" }} />
        <div>
          <h2>{anime.title}</h2>
          <p>{anime.description}</p>
        </div>
      </div>
    </main>
  );
}
