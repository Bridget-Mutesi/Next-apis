'use client'
import { useState,useEffect } from 'react'
import { getMovies } from '@/app/utilities/getMovies';
import { IMAGE_BASE_URL } from '@/app/config';
import Link from 'next/link';
interface MovieProps {
  id:number;
  title:string;
  genre_ids:number[];
  poster_path:string
}
export default function Movies() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  
  useEffect(()=>{
    (async()=>{
      const movies=await getMovies()
      setMovies(movies)
      console.log({movies});
      console.log({IMAGE_BASE_URL});
    })()
  },[])
  return (
   <main className="p-2">
    <div className='grid grid-cols-4 gap-4'>
      {movies?.map((item)=>(
        <Link href={`/movie/${item.id}`} key={item.id}>
          <div>
            <img src={`${IMAGE_BASE_URL}${item.poster_path}`}alt={item.title}/>
          </div>
        </Link>
      ))}
    </div>
   </main>
  )
}