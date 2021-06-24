import MainHeader from "../../components/Headers/MainHeader";
import MidCourse from "../../components/Course/MidCourse";
import Comments from "../../components/Course/Comments";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Course() {
  return (
    <>
      <MainHeader />
      <MidCourse />
      <div id="go-to-comments">
        <a href="#comments">
          <i className="bx bx-chevron-down"></i>
        </a>
      </div>
      <Comments />
    </>
  );
}
