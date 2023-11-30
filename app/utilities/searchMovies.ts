import { ACCESS_TOKEN, IMAGE_BASE_URL } from "../config";



export const searchMovies = async() =>{
    try{
        const response = await fetch (`${IMAGE_BASE_URL}/3/search/movie?query=`,{
            method: 'GET',
            headers:{
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }

        });
        const result = await response.json();
        return result;
    }
    catch(error: any){
        return error.message;
    }

};