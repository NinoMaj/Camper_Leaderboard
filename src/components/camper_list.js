/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable */
import React, {Component} from 'react';
import CamperItem from './camper_item';
import axios from 'axios';

class CamperList extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      recentLoaded: true
    };
    this.handleClickRecent = this.handleClickRecent.bind(this);
    this.handleClickAllTime = this.handleClickAllTime.bind(this);
  }

  getList(clicked=true) {
    const URL = clicked ? 'https://fcctop100.herokuapp.com/api/fccusers/top/recent' : 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    axios.get(URL)
    .then(response => {
      // console.log(response);
      this.setState({list: response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentWillMount() {
    this.getList();
  }

  handleClickRecent() {
    this.getList(true);
    this.setState({recentLoaded: true});
  }

  handleClickAllTime() {
    this.getList(false);
    this.setState({recentLoaded: false});
  }

  render() {
    // bettter to use normal if function, not shorthanded
    const icon = (this.state.recentLoaded) ? <i className="fa fa-circle" aria-hidden="true"></i> : <i className="fa fa-circle-o" aria-hidden="true"></i>;
    const icon2 = (this.state.recentLoaded) ? <i className="fa fa-circle-o" aria-hidden="true"></i> : <i className="fa fa-circle" aria-hidden="true"></i>; 
    const camperItems = this.state.list.map((camper, i) => {
       return (
          <CamperItem
            key={camper.username}
            camper={camper}
            i={i}
            />
       );
    });
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="numberTh">#</th>
              <th className="nameTh">Camper Name</th>
              <th onClick={this.handleClickRecent} className="align-right clickable">Point in past 30 days {icon}</th>
              <th onClick={this.handleClickAllTime} className="align-right clickable">All time points {icon2}</th>
            </tr>
          </thead>
          <tbody>
            {camperItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CamperList;
