import BlogA from './blog/BlogA';
import BlogB from './blog/BlogB';


export default function getBlock() {
  return {
    Blog: {
      BlogA: <BlogA />,
      BlogB: <BlogB />,
    },
  }
}

