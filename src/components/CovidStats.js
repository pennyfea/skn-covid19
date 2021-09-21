import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadSideMask, faHeart, faSkullCrossbones, faSyringe, faLungsVirus, faVirusSlash } from "@fortawesome/free-solid-svg-icons"

const CovidStats = ({covid, vaccine, active}) => {
    return (
        <div className='container'>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><span style={{color:'grey'}}>Confirmed Cases: </span>{covid.All?.confirmed?.toLocaleString("en-US")}</div>
                    </div>
                    <span> <FontAwesomeIcon icon={faLungsVirus} style={{color: 'black', fontSize: '24px'}}/> </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><span style={{color:'grey'}}>Active Cases: </span>{active?.active?.toLocaleString("en-US")}</div>
                    </div>
                    <span> <FontAwesomeIcon icon={faHeadSideMask} style={{color: 'orange', fontSize: '24px'}}/> </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><span style={{color:'grey'}}>Recovered Cases: </span>{active?.recovered?.toLocaleString("en-US")}</div>
                    </div>
                    <span> <FontAwesomeIcon icon={faVirusSlash} style={{color: 'green', fontSize: '24px'}}/> </span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><span style={{color:'grey'}}> Deaths:</span> {covid.All?.deaths?.toLocaleString("en-US")}</div>
                    </div>                 
                    <span><FontAwesomeIcon icon={faSkullCrossbones}  style={{color: 'red', fontSize: '24px'}} /></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><span style={{color:'grey'}}>Total Vaccines Administered:</span> {vaccine.All?.administered?.toLocaleString("en-US")}</div>
                    </div>                 
                    <span><FontAwesomeIcon icon={faSyringe}  style={{color: 'blue', fontSize: '24px'}} /></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><span style={{color:'grey'}}>People fully vaccinated:</span> {vaccine.All?.people_vaccinated?.toLocaleString("en-US")}</div>
                    </div>                          
                    <span><FontAwesomeIcon icon={faHeart}  style={{color: 'green', fontSize: '24px'}}/></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><span style={{color:'grey'}}>People partially vaccinated: </span> {vaccine.All?.people_partially_vaccinated?.toLocaleString("en-US")}</div>
                    </div>                               
                    <span><FontAwesomeIcon icon={faHeart}  style={{color: 'yellow', fontSize: '24px'}} /></span>
                </li>
            </ul>
            <p className='timeStamp'>Last updated: {covid.All?.updated?.toLocaleString("en-US")}</p>
        </div>
    )
}



export default CovidStats
