import { ref } from 'vue';
import sanity from '../client';

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)
    
  const query = `*[_type == "post]{
      _id,
      author,
      content
  }[0...50]`;

  const load = async () => {
    try {
      posts.value = await sanity.fetch(query);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
