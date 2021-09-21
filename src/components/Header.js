const Header = ({ covid }) => {
    return (
        <div className='header'>
            <div>
                <span className='d-inline-block'><img className='flag'src="https://disease.sh/assets/img/flags/kn.png" alt="Saint Kitts And Nevis National Flag"/></span>
                <span className='d-inline-block btn float-right headerStyle'>{covid.All?.country} COVID-19 Report</span>
            </div>
            <div className='population'>Population: {covid.All?.population?.toLocaleString("en-US")}</div>
        </div>
    )
}
export default Header
