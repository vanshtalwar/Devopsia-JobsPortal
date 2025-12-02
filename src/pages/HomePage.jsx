
import Hero from '../components/Hero'
import HomeCards from "../components/HomeCards"
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
    return (
        <div>

            

            <Hero title="Become a Skilled Dev" subtitle="Find the perfect job that fits your skills and needs" />

            <HomeCards />

            <JobListings isHome={true} />

            <ViewAllJobs />


        </div>
    )
}

export default HomePage