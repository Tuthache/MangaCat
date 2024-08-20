const axios = require("axios");

async function fetchMangaData(page) {
  try {
    const query = `
    query {
      Page (page: ${page}, perPage: 50) {
        media(type: MANGA, sort: POPULARITY_DESC, isAdult: false) {
          id
          title {
            romaji
          }
          staff {
            nodes {
              name {
                full
              }
            }
          }
          genres
          chapters
          status
          description
        }
      }
    }
  `;
    const response = await axios.post("https://graphql.anilist.co", { query });
    //console.log("Response from Anilist: ", response.data);
    return response.data.data.Page.media;
  } catch (error) {
    console.error("Error fetching data from Anilist: ", error);
    return [];
  }
}

module.exports = { fetchMangaData };
