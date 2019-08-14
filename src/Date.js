import React, {Component} from 'react';
import Moment from 'moment';

class Date extends Component {
    render() {
        return (
            <p>{Moment().add(this.props.additionalDays, 'days').format('dddd')}</p>
        )
    }
}
export default Date;
