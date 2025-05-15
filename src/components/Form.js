import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Hello {name}</h1>
      <p>Enter your name:</p>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="border border-gray-300 rounded-lg p-2 w-full"
      />
    </div>
  );
}
