import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return (`
    <ul class="list-group">
      ${
        posts.map(p => {
          return PostSummaryItem(p);
        }).join('')
      }
    </ul>
  `);
}
export default PostSummaryList;