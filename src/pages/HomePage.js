import React from "react";
import { Link } from "react-router-dom";

const DUMMY_ANIME = [
  { id: "1", title: "귀멸의 칼날", img: "https://dummyimage.com/200x280/7f7fff/fff.png&text=귀멸의+칼날" },
  { id: "2", title: "원피스", img: "https://dummyimage.com/200x280/ffa07a/fff.png&text=원피스" },
  { id: "3", title: "나루토", img: "https://dummyimage.com/200x280/f9c/fff.png&text=나루토" }
];

export default function HomePage() {
  return (
    <main style={{ padding: "2em" }}>
      <h3>인기 애니 추천</h3>
      <div style={{ display: "flex", gap: "2em" }}>
        {DUMMY_ANIME.map(anime => (
          <Link key={anime.id} to={`/anime/${anime.id}`}>
            <div style={{
              boxShadow: "0 1px 4px rgba(0,0,0,.06)",
              background: "#fff",
              borderRadius: "8px",
              textAlign: "center",
              width: "200px"
            }}>
              <img src={anime.img} alt={anime.title} style={{ width: "100%", borderRadius: "8px 8px 0 0" }} />
              <div style={{ padding: "0.7em 0" }}>{anime.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "2em" }}>
        <Link to="/search"><button>애니 검색하기</button></Link>
      </div>
    </main>
  );
}
