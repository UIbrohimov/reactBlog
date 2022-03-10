import React from 'react';


class CompanyBlog extends React.Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false,
        }
    }

    // do something when component has mounted
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('http://127.0.0.1:8000/blog/')
            .then(response => response.json())
            .then(data => this.setState({ items: data.slice(0,1), isLoading: false }));
    }

    render() {
        return (
            <section className="py-5">
                <div className="container px-5">
                    <h1 className="fw-bolder fs-5 mb-4">Company Blog</h1>
                    <div className="card border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-body p-0">
                            {this.state.items.map(item => (
                                <div className="row gx-0" key={item.id}>
                                    <div className="col-lg-6 col-xl-5 py-lg-5">
                                        <div className="p-4 p-md-5">
                                            <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                            <div className="h2 fw-bolder">{item.title}</div>
                                            <p>
                                                {item.description.slice(0,200) + " ..."}
                                            </p>
                                            <a className="stretched-link text-decoration-none" href="#!">
                                                Read more
                                                <i className="bi bi-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-7">
                                        <div className="bg-featured-blog">
                                            <img src={item.image} alt='featured image' width={750}></img>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CompanyBlog;
