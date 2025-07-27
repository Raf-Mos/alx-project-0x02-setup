import { PostProps } from '../../interfaces';

const PostCard = ({ id, title, body, userId }: PostProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
          Post #{id}
        </span>
        <span className="text-xs text-gray-500">
          Utilisateur #{userId}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed line-clamp-3">
        {body}
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
          Lire plus →
        </button>
      </div>
    </div>
  );
};

export default PostCard;
