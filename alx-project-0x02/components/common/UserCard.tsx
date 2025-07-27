import { UserProps } from '../../interfaces';

const UserCard = ({ id, name, email, address, phone, website, company }: UserProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {name}
          </h3>
          <span className="text-sm text-blue-600 font-medium">
            ID: {id}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-500">
            {company.name}
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 w-16">Email:</span>
          <a 
            href={`mailto:${email}`} 
            className="text-sm text-blue-600 hover:text-blue-800 break-all"
          >
            {email}
          </a>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 w-16">Tél:</span>
          <a 
            href={`tel:${phone}`} 
            className="text-sm text-gray-700"
          >
            {phone}
          </a>
        </div>
        
        <div className="flex items-start space-x-2">
          <span className="text-sm text-gray-500 w-16 mt-0.5">Adresse:</span>
          <span className="text-sm text-gray-700 flex-1">
            {address.street}, {address.suite}<br />
            {address.city}, {address.zipcode}
          </span>
        </div>
        
        {website && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 w-16">Site:</span>
            <a 
              href={`https://${website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 break-all"
            >
              {website}
            </a>
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500 italic">
          &quot;{company.catchPhrase}&quot;
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {company.bs}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
