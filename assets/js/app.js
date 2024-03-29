// Sample blog post data
const blogPosts = [
  { title: "First Post", content: "This is my first blog post." },
  { title: "Second Post", content: "This is my second blog post." },
  { title: "Third Post", content: "This is my third blog post." }
];

// Function to display blog posts
function displayBlogPosts() {
  const blogPostsSection = document.getElementById('blog-posts');
  blogPosts.forEach(post => {
    const postElement = document.createElement('article');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;
    blogPostsSection.appendChild(postElement);
  });
}

// Call function to display blog posts when the page loads
window.onload = function() {
  displayBlogPosts();
};