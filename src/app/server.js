const express = require('express');
const app = express();
const port = 3000;

// Your Express application setup and middleware go here
const nano = require('nano')('http://admin:admin@localhost:5984');
const db = nano.use('demo');  // Replace 'demo' with your actual database name


// Fetch all blog posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await db.view('blog', 'all_posts');
    res.json(posts.rows.map(row => row.value));
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a new blog post
app.post('/api/posts', async (req, res) => {
  const newPost = req.body;

  try {
    const response = await db.insert(newPost);
    res.json({ id: response.id });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetch posts based on specified date (YYYY-MM-DD)
app.get('/api/posts/:date', async (req, res) => {
  const specifiedDate = req.params.date;

  try {
    const posts = await db.view('blog', 'posts_by_date', {
      startkey: specifiedDate,
      endkey: specifiedDate + '\ufff0',
    });

    res.json(posts.rows.map(row => row.value));
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
