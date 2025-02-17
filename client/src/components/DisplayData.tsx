import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

interface User {
  id: string; // Change from number to string to match ID type
  email: string;
  username: string;
  password: string;
  role: string;
  friends: {
    email: string;
  }[];
  wife: {
    username: string;
  };
}

const GET_USERS = gql`
  query GetAllUsers {
    users {
      id
      email
      username
      password
      role
      friends {
        email
      }
      wife {
        username
      }
    }
  }
`;

const GET_USERS_BY_ID = gql`
  query GetUserbyID($userId: ID!) {
    user(id: $userId) {
      id
      email
      username
      password
    }
  }
`;

export default function DisplayData() {
  const [users, setUsers] = useState<User[]>([]); // Initialize users as an empty array
  const { data, loading, error } = useQuery<{ users: User[] }>(GET_USERS); // Type the response to match expected data

  const [userId, setUserId] = useState<string>("1"); // userId should be a string if ID is an ID!
  const { data: userData, loading: userLoading, error: userError } = useQuery(GET_USERS_BY_ID, {
    variables: { userId }, // Pass userId as a string variable
  });

  // Log error details to help with debugging
  useEffect(() => {
    if (error) {
      console.error("Error fetching all users:", error.message);
      console.error(error);
    }

    if (userError) {
      console.error("Error fetching user by ID:", userError.message);
      console.error(userError);
    }
  }, [error, userError]);

  // Update users state when the general users data is fetched
  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]); // Runs only when 'data' is updated

  if (loading || userLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Handle query errors for all users
  }

  if (userError) {
    return <div>Error: {userError.message}</div>; // Handle query errors for single user
  }

  return (
    <>
      <div>
        <h2>List Of Users:</h2>
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map((user) => (
            <div key={user.id}>
              <h3>{user.username}</h3>
              <p>{user.email}</p>
              <p>{user.role}</p>

            </div>
          ))
        )}
      </div>

      <div>
        <h2>Fetch User by ID:</h2>
        <label>
          Enter User ID:
          <input
            type="text" // Use text input since the ID is a string
            value={userId}
            onChange={(e) => setUserId(e.target.value)} // Update userId as a string
          />
        </label>

        {userData && userData.user ? (
          <div>
            <h3>{userData.user.username}</h3>
            <p>{userData.user.email}</p>
            <p>{userData.user.password}</p>
          </div>
        ) : (
          <p>No user found with ID {userId}</p>
        )}
      </div>
    </>
  );
}
