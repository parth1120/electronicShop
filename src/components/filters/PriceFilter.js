import React, { Component } from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { connect } from 'react-redux';
import { priceFilterProduct } from '../../actions/productsAction'

// ************************************************************************

// This is class based compnent because `react-input-range` npm doesn't support React Hooks

// ************************************************************************

class PriceFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: { min: 0, max: 3000 },
        };
    }

    render() {
        return (
            <InputRange
                minValue={0}
                maxValue={3000}
                formatLabel={value => `₹ ${value}`}
                value={this.state.value}
                onChange={value => this.setState({ value }, () => {
                    this.props.onPriceFilterProduct(this.state.value)
                })} />
        );
    }
}

const mapDisptachToProps = dispatch => {
    return {
        onPriceFilterProduct: (maxMin) => dispatch(priceFilterProduct(maxMin))
    }
}

export default connect(null, mapDisptachToProps)(PriceFilter)
