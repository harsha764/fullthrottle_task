import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalComp from './model';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    fetch('test.json').then(response => {
      return response.json();
    }).then(data => {
      if (data.ok) {
        this.setState({
          members: data.members
        })
      }
    }).catch(err => {
      console.log("Error in accessing the Json file")
    });
  }

  render() {
    return (
      <div className="container" >
        <h1 className="text-center">Users List</h1>
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>TimeZone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.members.map((member, key) => {
                return (<tr key={key}>
                  <td>{member.id}</td>
                  <td>{member.real_name}</td>
                  <td>{member.tz}</td>
                  <td><ModalComp buttonLabel="View" title={member.id} activities={member.activity_periods} /></td>
                </tr>)
              }
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
