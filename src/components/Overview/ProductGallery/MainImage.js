import React, { Component } from 'react'
import Img from 'react-image';
import {Loader, Icon} from 'semantic-ui-react';

class MainImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    handleArrowClick = (e) => {
        console.log('TESTING ARROW CLICK:', e.target)
    }

    render() {
        console.log('MAIN IMAGE PROPS:', this.props);

        return (
            <div className="image-wrapper">
                <div className="arrow-child" onclick={this.handleArrowClick}>
                    <Icon 
                        name="arrow left" 
                        size="large"
                        />
                </div>
                <Img 
                    src={[this.props.imageURL, `https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg`]}
                    loader={Loader}
                    className="image-child"
                    />
                <div className="arrow-child" onclick={this.handleArrowClick}>
                    <Icon 
                        name="arrow right" 
                        size="large"
                        />
                </div>
            </div>
        )
    }
}



export default MainImage;