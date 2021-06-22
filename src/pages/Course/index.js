import MainHeader from '../../components/Headers/MainHeader'
import MidCourse from '../../components/Course/MidCourse'
import Footer from '../../components/Footer'

import './styles.css'

export default function Course() {
    return(
        <>
        <MainHeader />
        <MidCourse />
        <div id="go-to-comments">
        <a href="#comments">
            seção de comentários
            <i className="bx bx-chevron-down"></i>
        </a>
        </div>
        </>
    );
}