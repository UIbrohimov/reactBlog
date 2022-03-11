import React from 'react';


class PriceTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: true,
        };
    }


    componentDidMount() {
        this.state.isLoading = true;
        fetch('http://127.0.0.1:8000/pricing/')
            .then(response => response.json())
            .then(data => this.setState({
                items: data,
                isLoading: false,
            }));
    }

    render() {

        return (
            <section className="bg-light py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Pay as you grow</h1>
                        <p className="lead fw-normal text-muted mb-0">With our no hassle pricing plans</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        {this.state.items.map(item => (
                        <div className="col-lg-6 col-xl-4" key={item.id}>
                            <div className="card mb-5 mb-xl-0">
                                <div className="card-body p-5">
                                    <div className="small text-uppercase fw-bold text-muted">{item.title}</div>
                                    <div className="mb-3">
                                        <span className="display-4 fw-bold">$ {item.price}</span>
                                        <span className="text-muted"> / month.</span>
                                    </div>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2">
                                            <i className="bi bi-check text-primary"></i>
                                            <strong>{item.info.users}</strong>
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-check text-primary"></i>
                                            5GB storage
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-check text-primary"></i>
                                            Unlimited public projects
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-check text-primary"></i>
                                            Community access
                                        </li>
                                        <li className="mb-2 text-muted">
                                            <i className="bi bi-x"></i>
                                            Unlimited private projects
                                        </li>
                                        <li className="mb-2 text-muted">
                                            <i className="bi bi-x"></i>
                                            Dedicated support
                                        </li>
                                        <li className="mb-2 text-muted">
                                            <i className="bi bi-x"></i>
                                            Free linked domain
                                        </li>
                                        <li className="text-muted">
                                            <i className="bi bi-x"></i>
                                            Monthly status reports
                                        </li>
                                    </ul>
                                    <div className="d-grid"><a className="btn btn-outline-primary" href="#!">Choose plan</a></div>
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

export default PriceTable;
