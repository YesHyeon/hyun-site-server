const express = require("express");
const cors = require("cors");
const app = express();
const port = 8082;

app.use(express.json()); //json 형식의 데이터를 처리할 수 있도록
app.use(cors()); // cors 적용하면 모든 브라우자에서 서버에 요청가능

app.get("/gallery", async (req, res) => {
  const query = req.query;
  console.log("QUERY :", query);
  res.send({
    jejudo: [
      { name: "Jejudo", imgUrl: "/images/gallery/jejudo1.jpeg" },
      { name: "Jejudo", imgUrl: "/images/gallery/jejudo8.jpeg" },
      { name: "Jejudo", imgUrl: "/images/gallery/jejudo3.jpeg" },
      { name: "Jejudo", imgUrl: "/images/gallery/jejudo4.jpeg" },
      { name: "Jejudo", imgUrl: "/images/gallery/jejudo5.jpeg" },
      { name: "Jejudo", imgUrl: "/images/gallery/jejudo6.jpeg" },
      { name: "Jejudo", imgUrl: "/images/gallery/jejudo7.jpeg" },
      { name: "Jejudo", imgUrl: "/images/gallery/jejudo9.jpeg" },
      { name: "Jejudo", imgUrl: "/images/gallery/jejudo10.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo12.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo13.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo14.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo15.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo16.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo17.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo18.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo19.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo20.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo21.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo22.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo23.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo24.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo25.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo26.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo27.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo29.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo30.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo31.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo32.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo33.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo34.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo35.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo36.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo37.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo38.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo39.jpeg" },
      { name: "Jejudo", imgUrl: "images/gallery/jejudo40.jpeg" },
    ],
    busan: [
      { name: "Busan", imgUrl: "images/gallery/busan1.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan2.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan3.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan4.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan5.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan6.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan7.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan8.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan9.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan10.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan11.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan12.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan13.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan14.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan17.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan18.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan19.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan20.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan21.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan22.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/busan23.jpeg" },
    ],
    gangneung: [
      { name: "Gangneung", imgUrl: "images/gallery/gangneung1.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung2.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung3.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung4.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung5.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung6.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung7.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung8.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung9.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung10.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung11.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung12.jpeg" },
      { name: "Busan", imgUrl: "images/gallery/gangneung13.jpeg" },
    ],
  });
});

app.post("/gallery", (req, res) => {
  const body = req.body;
  res.send({
    body,
  });
});

app.listen(port, () => {
  console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다.");
});
