import React from 'react';
import './Page.css';
import Scarecrow from '../../images/Scarecrow.png';
import Button from '../Button/Button';

class Page extends React.Component {
  render() {
  return(
    <div class="page"> 
      <div class="row">
        <div class="column">
          <center>
            <img src={Scarecrow} width={400} height={400}/>
          </center>
        </div>

        <div class="column">
          <div class="title"> I have bad news for you </div>
          <div class="message">
            The page you are looking for might be removed or is
            temporarily unavailable
          </div>
          <Button />  
        </div>
      </div>
    </div>
    )
  }
}

export default Page;