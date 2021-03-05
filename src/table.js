import React, { Component } from 'react'
const url = "http://sfoods14api.herokuapp.com/restaurant"

class Table extends Component {
    constructor() {
        super()

        this.state = {
            location: '',
            city: '',
            name: ''
        }

    }

    rendertable = (data) => {
        if (data) {
            return data.map((i) => {
                return (
                        <tr>
                        <td>{i.name}</td>
                        <td>{i.city_name}</td>
                        <td>{i.locality}</td>
                        <td>{i.address}</td>
                        <td>{i.contact_number}</td>
                        </tr>
                        
                )
            })
        }

    }

    render() {
        return (
            <div className="container">
                <table className="table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Restaurant Name</th>
                            <th>City Name</th>
                            <th>Locality</th>
                            <th>Address</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.rendertable(this.state.location)}
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ location: data })
            })
    }
}

export default Table