const express = require('express');

const app = express();

// x-www-form-urlencoded를 파싱하기 위해 사용
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.listen(3000);
