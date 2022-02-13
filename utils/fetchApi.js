import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

/*headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'd1bb4bbfdbmshf52cb917325f531p1929cejsn6aff38ede887'
  }*/


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'd1bb4bbfdbmshf52cb917325f531p1929cejsn6aff38ede887'
        }
    })
    return data;
}