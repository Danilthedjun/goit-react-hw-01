import css from "./Profile.module.css";

export default function Profile({
  info: {
    username,
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.card}>
      <div>
        <img className={css.img} src={avatar} alt={name} />
        <p className={css.name}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.social}>Followers</span>
          <span className={css.number}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.social}>Views</span>
          <span className={css.number}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.social}>Likes</span>
          <span className={css.number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
