import '../../Assets/css/custom.css';


const ContactCards = () => {
    return (
        <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
            <div className="col">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="fa fa-envelope fa-2x"></i>
                </div>
                <div className="h5 mb-2">Chat with us</div>
                <p className="text-muted mb-0">Chat live with one of our support specialists.</p>
            </div>
            <div className="col">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="fa fa-users fa-2x"></i>
                </div>
                <div className="h5">Ask the community</div>
                <p className="text-muted mb-0">Explore our community forums and communicate with other users.</p>
            </div>
            <div className="col">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="fa fa-question-circle fa-2x"></i>
                </div>
                <div className="h5">Support center</div>
                <p className="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
            </div>
            <div className="col">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="fa fa-phone fa-2x"></i>
                </div>
                <div className="h5">Call us</div>
                <p className="text-muted mb-0">Call us during normal business hours at (555) 892-9403.</p>
            </div>
        </div>
    )
}

export default ContactCards;
