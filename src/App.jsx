import { useState } from 'react';
import './App.css';

function App() {
  const [row, setRow] = useState([]);

  const btn = () => {
    fetch(
      'http://openapi.seoul.go.kr:8088/45426a744570797539356a4f4b6956/json/RealtimeCityAir/1/25/'
    ).then(function (res2) {
      res2.json().then(function (res3) {
        setRow(res3.RealtimeCityAir.row);
      });
    });
  };

  return (
    <>
      <h1>미세먼지</h1>
      <button onClick={btn}>API 호출</button>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>PM10</th>
            <th>O3</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {row.map(function (obj) {
            return (
              <tr>
                <td>{obj.MSRSTE_NM}</td>
                <td>{obj.PM10}</td>
                <td>{obj.O3}</td>
                <td>{obj.IDEX_NM}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
