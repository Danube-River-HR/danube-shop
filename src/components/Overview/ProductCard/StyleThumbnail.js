import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react';

import {selectStyle} from '../../../redux/actions/index';
import {connect} from "react-redux";

class StyleThumbnail extends Component {
    constructor(props) {
        super(props)
    }

    handleStyleClick = () => {
        // this.props.changeStyle(this.props.id);
        // console.log('TESTING STYLE CLICK:', this.props.selectStyle)
        this.props.selectStyle(this.props.id);
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
                
                {this.props.id === this.props.selectedStyleId ? <Icon className="check circle outline"/> : null}
            </div>
           
        )
    }
}

export default connect(null, {selectStyle})(StyleThumbnail);