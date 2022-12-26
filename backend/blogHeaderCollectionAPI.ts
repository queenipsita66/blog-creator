import { ACCESS_TOKEN, SPACE_ID } from "./config";

const getBlogHeaderCollection = async () => {
    const query = `
    query {
        blogHeaderCollection {
          items {
            headerTitle
            headerBody
            routesCollection {
              items {
                routeName
                routePath
              }
            }
          }
        }
      }
        
    `
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`, {
        method: "POST",
        body: JSON.stringify({ query }),
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    const blogHeader = data?.data?.blogHeaderCollection?.items && data?.data?.blogHeaderCollection?.items?.length > 0 ? data?.data?.blogHeaderCollection?.items?.map((item: any) => item) : [];
    return blogHeader;
}

export default getBlogHeaderCollection;