import React, { Component } from 'react';
import './Release.css';

class Release extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            release: null
        };
    }

    componentDidMount() {
        console.log("Entering componentDidMount");

        fetch(
            `https://api.discogs.com/releases/${this.props.id}?USD`, 
            {
                method: "GET",
                headers:
                    {
                      "Authorization": "Discogs token=RbvwWnsEnRskVDRIDcrTukupSbgovHnfxIbFPEgZ"
                    }
            }
        )
        .then(response => response.json())
        .then(json => this.setState(() => {
            console.log("Fetch succeeded");
            console.log(json);
            return {
                release: json
            };
        }))
        .catch((error) => {
            console.log(error);
            this.setState((prevState) => {
                return {
                    error: true
                };
            })
        });

        console.log("Exiting componentDidMount");
    }

    render() {

        if (this.state.release)
        {
            // Decide with image URL to use:
            let imgUrl;
            if (this.state.release.images && this.state.release.images.length > 0) {
                imgUrl = this.state.release.images[0].resource_url;
            } else {
                imgUrl = "release-placeholder.png";                          
            }
            return (
                <div>
                    <article>
                        <span className="helper"></span><a href={this.state.release.uri} target="_blank"><img src={imgUrl} alt="Album cover" /></a><div className="textArea"><p className="artistName">{this.state.release.artists[0].name}</p><p className="releaseTitle">{this.state.release.title}</p></div>
                    </article>
                </div>
            ); 
        }    
        else
        {
            return (
                <div/>
            );
        }
    }
}

export default Release;