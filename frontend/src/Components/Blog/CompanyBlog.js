
const CompanyBlog = () => {
    return (
        <section className="py-5">
            <div className="container px-5">
                <h1 className="fw-bolder fs-5 mb-4">Company Blog</h1>
                <div className="card border-0 shadow rounded-3 overflow-hidden">
                    <div className="card-body p-0">
                        <div className="row gx-0">
                            <div className="col-lg-6 col-xl-5 py-lg-5">
                                <div className="p-4 p-md-5">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                    <div className="h2 fw-bolder">Article heading goes here</div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Similique delectus ab doloremque, qui doloribus ea officiis...
                                    </p>
                                    <a className="stretched-link text-decoration-none" href="#!">
                                        Read more
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-7">
                                <div className="bg-featured-blog">
                                    <img src='https://dummyimage.com/700x350/343a40/6c757d' alt='featured image'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyBlog;
