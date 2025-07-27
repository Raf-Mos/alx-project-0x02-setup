// Interfaces pour les composants

// Interface pour les propriétés de Card
export interface CardProps {
  title: string;
  content: string;
}

// Interface pour les propriétés de Button
export interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// Interface pour les propriétés de Post
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Interface pour les propriétés de User
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Interface pour les propriétés de Modal
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}
