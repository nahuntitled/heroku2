import axios from "axios"

export const SITE_URL = "http://127.0.0.1:3000"
export const API_URL = "http://127.0.0.1:5000/api"

axios.defaults.baseURL = API_URL
axios.defaults.headers.common["X-CSRF-TOKEN"] = document.head
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content")

export default axios