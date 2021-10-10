import Head from 'next/head'
import MainLayout from '../components/Layouts/MainLayout'
import CastInfo from '../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../components/UI/FeaturedMedia/featuredMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'

export default function Movie() {
  return (
      <MainLayout>
        <FeaturedMedia />
        <PosterView />
        <CastInfo />
        
      </MainLayout>
  )
}
