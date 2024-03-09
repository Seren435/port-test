import { FaSquareJs, FaReact, FaCss3 , FaGitAlt, FaNode} from 'react-icons/fa6'
import '../CSS/Skill.css'

const Skill = () => {
    return (
        <>
            <section class="skillset-sec">
                <h3 class="title">My Skill Set</h3>

                <ul class="big-ico skill">
                    <li><FaSquareJs/></li>
                    <li><FaReact/></li>
                    <li><FaCss3 /></li>
                    <li><FaGitAlt/></li>
                    <li><FaNode/></li>
                </ul>
            </section>
        </>
    )
}
export default Skill