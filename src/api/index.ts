import { extendApiEndPoint } from "./utils";

const api = 'https://www.googleapis.com/books/v1/volumes?q=time&printType=books&maxResults=30';
const apiKey = 'AIzaSyBBA37PHb5UjrZfGBvNsHUF8xct7TRybJ8';

export const getBooks = async (queries: Record<string, string> = {}) => {
  const response = await fetch(`${api}${extendApiEndPoint(queries)}&key=${apiKey}`);

  return response.json();
};
