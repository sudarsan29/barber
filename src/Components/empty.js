import react from 'react';

const empty = () => {
    return (
    <div className="text-white bg-red"> 
        <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your full name"
              />
    </div>
)}

export default empty;