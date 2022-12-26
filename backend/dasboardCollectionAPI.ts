import { ACCESS_TOKEN, SPACE_ID } from "./config";

const getDashboardPageCollection = async () => {
    const query = `
    query {
        dashboardPageCollection (limit: 1) {
          items {
            pageId
            dashboardAnalyticsCollection {
              items {
                title
                totalNumberCount
                analyticsUp
                analyticsDown
                analyticsPercentage
                contentNote1
                extraCountMade
                contentNote2
              }
            }
            recentBlogsCollection {
                items {
                  title
                  description
                  createdBy
                  createdDate
                  readTime
                  tag
                  hasMedia
                  media
                  hasActionButton
                  actionButtonLabel
                  pageId
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
    const blogCards = data?.data?.dashboardPageCollection?.items && data?.data?.dashboardPageCollection?.items?.length > 0 ? data?.data?.dashboardPageCollection?.items?.map((item: any) => item) : [];
    return blogCards;
}

export default getDashboardPageCollection;