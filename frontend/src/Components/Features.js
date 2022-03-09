import React from "react";

class Features extends React.Component {

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
        fetch("http://127.0.0.1:8000/features")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
        }

    render () {
        return (
        // Features section
        <section className="py-5" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A better way to start building.</h2></div>
                    <div className="col-lg-8">
                        <div className="row gx-5 row-cols-1 row-cols-md-2">
                            {this.state.items.map((item) => (
                            <div className="col mb-5 h-100" key={item.id}>
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className={"bi bi-" + item.bi_icon_class}></i></div>
                                <h2 className="h5">{item.title}</h2>
                                <p className="mb-0">{item.description}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    }
    
}

export default Features;
