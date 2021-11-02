import { API_KEY } from "../keys/keys";

export const TOP_HEADLINES_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
export const GET_SOURCES_URL = `https://newsapi.org/v2/sources?language=en&country=us&apiKey=${API_KEY}`;
export const GET_HEADLINES_BY_SOURCES_URL = `https://newsapi.org/v2/top-headlines?sources=`;