import React from 'react'
import Ourfaculty from '../components/Ourfaculty.jsx'
import Followus from '../components/Followus.jsx'
import OurStudents from '../components/OurStudents.jsx'
import SearchProgramsBy from '../components/SearchProgramsBy.jsx'
import Spotlight from '../components/Spotlight.jsx'
import Upcomingevents from '../components/Upcomingevents.jsx'
import VideoHeading from '../components/VideoHeading.jsx'
import WeareDifferent from '../components/WeareDifferent.jsx'
import Location from '../components/location.jsx'

const Home_page = () => {
  return (
    <>
      {/* <h1 className='text-center uppercase mb-3'>Home Page</h1>
      <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores omnis totam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia dolores sit, temporibus blanditiis necessitatibus illo consequuntur. Reiciendis officia quos non amet quaerat ea fugiat, laudantium libero totam, eligendi quia?</p> */}
      <VideoHeading
        // title="NEW YORK FILM ACADEMY"
        subtitle={<>COLLEGE OF FILM, MEDIA<br />&amp; PERFORMING ARTS</>}
        altText="People working on film editing software on multiple monitors in a dimly lit room"
      />
      <SearchProgramsBy />
      {/* <Location /> */}
      <Spotlight />
      <WeareDifferent />
      <OurStudents />
      <br />
      <br />
      <Upcomingevents />
      <Ourfaculty />
      <Followus />
    </>
  )
}

export default Home_page