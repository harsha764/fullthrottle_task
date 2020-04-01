import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)


class Calender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: this.props.events ? this.props.events : [],
            viewType: 'week'
        }
    }

    changeViewType = (e) => {
        this.setState({
            viewType: e
        })
    }

    render() {
        let myEventsList = []
        if (this.state.events.length > 0) {
            for (var x = 0; x < this.state.events.length; x++) {
                var event = this.state.events[x]
                var SD = moment(event.start_time, 'LLL').format('YYYY-MM-DD-HH-mm-ss');
                var startDate = SD.split('-');
                var ED = moment(event.end_time, 'LLL').format('YYYY-MM-DD-HH-mm-ss');
                var endDate = ED.split('-');
                let obj = {
                    id: x,
                    title: 'Period - ' + (x + 1),
                    start: new Date(startDate[0], startDate[1] - 1, startDate[2], startDate[3], startDate[4], startDate[5]),
                    end: new Date(endDate[0], endDate[1] - 1, endDate[2], endDate[3], endDate[4], endDate[5]),
                }
                myEventsList.push(obj)
            }
        }

        return (
            <div>
                <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    view={this.state.viewType}
                    onView={this.changeViewType}
                />
            </div>
        );
    }
}

export default Calender;