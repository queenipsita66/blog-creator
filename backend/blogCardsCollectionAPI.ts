import { ACCESS_TOKEN, SPACE_ID } from "./config";

const getBlogCardsCollection = async (pageId: string) => {
    const query = `
    query {
        blogCardsCollection (where: {pageId: "${pageId}"}) {
          items {
            title
            description
            pageId
            hasMedia
            media
            hasActionButton
            actionButtonLabel
            createdDate
            createdBy
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
    const blogCards = data?.data?.blogCardsCollection?.items && data?.data?.blogCardsCollection?.items?.length > 0 ? data?.data?.blogCardsCollection?.items?.map((item: any) => item) : [];
    return blogCards;
}

export default getBlogCardsCollection;