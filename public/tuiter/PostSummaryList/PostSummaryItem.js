const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="d-flex">
        <div class="me-4">
          ${post.topic ? `<span class="wd-light-gray">${post.topic}</span> </br>` : ''}
          <b>
            ${post.userName ? post.userName : ''} <i class="fas fa-check-circle"></i>
          </b>
          ${post.time ? `<span class="wd-light-gray">- ${post.time}</span>` : ''}
          ${post.title ? `</br><b>${post.title}</b>` : ''}
          ${post.tweets ? `</br><span class="wd-light-gray">${post.tweets} Tweets</span>` : ''}
        </div>
        
        <img src="${post.image}" class="ms-auto my-auto rounded-3 wd-tweet-image"/>
      </div>
    </li>
  `);
}
export default PostSummaryItem;