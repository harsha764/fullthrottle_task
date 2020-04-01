import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Calender from './calenderComp'
import moment from 'moment'

class ModalComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonLabel: this.props.buttonLabel ? this.props.buttonLabel : "",
            className: this.props.className ? this.props.className : "",
            modal: false,
            title: this.props.title ? this.props.title : "Header",
            activities: this.props.activities ? this.props.activities : [{}]
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.state.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.state.className}>
                    <ModalHeader toggle={this.toggle}><b>{this.state.title}</b></ModalHeader>
                    <ModalBody>
                        {this.state.activities.length > 0
                            ? (
                                <div>
                                    <table className="table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th>Activity</th>
                                                <th>Start Time</th>
                                                <th>End Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.activities.map((activity, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>Activity - {index + 1}</td>
                                                        <td>{ moment(activity.start_time, 'LLL').format('DD-MMM-YY HH:mm') }</td>
                                                        <td>{moment(activity.end_time, 'LLL').format('DD-MMM-YY HH:mm') }</td>
                                                    </tr>)
                                            })}
                                        </tbody>
                                    </table>
                                    <div>
                                        <Calender events={this.state.activities} />
                                    </div>
                                </div>
                            )
                            : null
                        }
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ModalComp;