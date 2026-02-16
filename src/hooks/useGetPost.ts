import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../utils/fethPost";

export const useGetPosts = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return { postsData: data, isPending, error };
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    
  });
  return{deletePost : mutate , deletingPen : isPending , deleteError :error}
};
