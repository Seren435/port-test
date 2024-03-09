import '../CSS/Contact.css'
import { MdLocalPhone, MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <>
            <section class="contact-sec">
                <div className="contact-wrap">
                    <div className="contact-info">
                        <h3 class="title">Get in touch</h3>
                        <p class="desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Dolorum quia commodi odio nam iusto, adipisci
                            esse. Minus eos aspernatur atque repellendus, ducimus
                            consectetur, nobis a pariatur ab reiciendis voluptatem nulla!
                        </p>
                        <p class="contact-addr">
                            123 Main Street
                            <br />
                            Bangkok, Thailand
                        </p>
                        <p class="contact"><span><MdLocalPhone /></span>(+66)98 555 1234</p>
                        <p class="contact"><span><MdEmail /></span>support@site.com</p>
                    </div>
                    <div className="contact-form">
                        <form action="">
                            <div className="name-wrap">
                                <div className="name-group">
                                    <label for="first-name">First Name</label>
                                    <input type="text" placeholder="eg. John"/>
                                </div>
                                <div className="name-group">
                                    <label for="last-name">Last Name</label>
                                    <input type="text" placeholder="eg. Doe"/>
                                </div>
                            </div>
                            <label for="email-address">Email address</label>
                            <input type="text" placeholder="eg. johndoe@gmail.com"/>
                            <label for="your-message">Your message</label>
                            <textarea cols="30" rows="10" placeholder="Type here"></textarea>
                            <button type="submit" class="submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact