import BlogA from './blog/BlogA';
import BlogB from './blog/BlogB';
import BlogC from './blog/BlogC';
import BlogD from './blog/BlogD';
import BlogE from './blog/BlogE';


export default function getBlock() {
  return {
    Blog: {
      BlogA: <BlogA />,
      BlogB: <BlogB />,
      BlogC: <BlogC />,
      BlogD: <BlogD />,
      BlogE: <BlogE />,
    },
  }
}

