import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ProgressBar extends Component {
    getColor = percent => {
        if (this.props.percent === 100) return 'green';
        return this.props.percent > 50 ? 'lightgreen' : 'red';
    };

    getWidthASPercentOfTotalWidth = () => {
        return parseInt(this.props.width * (this.props.percent / 100), 10);
    };

    render() {
        const {percent, width, height} = this.props;

        return (
            <div style={{border: 'solid 1px lightgray', width: width}}>
                <div style={{
                    width: this.getWidthASPercentOfTotalWidth(),
                    height,
                    backgroundColor: this.getColor(percent)
                }} />
            </div>
        );
    }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  height: PropTypes.number,
  /** Bar width */
  percent: PropTypes.number.isRequired,
  /** Bar height */
  width: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
    height: 5
};

export default ProgressBar;