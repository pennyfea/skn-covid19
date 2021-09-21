import React from 'react'

const Footer = ({covid}) => {
    return (
        <div className='footer'>
            <footer className="header-section bg-secondary row">
                <div className="container-fluid text-center text-md-left footer">
                    <h3 className="text-uppercase ">This live data was pulled from a public <a className='link'href="https://github.com/M-Media-Group/Covid-19-API">COVID-19 API </a></h3>
                    <p>Using information from Johns Hopkins University.</p>
                    <p>Data updated every hour</p>
                    <p className='timeStamp'>Last updated: {covid.All?.updated?.toLocaleString("en-US")}</p>
                </div>
                <div className="footer-copyright text-center py-3 footer">© 2021 Copyright: Designed by Austin Pennyfeather
                </div>
            </footer>
        </div>
    )
}

export default Footer
