import CommentForm from "../../Forms/CommentForm";
import Comment from "../Comment";
import Pagination from '../../Pagination'

import "./styles.css";

export default function BottomCourse() {
  return (
    <>
      <div id="bottom-course">
        <a href="#up"><i className="bx bx-chevron-up"></i></a>
        <img src="/images/community.png" alt="" />
        <h1>comunidade</h1>
        <CommentForm />
        <Comment />
        <Comment />
        <Pagination />
      </div>
    </>
  );
}
