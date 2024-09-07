const Post = ({ data }) => {
  return (
    <>
      <div className="flex gap-4 rounded-xl p-2 bg-slate-800 text-white">
        <div>
          <img
            src={`https://api.dicebear.com/9.x/initials/svg?seed=${data.user_id.username}`}
            alt={data.user_id.username}
            class="rounded-full w-11"
            width="44"
          />{" "}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex flex-col cursor-pointer">
            <span className="text-xl">{data.user_id.name}</span>
            <span className="text-sm text-gray-300">
              @{data.user_id.username}
            </span>
          </div>
          <div className="mt-2 flex-1">{data.content}</div>
        </div>
      </div>
    </>
  );
};

export default Post;
