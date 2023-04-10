//task1
function showSplashScreen() {
  document.getElementById('splash-screen').style.display = 'block';
}

function hideSplashScreen() {
  document.getElementById('splash-screen').style.display = 'none';
}

//task2
function createCommentElement(comment) {
  const commentElement = document.createElement('div');
  commentElement.className = 'comment';

  const textElement = document.createElement('p');
  textElement.innerText = comment.text;

  const timeElement = document.createElement('span');
  timeElement.innerText = comment.time;

  const userElement = document.createElement('span');
  userElement.innerText = comment.user;

  commentElement.appendChild(textElement);
  commentElement.appendChild(timeElement);
  commentElement.appendChild(userElement);

  return commentElement;
}
//task3
function createPostElement(post) {
  const postElement = document.createElement('div');
  postElement.className = 'post';

  const imageElement = document.createElement('img');
  imageElement.className = 'post-image';
  imageElement.src = post.imageUrl;
  imageElement.alt = 'Post image';

  const descriptionElement = document.createElement('p');
  descriptionElement.className = 'post-description';
  descriptionElement.innerText = post.description;

  const timeElement = document.createElement('span');
  timeElement.className = 'post-time';
  timeElement.innerText = post.time;

  const userElement = document.createElement('span');
  userElement.className = 'post-user';
  userElement.innerText = post.user;

  const commentsElement = document.createElement('div');
  commentsElement.className = 'post-comments';

  post.comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentsElement.appendChild(commentElement);
  });

  postElement.appendChild(imageElement);
  postElement.appendChild(descriptionElement);
  postElement.appendChild(timeElement);
  postElement.appendChild(userElement);
  postElement.appendChild(commentsElement);

  return postElement;
}

//task4
function addPost(postElement) {
  const postsContainer = document.getElementById('posts-container');
  postsContainer.appendChild(postElement);
}