import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <div className="flex flex-row bg-gray-50">
        <div className='ml-5 mt-5'><img width={85} className='rounded-full' src='https://cdn.vox-cdn.com/thumbor/KrNjaW263LdvsGPRg1valjIn_rI=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21818147/iStock_172413371.jpg' /></div>
        <div className='ml-5 mt-5 w-3/5'>
          <p className='component_title'>Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)</p>
          <p className='component_sub_titile'>Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH</p>
          <p className='component_country'><a href="#"><FontAwesomeIcon icon={faLocationDot} /></a> Vienna, Austria</p>
        </div>
        <div>PHOTO3</div>
      </div>
    </>
  );
}

export default App;
