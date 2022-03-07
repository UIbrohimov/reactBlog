import ContactForm from '../Components/Contact/ContactForm';
import ContactCards from '../Components/Contact/ContactCards';

const Contact = () => {
    return (
        <section className="py-5">
            <div className="container px-5">
                <ContactForm />
                <ContactCards />
            </div>
        </section>
        )
};
  
export default Contact;