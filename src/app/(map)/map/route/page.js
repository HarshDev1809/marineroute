'use client'
import { selectCoordinates, selectRoute } from '@/store/slices/routeSlice';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

// SSR disabled here!
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

export default function MapPage(){
    const data = useSelector(selectRoute)
    const coordinates = useSelector(selectCoordinates)
    console.log(coordinates)
    return <Map route={data?.data?.route} coordinates = {coordinates}/>
}