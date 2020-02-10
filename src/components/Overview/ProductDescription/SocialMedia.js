import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';

class SocialMedia extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                 <Button circular color='facebook' icon='facebook' />
                 <Button circular color='twitter' icon='twitter' />
                 <Button circular color='pinterest' icon='pinterest' />
            </>
        )
    }
}

export default SocialMedia
