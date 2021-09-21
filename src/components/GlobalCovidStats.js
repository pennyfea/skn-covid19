import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeAmericas,faHeart,faSkullCrossbones} from "@fortawesome/free-solid-svg-icons"

const GlobalCovidStats = ({world}) => {
    return (
        <div className="container row row-cols-1 row-cols-md-1 g-4">
            <p className='worldwide'>Worldwide</p>
            <div className="col">
                <div className="card" style={{background:'#e2e3e5', borderTop: '4px solid rgb(66, 66, 66)'}}>
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className="card-title">Confirmed cases</h5>
                        <span> <FontAwesomeIcon icon={faGlobeAmericas} style={{color: 'grey', fontSize: '24px'}}/> </span>
                    </div>
                    <p className="card-text fw-bold">{world?.cases?.toLocaleString("en-US")}</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{background:'#e2e3e5', borderTop: '4px solid rgb(76, 175, 80)'}}>
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className="card-title">Recovered</h5>
                        <span> <FontAwesomeIcon icon={faHeart} style={{color: 'green', fontSize: '24px'}}/> </span>
                    </div>
                    <p className="card-text fw-bold">{world?.recovered?.toLocaleString("en-US")}</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card" style={{background:'#e2e3e5', borderTop: '4px solid rgb(255, 82, 82)'}}>
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className="card-title">Deaths</h5>
                        <span> <FontAwesomeIcon icon={faSkullCrossbones} style={{color: 'red', fontSize: '24px'}}/> </span>
                    </div>
                    <p className="card-text fw-bold">{world?.deaths?.toLocaleString("en-US")}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default GlobalCovidStats
