const SmallContact = () => {
    return (
        <div className="card border-0 bg-light mt-xl-5">
            <div className="card-body p-4 py-lg-5">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <div className="h6 fw-bolder">Have more questions?</div>
                        <p className="text-muted mb-4">
                            Contact us at
                            <br />
                            <a href="#!">support@domain.com</a>
                        </p>
                        <div className="h6 fw-bolder">Follow us</div>
                        <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-twitter"></i></a>
                        <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-facebook"></i></a>
                        <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-linkedin"></i></a>
                        <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallContact;
