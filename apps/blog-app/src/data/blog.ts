export type Post = {
  slug: string;
  title: string;
};

const posts: Post[] = [
  { slug: 'post3', title: 'The first blog post' },
  { slug: 'post4', title: 'The second blog post' },
];

export const getPosts = (): Post[] => posts;
