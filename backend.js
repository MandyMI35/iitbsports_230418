const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// hashmap to store posts
const blogs = new Map();

// Create a new blog post
app.post('/blogs', (req, res) => {
  const { createdby, date, title, body } = req.body;
  const id = blogs.size + 1; // assigning id
  
  const newBlog = { id, createdby, date, title, body };
  blogs.set(id, newBlog);

  res.status(201).json(newBlog);
});


app.get('/blogs', (req, res) => {
  const allBlogs = Array.from(blogs.values());
  res.json(allBlogs);
});


app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.get(id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).send('Blog post not found');
  }
});


app.put('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { createdby, date, title, body } = req.body;
  const updatedBlog = { id, createdby, date, title, body };

  if (blogs.has(id)) {
    blogs.set(id, updatedBlog);
    res.json(updatedBlog);
  } else {
    res.status(404).send('Blog post not found');
  }
});

app.delete('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  if (blogs.has(id)) {
    blogs.delete(id);
    res.sendStatus(204);
  } else {
    res.status(404).send('Blog post not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// [
//     {
//         "id": 2,
//         "createdby": "userx",
//         "date": "3-april-2024",
//         "title": "xxx",
//         "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda veniam officiis molestiae, voluptatibus cupiditate ipsum fugiat animi labore! Iste impedit reprehenderit quisquam maxime corporis! Ipsum, quia atque? Modi ipsum ipsam delectus eligendi iusto velit ut asperiores saepe nemo, cupiditate itaque. Enim sapiente eum deserunt repellendus doloribus corrupti omnis adipisci laboriosam."
//     },
//     {
//         "id": 3,
//         "createdby": "userz",
//         "date": "8-april-2024",
//         "title": "xyx",
//         "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda veniam officiis molestiae, voluptatibus cupiditate ipsum fugiat animi labore! Iste impedit reprehenderit quisquam maxime corporis! Ipsum, quia atque? Modi ipsum ipsam delectus eligendi iusto velit ut asperiores saepe nemo, cupiditate itaque. Enim sapiente eum deserunt repellendus doloribus corrupti omnis adipisci laboriosam."
//     },
//     {
//         "id": 4,
//         "createdby": "usery",
//         "date": "28-april-2024",
//         "title": "zyx",
//         "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda veniam officiis molestiae, voluptatibus cupiditate ipsum fugiat animi labore! Iste impedit reprehenderit quisquam maxime corporis! Ipsum, quia atque? Modi ipsum ipsam delectus eligendi iusto velit ut asperiores saepe nemo, cupiditate itaque. Enim sapiente eum deserunt repellendus doloribus corrupti omnis adipisci laboriosam."
//     }
// ]