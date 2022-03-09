import React from "react";
class Header extends React.Component {

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
        fetch("http://127.0.0.1:8000/about")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
        }

    render() {
        return (
            // Header
            <header className="bg-dark py-5">
                <div className="container px-5">
                    {this.state.items.map(item => (
                        <div className="row gx-5 align-items-center justify-content-center" key={item.id}>
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="my-5 text-center text-xl-start">
                                    <h1 className="display-5 fw-bolder text-white mb-2">{item.title}</h1>
                                    <p className="lead fw-normal text-white-50 mb-4">{item.description}</p>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                        <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={"http://127.0.0.1:8000" + item.image} alt="..." /></div>
                        </div>
                    ))}
                </div>
            </header>
        )
    }
}

export default Header;
