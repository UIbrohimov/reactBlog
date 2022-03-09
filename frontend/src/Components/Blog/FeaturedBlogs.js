import React from 'react';

class FeaturedBlogs extends React.Component{
    
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://127.0.0.1:8000/blog")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
        }

    render() {

        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
            // Blog preview section
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">From our blog</h2>
                                <p className="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        {items.map((item) => (
                        <div className="col-lg-4 mb-5" key={item.id}>
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src={item.image} alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!">
                                        <h5 className="card-title mb-3">{item.title}</h5>
                                    </a>
                                    <p className="card-text mb-0">{item.body}</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                            <div className="small">
                                                <div className="fw-bold">{item.id} - ubaydullo</div>
                                                <div className="text-muted">{item.created_at} &middot; 6 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    
                </div>
            </section>
        )
    }
    
}

export default FeaturedBlogs;
