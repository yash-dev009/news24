import {create} from 'zustand';



const useNewsStore = create((set) => ({

  posts: [    {
       id:1,
      image:[`/wall5.jpg`,`/wall5.jpg`,`/wall5.jpg`,,`/train.webp`,],
      title:" As of Saturday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officials ",
      detail: " ISOBEL VAN HAGENJUN 3, 2023, 19:55 As of Saturday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officialsAs of Saturday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officials",
      isCapture:false,
      isfav:false
    },
  {
      id:2,
      image:[`/train2.webp`,`/train.webp` ] ,
      title:" As of Wednesday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officials ",
      detail: " ISOBEL VAN HAGENJUN 3, 2023, 19:55 As of Saturday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officialsAs of Saturday, at least 280 people died, and about 900 people were injured in the tragedy, according to Indian officials" ,
      isCapture:false,
      isfav:false,
      
    
   }],
   

  addPost:(post) => set((state) => ({ posts:[...state.posts, post] })),

  
  updatePost:(id,value) => set((state) => {
    console.log(id,value,"details");
    let pre = [...state.posts]
    pre[id].isfav = value
    // console.log(pre,"value");
    return pre
    // posts = pre
  }),
  savePost:(id,value) => set((state) => {
    console.log(id,value,"details");
    let previous = [...state.posts]
    previous[id].isCapture = value
    // console.log(pre,"value");
    return previous
    // posts = pre
  }),
   user: (user)=> set((state)=>({
   
  users:[...state.users , user]})),
   users:[],
  
   addUser: (user) =>
   set((state) => ({
   
    users: [...(state.users || []), user],
  
   })),

  // addFavPost: (post) =>
  //   set((state) => ({
  //     favpost: [...state.favpost, post], // Add the post to the favpost array
  //   })),

    // getfavpost: ()=> set((state)=> ({favpost:state.favpost})),
  // getPosts: () => set((state) => ({ posts: state.posts })),
}))


export default useNewsStore;