import MainHeader from "../../components/Headers/MainHeader";
import MidUser from "../../components/User/MidUser";
import BottomUser from "../../components/User/BottomUser";
import Footer from "../../components/Footer";

import "./styles.css";

export default function User() {
  return (
    <>
      <MainHeader />
      <MidUser />
      <BottomUser />
      <Footer />
    </>
  );
}
