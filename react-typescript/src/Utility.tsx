interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: Date;
}

// 1. Create a type that ONLY has name and email
type UserContactInfo = Pick<User, 'name' | 'email'>;

// 2. Create a type for updating a user (where all fields are optional)
type UpdateUserRequest = Partial<Omit<User, 'id' | 'createdAt'>>;

const updateUser = (id: string, updates: UpdateUserRequest) => {

  console.log(`Updating user ${id} with:`, updates);
};