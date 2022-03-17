import React from 'react';

class TopQuestions extends React.Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: true,
        };
    }

    // Get faq when component has mounted
    componentDidMount() {
        this.state.isLoading = true;
        fetch('http://127.0.0.1:8000/faq/'+this.props.url)
            .then(response => response.json())
            .then(data => this.setState({
                items: data,
                isLoading: false,
            }));
    }

    render () {
        return (
            <div className="accordion mb-5" id="accordionExample">
                {this.state.items.map(item => (
                <div className="accordion-item" key={item.id}>
                    <h3 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse-"+item.id} aria-expanded="false" aria-controls={"collapse-"+item.id}>
                            {item.queston}
                        </button>
                    </h3>
                    <div className="accordion-collapse collapse" id={"collapse-"+item.id} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {item.answer}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        )
    }
    
}

export default TopQuestions;
