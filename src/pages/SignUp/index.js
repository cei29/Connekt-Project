import SignHeader from '../../components/Headers/SignHeader'
import SignUpForm from '../../components/Forms/SignUpForm'
import Footer from '../../components/Footer'

import './styles.css'

export default function SignUp() {
    return (
        <>
        <SignHeader />
        <main id="sign">
                <div className="sign-box">
                    <SignUpForm />
                </div>
                <Footer />
            </main>
        </>  
    );
}