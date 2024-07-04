import { useState, useEffect } from 'react';
import axios from 'axios';
import './Section.css';
import Card from './Card'; 

const Section = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('https://reqres.in/api/users?page=1');
        const response2 = await axios.get('https://reqres.in/api/users?page=2');
        
        const allUsers = [...response1.data.data, ...response2.data.data];
        setUsers(allUsers); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="Section">
      <input
        className="input"
        type="text"
        placeholder="Enter the name here"
        value={searchTerm}
        onChange={handleSearch}
      />

      {filteredUsers.map(user => (
        <Card key={user.id} user={user} /> 
      ))}
    </div>
  );
};

export default Section;
