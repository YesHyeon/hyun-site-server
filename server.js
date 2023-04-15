const express = require('express');
const cors = require('cors');
const app = express();
const port = 8082;
const mysql = require('mysql');
// const conn = {
//   // mysql 접속 설정
//   host: 'localhost',
//   port: '5000',
//   user: 'user',
//   password: 'pw',
//   database: 'monolithic',
// };
// var connection = mysql.createConnection(conn); // DB 커넥션 생성
// connection.connect(); // DB 접속

// var testQuery =
//   "INSERT INTO `members` (`username`,`password`) VALUES ('test','test');";

// connection.query(testQuery, function (err, results, fields) {
//   // testQuery 실행
//   if (err) {
//     console.log(err);
//   }
//   console.log(results);
// });

// testQuery = 'SELECT * FROM MEMBERS';

// connection.end(); // DB 접속 종료

app.use(express.json()); //json 형식의 데이터를 처리할 수 있도록
app.use(cors()); // cors 적용하면 모든 브라우자에서 서버에 요청가능

app.get('/gallery', async (req, res) => {
  const query = req.query;
  console.log('QUERY :', query);
  res.send({
    jejudo: [
      { name: 'Jejudo', imgUrl: 'jejudo1' },
      { name: 'Jejudo', imgUrl: 'jejudo8' },
      { name: 'Jejudo', imgUrl: 'jejudo3' },
      { name: 'Jejudo', imgUrl: 'jejudo4' },
      { name: 'Jejudo', imgUrl: 'jejudo5' },
      { name: 'Jejudo', imgUrl: 'jejudo6' },
      { name: 'Jejudo', imgUrl: 'jejudo7' },
      { name: 'Jejudo', imgUrl: 'jejudo9' },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo10',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo12',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo13',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo14',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo15',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo16',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo17',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo18',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo19',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo20',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo21',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo22',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo23',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo24',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo25',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo26',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo27',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo29',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo30',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo31',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo32',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo33',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo34',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo35',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo36',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo37',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo38',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo39',
      },
      {
        name: 'Jejudo',
        imgUrl: 'jejudo40',
      },
    ],
    busan: [
      { name: 'Busan', imgUrl: 'busan1' },
      { name: 'Busan', imgUrl: 'busan2' },
      { name: 'Busan', imgUrl: 'busan3' },
      { name: 'Busan', imgUrl: 'busan4' },
      { name: 'Busan', imgUrl: 'busan5' },
      { name: 'Busan', imgUrl: 'busan6' },
      { name: 'Busan', imgUrl: 'busan7' },
      { name: 'Busan', imgUrl: 'busan8' },
      { name: 'Busan', imgUrl: 'busan9' },
      { name: 'Busan', imgUrl: 'busan10' },
      { name: 'Busan', imgUrl: 'busan11' },
      { name: 'Busan', imgUrl: 'busan12' },
      { name: 'Busan', imgUrl: 'busan13' },
      { name: 'Busan', imgUrl: 'busan14' },
      { name: 'Busan', imgUrl: 'busan17' },
      { name: 'Busan', imgUrl: 'busan18' },
      { name: 'Busan', imgUrl: 'busan19' },
      { name: 'Busan', imgUrl: 'busan20' },
      { name: 'Busan', imgUrl: 'busan21' },
      { name: 'Busan', imgUrl: 'busan22' },
      { name: 'Busan', imgUrl: 'busan23' },
    ],
    gangneung: [
      {
        name: 'Gangneung',
        imgUrl: 'gangneung1',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung2',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung3',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung4',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung5',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung6',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung7',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung8',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung9',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung10',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung11',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung12',
      },
      {
        name: 'Busan',
        imgUrl: 'gangneung13',
      },
    ],
  });
});

app.post('/gallery', (req, res) => {
  const body = req.body;
  res.send({
    body,
  });
});

app.get('/gallery/:id', async (req, res) => {
  const params = req.params;
  res.send('');
});

app.listen(port, () => {
  console.log('현 포트폴리오 사이트 서버가 돌아가고 있습니다.');
});
