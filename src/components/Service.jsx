import '../CSS/Service.css'
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'

const Service = () => {
    return (
        <>
            <section class="service-sec">
                <h3 class="title">My Service</h3>
                <div className="service-wrap">
                    <div className="service-item">
                        <FaCode class="big-ico accent-text"/>
                        <h3 class="service-title">Web Development</h3>
                        <p class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Consectetur quod vero quaerat odit repellendus explicabo ipsa doloribus. 
                            Similique iure blanditiis officia debitis, fuga earum explicabo quae beatae 
                            voluptatem vero ipsa!
                        </p>
                    </div>
                    <div className="service-item">
                        <FaPaintbrush class="big-ico accent-text"/>
                        <h3 class="service-title">Web Design</h3>
                        <p class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Consectetur quod vero quaerat odit repellendus explicabo ipsa doloribus. 
                            Similique iure blanditiis officia debitis, fuga earum explicabo quae beatae 
                            voluptatem vero ipsa!                            
                        </p>
                    </div>
                    <div className="service-item">
                        <FaDesktop class="big-ico accent-text"/>
                        <h3 class="service-title">Front-end Consulting</h3>
                        <p class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Consectetur quod vero quaerat odit repellendus explicabo ipsa doloribus. 
                            Similique iure blanditiis officia debitis, fuga earum explicabo quae beatae 
                            voluptatem vero ipsa!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service