import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react';

import {selectStyle} from '../../../redux/actions/index';
import {connect} from "react-redux";

class StyleThumbnail extends Component {
    constructor(props) {
        super(props)
    }

    handleStyleClick = () => {
        this.props.selectStyle(this.props.style);
    }

    renderCheckmark = () => {
        if (this.props.selectedStyle !== null) {
            if (this.props.id === this.props.selectedStyle.style_id) {
                return <Icon className="check circle outline"/>
            } else {
                return null;
            }
        } 
    }

    render() {
        return (
            <div className="thumbnail-container">
                <Image 
                    className="style-thumbnail"
                    src={this.props.url} 
                    size='tiny' 
                    circular
                    onClick={this.handleStyleClick}
                    />
                                
                    {this.renderCheckmark()}
            </div>
           
        )
    }
}

export default connect(null, {selectStyle})(StyleThumbnail);