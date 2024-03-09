import '../CSS/Intro.css'
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const Intro = () => {
    return (
        <>
              <section class="intro-sec">
                <div className="intro-describe">
                    <p>
                        Hi, it's me 
                        <br />
                        <span class="accent-text">Test123</span>
                        <br />
                        I'm a Web Developer
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum voluptatem explicabo aspernatur, ducimus, aperiam saepe iusto molestiae similique quibusdam quaerat quos distinctio! Delectus consequatur 
                        maxime aliquid quod architecto porro eveniet.
                    </p>

                    <ul class="social">
                        <li>
                            <a href=""></a>
                            <FaGithub />
                        </li>
                        <li>
                            <a href=""></a>
                            <FaFacebookF />
                        </li>
                        <li>
                            <a href=""></a>
                            <FaLinkedinIn />
                        </li>
                    </ul>
                </div>

                <div className="intro-image"></div>
            </section>
        </>
    )
}

export default Intro