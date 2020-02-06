import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react';

class StyleThumbnail extends Component {
    constructor(props) {
        super(props)
    }

    handleStyleClick = () => {
        this.props.changeStyle(this.props.id);
    }

    render() {
        return (
            <div className="thumbnail-box">
                <Image 
                    className="style-thumbnail" 
                    src={this.props.url} 
                    size='tiny' 
                    circular
                    onClick={this.handleStyleClick}
                    />
                
                <Icon className="check circle outline"/>
            
            </div>
        )
    }
}

export default StyleThumbnail;
