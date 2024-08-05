const axios = require("axios");

const query = `
    query {
      Page (page: 1, perPage: 50) {
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

async function fetchMangaData() {
  try {
    const response = await axios.post("https://graphql.anilist.co", { query });
    return response.data.data.Media;
  } catch (error) {
    console.error("Error fetching data from Anilist: ", error);
    return [];
  }
}

module.exports = { fetchMangaData };
