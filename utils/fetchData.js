import axios from 'axios';

export async function fetchWordPressData(endpoint, page = 1) {
    const perPage = 8; // Set your desired number of items per page
    const apiUrl = `https://elementor.ivistasolutions.biz/wp-json/wp/v2/${endpoint}?_embed&per_page=${perPage}&page=${page}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching WordPress data:', error);
        return null;
    }
}