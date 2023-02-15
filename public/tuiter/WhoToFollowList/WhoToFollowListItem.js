const WhoToFollowListItem = (who) => {
  return (`
    <li class="list-group-item">
      <div class="d-flex">
        <img src="${who.avatarIcon}" class="rounded-circle wd-avatar me-3" />
        <div>
          <b>${who.userName} <i class="fas fa-check-circle"></i></b><br />
          @${who.handle}
        </div>
        
        <button class="btn btn-primary rounded-pill ms-auto my-auto">
          Follow
        </button>
      </div>
    </li>
  `);
}
export default WhoToFollowListItem;