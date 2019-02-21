import React from 'react';


class BayDetail extends React.Component {
    render() {
        var groupBay = this.props.groupBay;
        return (
            <div className="location__detail">
                <p>Total seats: {groupBay.details.seats}</p>
                <p>S.No.: {groupBay.details.startSeat} to {groupBay.details.endSeat}</p>
                <p>Project: {groupBay.details.project}</p>
                <p>Access: {groupBay.details.access}</p>
                <p>Floor Captions: {groupBay.details.captions}</p>
            </div>
        )
    }
};
export default BayDetail;