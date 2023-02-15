import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
    <div class="input-group mb-3 position-relative d-flex">
      <input type="text" class="form-control rounded-pill wd-search-box me-4" placeholder="Search Tuiter" />

      <div class="position-absolute mt-2 ms-2">
        <i class="fas fa-search"></i>
      </div>

      <a href="explore-settings.html" class="ms-auto my-auto">
        <i class="fas fa-cog fa-2x"></i>
      </a>
    </div>
    <ul class="nav mb-2 nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
      </li>
      <li class="nav-item d-none d-md-inline">
        <a class="nav-link" href="entertainment.html">Entertainment</a>
      </li>
    </ul>
    <div class="position-relative">
      <img src="../../images/Starship-Mk1-Day.png" class="img-fluid"/>
      <h2 class="position-absolute bottom-0 start-0 text-white ms-2">
        Space X's Starship
      </h2>
    </div>
      ${PostSummaryList()}
  `);
}
export default ExploreComponent;
