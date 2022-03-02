import BlogA from './blog/BlogA';
import BlogB from './blog/BlogB';
import BlogC from './blog/BlogC';
import BlogD from './blog/BlogD';


export default function getBlock(theme) {
  return {
    Blog: {
      BlogA: <BlogA theme={theme} />,
      BlogB: <BlogB theme={theme} />,
      BlogC: <BlogC theme={theme} />,
      BlogD: <BlogD theme={theme} />,
    },
  }
}

