// Create Web server
const express = require('express');
const app = express();
const port = 3000;

// Add comments
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start Web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

### 4.2.3. Run the Web server

1. Run the Web server by running the `npm start` command
1. In the browser, go to `http://localhost:3000/`
1. You should see the message `Hello World!`
1. In the browser, go to `http://localhost:3000/anything`
1. You should see the message `Cannot GET /anything`

## 4.3. Add a logger

### 4.3.1. Add the logger

1. Install the `morgan` package by running the following command: `npm install morgan`
1. Add the following code to the `comments.js` file

```js
// Path: .devcontainer\comments.js
// Create Web server
const express = require('express');
const app = express();
const port = 3000;

// Add logger
const morgan = require('morgan');
app.use(morgan('dev'));

// Add comments
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start Web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

### 4.3.2. Run the Web server

1. Run the Web server by running the `npm start` command
1. In the browser, go to `http://localhost:3000/`
1. You should see the message `Hello World!`
1. In the terminal, you should see the log of the request

## 4.4. Add a database

### 4.4.1. Create the database

1. Create a new PostgreSQL database named `comments`
1. Create a new table named `comment` with the following columns:
   - `id` (integer)
   - `name` (character varying)
   - `content` (character varying)
   - `created_at` (timestamp without time zone)
   - `updated_at` (timestamp without time zone)

### 4.4.2.