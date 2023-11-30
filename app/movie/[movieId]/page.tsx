'use client'
import { useState, useEffect } from "react";
import { getMovieDetails } from "@/app/utilities/getMovieDetails";
import { IMAGE_BASE_URL } from "@/app/config";
const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
    const [movieDetail, setMovieDetail] = useState<any>(null);
    useEffect(() => {
        (async () => {
            try {
                const movieDetailData = await getMovieDetails(movieId);
                setMovieDetail(movieDetailData);
            } catch (error) {
                console.error("Error fetching movie details:", error);
                console.log(movieDetail);
            }
        })();
    }, [movieId]);
    return (
    <div>
        {movieDetail && (
        <div>
            <img src={`${IMAGE_BASE_URL}${movieDetail.poster_path}`} alt={movieDetail.title}/>
            <h2>{movieDetail.title}</h2>
            <p>Overview: {movieDetail.overview}</p>
            <p>Release Date: {movieDetail.release_date}</p>
            </div>
            )}
            </div>
    );
}
export default MovieDetail;