const format = (date) => {
  const dt = new Date(date);

  return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
};

const Post = ({ data }) => {
  return (
    <>
      <div className="flex gap-4 rounded-xl p-2 bg-slate-800 text-white">
        <div>
          <img
            src={`https://api.dicebear.com/9.x/initials/svg?seed=${data.user_id.username}`}
            alt={data.user_id.username}
            className="rounded-full w-11"
            width="44"
          />{" "}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between">
            <div className="flex flex-col cursor-pointer">
              <span className="text-xl">{data.user_id.name}</span>
              <span className="text-sm text-gray-300">
                @{data.user_id.username}
              </span>
            </div>
            <div className="mt-1">
              <span className="text-sm float-end">
                {format(data.createdAt)}
              </span>
            </div>
          </div>
          <div className="mt-2 flex-1 content-display">{data.content}</div>
        </div>
      </div>
    </>
  );
};

export default Post;
