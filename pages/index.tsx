import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import emeaCountries from '../utils/Countries/Emea'
import APACCountries from '../utils/Countries/Apac'
import LATAMCountries from '../utils/Countries/Latam'
import AsiaCountries from '../utils/Countries/Asia'

export default function CountryDetection() {
  const router = useRouter();
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
          //setRegion('EMEA');
         // router.push('/en-gb');
          } 
        else if (APACCountries.includes(currentCountry.trim())) {
            //setRegion('en-in');
           // router.push('/en-in');
          } 
      else if (LATAMCountries.includes(currentCountry.trim())) {
        router.push('/en-us');
        }
        else if (AsiaCountries.includes(currentCountry.trim())) {
          router.push('/en-in');
        }
        else {
         //   setRegion('Others');
           router.push('/en-in');
          }
    })

  
    return (
  
      <>
      {currentCountry}
      </>
    
    )
  
}

