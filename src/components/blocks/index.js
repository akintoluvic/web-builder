import BlogA from './blog/BlogA';
import BlogB from './blog/BlogB';


export default function getBlock(theme) {
  return {
    Blog: {
      BlogA: <BlogA theme={theme} />,
      BlogB: <BlogB theme={theme} />,
    },
  }
}

