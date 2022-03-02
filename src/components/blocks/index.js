import BlogA from './blog/BlogA';
import BlogB from './blog/BlogB';
import BlogC from './blog/BlogC';


export default function getBlock(theme) {
  return {
    Blog: {
      BlogA: <BlogA theme={theme} />,
      BlogB: <BlogB theme={theme} />,
      BlogC: <BlogC theme={theme} />,
    },
  }
}

