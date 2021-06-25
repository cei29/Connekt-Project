import "./styles.css";

export default function CommentForm () {
  return (
    <>
      <form action="" method="post">
        <label htmlFor="input">username: </label>
        <input type="text" className="comment" placeholder="comente" />
      </form>
    </>
  );
}
