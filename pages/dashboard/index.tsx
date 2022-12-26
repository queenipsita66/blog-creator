import getDashboardPageCollection from "../../backend/dasboardCollectionAPI";
import DashboardPage from "../../components/organisms/DashboardPage";
import SignInPage from "../../components/organisms/SignInPage";
import { withSessionSsr } from "../../lib/withSession";

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }) {
        // console.log("coming in getServerSideProps");
        // const user = req.session?.user;
        // console.log("user - ", user);

        // if (user && user?.email) {
        //     const dashboardData = await getDashboardPageCollection();
        //     return {
        //         props: {
        //             authenticated: true,
        //             dashboardData: dashboardData
        //         },
        //     };
        // }
        const dashboardData = await getDashboardPageCollection();
        return {
            props: {
                authenticated: true,
                dashboardData: dashboardData
            },
        };
    },
);

const Dashboard = (props: any) => {
    if (props.authenticated) {
        return <DashboardPage {...props} />
    } else {
        return <SignInPage {...props}/>
    }
}

export default Dashboard;