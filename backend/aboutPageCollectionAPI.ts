import { ACCESS_TOKEN, SPACE_ID } from "./config";

const getAboutPageCollection = async () => {
    const query = `
    query {
        aboutPageCollection {
          items {
            title
            description
            aboutUsMedia
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
    const blogCards = data?.data?.aboutPageCollection?.items && data?.data?.aboutPageCollection?.items?.length > 0 ? data?.data?.aboutPageCollection?.items?.map((item: any) => item) : [];
    return blogCards;
}

export default getAboutPageCollection;