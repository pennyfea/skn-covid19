
import Header  from './components/Header'
import Footer from './components/Footer'
import GlobalCovidStats from './components/GlobalCovidStats'
import CovidStats from './components/CovidStats'
import {mMediaGroupStats, novelCOVIDAPI} from './api/fetchCovidData'
import { useState, useEffect } from 'react'


const  App = () => {
  const [covid, setCovid] = useState({ All: {}});
  const [vaccine, setVaccine] = useState({ All: {}});
  const [world, setWorld] = useState({});
  const [active, setActive] = useState({});


  useEffect(() => {
    const fetchCovidData = async () => {
      try{
        const response = await mMediaGroupStats.get('/cases?country=Saint%20Kitts%20and%20Nevis');
        setCovid(response.data);
      } catch (err) {
        if (err.response){
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchCovidData();
  }, []);

  useEffect(() => {
    const fetchVaccineData = async () => {
      try{
        const response = await mMediaGroupStats.get('/vaccines?country=Saint%20Kitts%20and%20Nevis');
        setVaccine(response.data);
      } catch (err) {
        if (err.response){
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchVaccineData();
  }, []);

  useEffect(() => {
    const fetchWorldData = async () => {
      try{
        const response = await novelCOVIDAPI.get('/all');
        setWorld(response.data);
      } catch (err) {
        if (err.response){
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchWorldData();
  }, []);

  useEffect(() => {
    const fetchActivedData = async () => {
      try{
        const response = await novelCOVIDAPI.get('/countries/Saint%20Kitts%20and%20Nevis');
        setActive(response.data);
      } catch (err) {
        if (err.response){
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchActivedData();
  }, []);


  return (
    <div>
      <Header 
        covid={covid}
      />
      <CovidStats 
        covid={covid}
        vaccine={vaccine}
        active={active}
      />
      <GlobalCovidStats 
        world={world}
      />
      <Footer />
    </div>
  );
}

export default App;
