import { useDeletePost, useGetPosts } from "../hooks/useGetPost";

interface post {
    userId : number,
    id :number,
    title : string,
    body : string
}

export const Posts = () => {
  const { postsData, isPending, error } = useGetPosts();
  const {deletePost ,deleteError}  = useDeletePost()

  if (isPending) {
    return <div className=""> pending posts</div>;
  }
  if (error) {
    return <div className=""> error while fetching posts</div>;
  }
  if(deleteError){
    console.log(deleteError);
  }
  return (
    <div>
      Posts
      {
       postsData.map((post : post)=>(
        <div key={post.id} className="h-25 flex gap-2">
            <p>{post.title}</p>
            <button className="border h-8 px-3 cursor-pointer" onClick={()=>deletePost(post.id)}>delete</button>
        </div>
       ))
      }
    </div>
  );
};
