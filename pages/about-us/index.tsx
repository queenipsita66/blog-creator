import getAboutPageCollection from "../../backend/aboutPageCollectionAPI";
import AboutUsPage from "../../components/organisms/AboutUsPage";

export async function getStaticProps() {
    const aboutUsData = await getAboutPageCollection();
    return {
        props: {
            aboutUsData: aboutUsData
        }
    }
}

const AboutUs = (props: any) => {
    return <AboutUsPage {...props}/>
}

export default AboutUs;