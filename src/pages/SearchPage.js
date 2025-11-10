import React, { useState } from "react";
import { Link } from "react-router-dom";

const DUMMY_ANIME = [
  { id: "1", title: "귀멸의 칼날" },
  { id: "2", title: "원피스" },
  { id: "3", title: "나루토" }
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const result = DUMMY_ANIME.filter(a => a.title.includes(query));

  return (
    <main style={{ padding: "2em" }}>
      <Link to="/">← 홈으로</Link>
      <h3>애니 검색</h3>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="애니 제목을 입력하세요"
        style={{ padding: "0.5em", width: "250px", marginRight: "1em" }}
      />
      <div style={{ marginTop: "2em" }}>
        {result.length === 0 ? "검색 결과 없음" : (
          <ul>
            {result.map(a => (
              <li key={a.id}>
                <Link to={`/anime/${a.id}`}>{a.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
