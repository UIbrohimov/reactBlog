import React from 'react';


class Prtfl extends React.Component {

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
        fetch('http://127.0.0.1:8000/portfolio/')
            .then(response => response.json())
            .then(data => this.setState({ items: data, isLoading: false }));
    }

    render () {
        return (
        <>
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Our Work</h1>
                        <p className="lead fw-normal text-muted mb-0">Company portfolio</p>
                    </div>
                    <div className="row gx-5">
                        {this.state.items.map(item => (
                            <div className="col-lg-6" key={item.id}>
                                <div className="position-relative mb-5">
                                    <img className="img-fluid rounded-3 mb-3" src={"http://127.0.0.1:8000" + item.image} alt="..." />
                                    <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">{item.title}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                    <a className="btn btn-lg btn-primary" href="#!">Contact us</a>
                </div>
            </section>
        </>
            
        )
    }
    
}

export default Prtfl;
