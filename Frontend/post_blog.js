const input = document.querySelector(".post-input");
const postBtn = document.querySelector("#post-button");
const ul = document.querySelector(".list-group");
const localStorageArray = [];

const addPost = text => {
    if (text != "") {
      const li = document.createElement("li");
      li.classList.add("list-post-item");     
      li.innerHTML = `<p class="posted-blog">${text}</p>`;
      ul.appendChild(li);
      if (input.value != "") {
        localStorageArray.push(input.value);
        localStorage.setItem("postBlog", JSON.stringify(localStorageArray));
        input.value = "";
        input.focus();
      }
    }
  };

  const fetchPosts = () => {
    const postArray = JSON.parse(localStorage.getItem("postBlog"));
    postArray.forEach(blogItem => {
      addPost(blogItem);
    });
  };

  postBtn.addEventListener("click", () => addPost(input.value));
