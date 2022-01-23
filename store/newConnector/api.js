import axios from "axios"
const newConnector = axios.create({
  baseURL: "https://anchor.fm",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function newconnector_get_s_133a96d0_podcast_rss_list(payload) {
  return newConnector.get(`/s/133a96d0/podcast/rss`)
}
function newconnector_get_s_1344bae8_podcast_rss_list(payload) {
  return newConnector.get(`/s/1344bae8/podcast/rss`)
}
export const apiService = {
  newconnector_get_s_133a96d0_podcast_rss_list,
  newconnector_get_s_1344bae8_podcast_rss_list
}
