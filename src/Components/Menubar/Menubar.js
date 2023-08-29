import React, { Component } from 'react';

class Menubar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar bg-light'>
          <div className="container">
            <ul className='nav-items'>
              <li className="nav-item"><a href="./">Counter</a></li>
              <li className="nav-item"><a href="./Room">Room</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Menubar;
