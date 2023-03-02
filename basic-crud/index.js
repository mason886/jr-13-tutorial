const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 3000;

const items = [
  { name: '吃饭', isDone: true, id: 1 },
  { name: '睡觉', isDone: false, id: 2 },
  { name: '打豆豆', isDone: true, id: 3 },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  res.send('你好呀');
});

// 根据是否完成了返回items localhost:3000/items?done=true
app.get('/items', (req, res) => {
  const { done } = req.query;
  const isDone = done === 'true';

  if (!done) {
    return res.send(items);
  }

  let result = items.filter((item) => item.isDone === isDone);
  res.send(result);
});

// 根据id获取某一个item localhost:3000/items/1
app.get('/items/:itemId', (req, res) => {
  const itemId = parseInt(req.params.itemId, 10);
  const item = items.find((item) => item.id === itemId);
  if (!item) {
    return res.send('没有找到');
  }
  res.send(item);
});

app.post('/items', (req, res) => {
  // 拿到数据
  const item = req.body;
  // 操作数据
  item.idDone = false;
  item.id = items.length + 1;
  // 储存数据
  items.push(item);
  res.sendStatus(201);
});

app.patch('/items/:itemId', (req, res) => {
  // 找到item
  const itemId = parseInt(req.params.itemId, 10);
  // const item = items.find((item) => item.id === itemId);
  const itemIdex = items.findIndex((item) => item.id === itemId);
  console.log(itemIdex);
  if (itemIdex === -1) {
    return res.sendStatus(404);
  }
  // const obj1 = { a: 123, b: 312 };
  // const obj2 = { a: 567567, c: 'ccc' };
  // const obj3 = {
  //   ...obj1,
  //   ...obj2,
  // };
  // { a: 567567, b: 312, c: 'ccc' }
  items[itemIdex] = {
    ...items[itemIdex],
    ...req.body,
  };
  res.sendStatus(200);
});

app.delete('/items/:itemId', (req, res) => {
  // 找到item
  const itemId = parseInt(req.params.itemId, 10);
  const itemIdex = items.findIndex((item) => item.id === itemId);
  if (itemIdex === -1) {
    return res.sendStatus(404);
  }

  items.splice(itemIdex, 1);
  res.sendStatus(200);
});

const serverStartCallBack = () => {
  console.log(`Example app listening on port ${port}`);
};

app.listen(port, serverStartCallBack);
