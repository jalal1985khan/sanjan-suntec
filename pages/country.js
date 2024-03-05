import { useEffect, useState } from 'react';
import emeaCountries from '../utils/Countries/Emea'
import APACCountries from '../utils/Countries/Apac'

export default function CountryDetection() {
  const [currentCountry, setCurrentCountry] = useState('');
    const [ip, setIp] = useState('');
    const [region, setRegion] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
          throw new Error('Failed to fetch IP');
        }
        const data = await response.json();
        setIp(data.ip);

        const countryResponse = await fetch(`https://ipapi.co/${data.ip}/country_name/`);
        if (!countryResponse.ok) {
          throw new Error('Failed to fetch country name');
        }
          const countryData = await countryResponse.text();
          console.log(countryData)

          setCurrentCountry(countryData);      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
      
    

    fetchData();
  }, []);
    
    useEffect(() => {  
        if (emeaCountries.includes(currentCountry.trim())) {
            setRegion('EMEA');
          } 
          if (APACCountries.includes(currentCountry.trim())) {
            setRegion('APAC');
        } 
        else {
            setRegion('Others');
          }
    })
    
    

  return (
    <div>
      
          <p>Country: {currentCountry}</p>
          <p>{region}</p>
    </div>
  );
}