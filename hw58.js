//task1
function showSplashScreen() {
  document.getElementById('splash-screen').style.display = 'block';
}

function hideSplashScreen() {
  document.getElementById('splash-screen').style.display = 'none';
}

//task2
let comment = {
    text: "саппорты красавчики!!!",
    time: "2022-05-12 14:00:00",
    user: {
            login: 'salmor'
          }
};
function createCommentElement(comment) {
  const commentElement = document.createElement('div');
  commentElement.className = 'comment';

  const textElement = document.createElement('p');
  textElement.innerText = comment.text;

  const timeElement = document.createElement('p');
  timeElement.innerText = comment.time;

  const userElement = document.createElement('p');
  userElement.innerText = comment.user.login;

  commentElement.appendChild(textElement);
  commentElement.appendChild(timeElement);
  commentElement.appendChild(userElement);
  return commentElement;
}

//task3
let post1 = {
    imageUrl: './post.jpg',
      description: 'salmorsalmorsalmorsalmor',
      createdAt: '2022-05-12 14:00:00',
      user: {
        login: 'salmor'
      },
      comments: [
        {
            text: "классная фотка",
            time: "2022-05-12 14:30:00",
            user: {
                    login: 'salmor'
                  }
        },
        {
                text: "мне не нравится",
              time: "2022-05-12 14:35:00",
              user: {
                      login: 'salmor'
                    }
        }
      ]
};
function createPostElement(post1) {
      const postElement = document.createElement('div');
      postElement.className = 'post';

      const imageElement = document.createElement('img');
      imageElement.className = 'post-image';
      imageElement.src = post1.imageUrl;
      imageElement.alt = 'Post image';

      const descriptionElement = document.createElement('p');
      descriptionElement.className = 'post-description';
      descriptionElement.innerText = post1.description;

      const timeElement = document.createElement('p');
      timeElement.className = 'post-time';
      timeElement.innerText = post1.createdAt;

      const userElement = document.createElement('p');
      userElement.className = 'post-user';
      userElement.innerText = post1.user.login;

      const commentsElement = document.createElement('div');
      commentsElement.className = 'post-comments';

      post1.comments.forEach((comment) => {
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
  const postsContainer = document.getElementById('post');
  postsContainer.appendChild(postElement);
}


