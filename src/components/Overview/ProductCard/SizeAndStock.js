import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

class SizeAndStock extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        let sizes = this.props.productStyles
        return (
            <>
                <div className="size-wrapper">
                    {/* <Dropdown placeholder='Size' search selection options={} /> */}
                </div>

                <div className="cart-wrapper">

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('PRODUCT CARD STATE:', state);
    return {
        productStyles: state.productStyles
      };
}

export default connect(mapStateToProps)(SizeAndStock);
