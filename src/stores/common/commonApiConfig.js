export const BASE_URL = "https://challenge.3fs.si/storage";
export const HEADERS = {
  headers: {
    Authorization: `Token ${process.env.TOKEN}`,
  },
};
export const UPLOAD_FILE_HEADERS = {
  headers: {
    Authorization: `Token ${process.env.TOKEN}`,
    "Content-Type": "multipart/form-data",
  },
};
