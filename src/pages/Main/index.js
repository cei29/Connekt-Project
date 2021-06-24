import MainHeader from "../../components/Headers/MainHeader";
import MainCards from "../../components/MainCards";
import Footer from "../../components/Footer";

import "./styles.css";

export default function Main() {
  return (
    <>
      <MainHeader />
      <form action="" method="post" id="post-course">
        <h1>feed</h1>
        <a href="#">publicar novo curso</a>
      </form>
      <MainCards />
      <Footer />
    </>
  );
}
