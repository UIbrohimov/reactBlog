import React from "react";


class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/feedback")
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
        // Testimonial section
        <div className="py-5 bg-light">
            <div className="container px-5 my-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-10 col-xl-7">
                        {this.state.items.map(item => (
                            <div className="text-center" key={item.id}>
                                <div className="fs-4 mb-4 fst-italic">{item.description}</div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                    <div className="fw-bold">
                                        {item.author}
                                        <span className="fw-bold text-primary mx-1">/</span>
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
}

export default Comments;
