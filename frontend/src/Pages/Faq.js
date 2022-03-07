import TopQuestions from "../Components/TopQuestions";
import SmallContact from "../Components/Contact/SmallContact";

const Faq = () =>  {
    return (
        <section class="py-5">
            <div class="container px-5 my-5">
                <div class="text-center mb-5">
                    <h1 class="fw-bolder">Frequently Asked Questions</h1>
                    <p class="lead fw-normal text-muted mb-0">How can we help you?</p>
                </div>
                <div class="row gx-5">
                    <div class="col-xl-8">
                        {/* faqt accordion 1 */}
                        <h2 class="fw-bolder mb-3">Account &amp; Billing</h2>
                        <TopQuestions />
                        {/* faqt accordion 2 */}
                        <h2 class="fw-bolder mb-3">Website issues</h2>
                        <TopQuestions />
                    </div>
                    <div class="col-xl-4">
                        <SmallContact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;
