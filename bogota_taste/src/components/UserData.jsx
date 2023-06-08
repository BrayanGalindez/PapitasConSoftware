import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantUser from './RestaurantUser';

const UserData = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (data) {
      setName(data.name);
      setLastName(data.lastName);
      setEmail(data.email);
    }
  }, [data]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/user/${data.id}`, {
        name,
        lastName,
        email,
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit">Update</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <div>
          <p>Name: {name}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
      {data.restaurants && (
        <div>
          <h3>Added Restaurants:</h3>
          <ul>
            {data.restaurants.map((restaurant) => (
              <RestaurantUser key={restaurant.id} restaurant={restaurant} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserData;