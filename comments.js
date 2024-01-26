// Create web server
// 1. Create web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('Get all comments');
});

// 3. Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('Create a new comment');
});

// 4. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('Get a comment by id');
});

// 5. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send('Update a comment by id');
});

// 6. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send('Delete a comment by id');
});

// Start web server
const port = 3000;
app.listen(port, () => {
  console.log(`Web server is running at http://localhost:${port}`);
});
