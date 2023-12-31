import {create} from 'zustand';

const useNewsStore = create((set) => ({
  posts: [    {
       key:1,
      image:[`/wall5.jpg`,`/wall5.jpg`,`/wall5.jpg`,,`/train.webp`,],
      title:" As of Saturday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officials ",
      detail: " ISOBEL VAN HAGENJUN 3, 2023, 19:55 As of Saturday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officialsAs of Saturday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officials" 
    },
  {
      key:2,
      image:[`/train2.webp`,`/train.webp` ] ,
      title:" As of Wednesday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officials ",
      detail: " ISOBEL VAN HAGENJUN 3, 2023, 19:55 As of Saturday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officialsAs of Saturday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officials" 
       
    
   },],



  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  getPosts: () => set((state) => ({ posts: state.posts })),
}));

export default useNewsStore;