import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import En from '../components/HomePage/En';

function Country() {
    const router = useRouter(); 
    const [regionEnLang, setRegionEnLang] = useState(false);
    const [regionEmeaLang, setRegionEmeaLang] = useState(false);
    const [regionUsLang, setRegionUsLang] = useState(false);
    const [regionGbLang, setRegionGbLang] = useState(false);

    useEffect(() => {
        // Listen to route changes and update regionLang accordingly
        if (router.asPath === '/en-mea') {
            setRegionEmeaLang(true);
        } else if (router.asPath === '/en-in') {
            setRegionEnLang(true);
        } else if (router.asPath === '/en-us') {
            setRegionUsLang(true);
        }
        else if (router.asPath === '/en-gb') {
            setRegionGbLang(true);
        }

    }, [router.asPath]); // Trigger effect when route changes

    return (
        <div>
            {regionEmeaLang ? (<En/>) : ''}
            {regionEnLang ? (<En />) : ''}
            {regionEnLang ? (<En />) : ''}
            {regionUsLang ? (<En />) : ''}
            {regionGbLang ? (<En/>):''}
            
        </div>
    );
}

export default Country;