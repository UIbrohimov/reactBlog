import TopQuestions from "../Components/TopQuestions";
import SmallContact from "../Components/Contact/SmallContact";

const Faq = () =>  {
    return (
        <section className="py-5">
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bolder">Frequently Asked Questions</h1>
                    <p className="lead fw-normal text-muted mb-0">How can we help you?</p>
                </div>
                <div className="row gx-5">
                    <div className="col-xl-8">
                        {/* faqt accordion 1 */}
                        <h2 className="fw-bolder mb-3">Account &amp; Billing</h2>
                        <TopQuestions url="?category=1" />
                        {/* faqt accordion 2 */}
                        <h2 className="fw-bolder mb-3">Website issues</h2>
                        <TopQuestions url="?category=2" />
                    </div>
                    <div className="col-xl-4">
                        <SmallContact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;
