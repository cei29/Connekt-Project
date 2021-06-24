import "./styles.css";

export default function Comments() {
  return (
    <div id="comments">
      <img src="/images/community.png" alt="" />
      <h1>comunidade</h1>
      <form action="" method="post">
        <label htmlFor="input">username: </label>
        <input type="text" className="comment" placeholder="comente" />
      </form>
    </div>
  );
}
