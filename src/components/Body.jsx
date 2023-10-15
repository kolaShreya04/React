import React, {Component} from "react";
import Nav from "./Nav";
import axios from 'axios';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            nasaData: null,
        };
    }

    componentDidMount() {
        // Make an API call to NASA's API
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=yOaW03xn4SoJjeoBzziE4jw0R1ftrPaW0qEf4l2V")
            .then((response) => {
                this.setState({ nasaData: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // componentDidUpdate(prevProps, prevState){
    //     console.log(prevState)
    //     console.log(this.state)
    //     //function or do something based on changes
    // }

    render(){
        const {nasaData} = this.state
        return(
            <>
                {nasaData && (
                    <div>
                        <img
                            src={nasaData.url}
                            alt={nasaData.title}
                            width="100%"
                        />
                        <p>{nasaData.title}</p>
                        <p>{nasaData.explanation}</p>
                    </div>
                )}
            </>
        )
    }
}

export default Body 
