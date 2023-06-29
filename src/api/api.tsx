import { PostTypes } from "../types";
interface PostApi {
  limit: number;
  posts: PostTypes[];
  skip: number;
  total: number;
}
export const postApi = {
  url: `https://dummyjson.com/posts?limit=5`,
  getPosts: async (): Promise<PostApi> => {
    const res = await fetch("https://dummyjson.com/posts?limit=5");
    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    return res.json();
  },
};
