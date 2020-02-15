import React from "react"
import SiteLayout from "../components/SiteLayout"
import Seo from "../components/Seo"

import HeroSection from "../components/Sections/HeroSection"
import SetOfFourSection from "../components/Sections/SetOfFourSection"
import EarthSection from "../components/Sections/EarthSection"
import RecentPostsWidget from "../components/Widgets/RecentPostsWidget"

const Page = ({ location }) => {

	return (
		<SiteLayout location={location}>
			<Seo title="Home Page"/>
			<HeroSection />
			<EarthSection />
			<SetOfFourSection />
			<RecentPostsWidget />
		</SiteLayout>
	)
}

export default Page
