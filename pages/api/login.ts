import { loginUser } from "../../backend/userDetailsAPI";
import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req: any, res: any) {
    // get user from database then:
    const data = await loginUser(req.body);
    console.log("data - ", data)
    req.session.user = data.userDetails;
    await req.session.save();
    res.json({status_code: "200", status_message: "logged in"});
}