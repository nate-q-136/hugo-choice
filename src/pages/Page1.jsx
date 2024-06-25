import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
    const { state, dispatch } = useContext(FormContext);
    const navigate = useNavigate();
    const handleChange = (e) => {

      dispatch({ type: 'SET_PAGE1', payload: { 
        ...state.page1,
        [e.target.name]: e.target.value 
      } 
    });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    navigate('/page2');
    };
  
    return (
      <div className="flex-1 flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-4xl text-white font-bold mb-4">Phân 1</h1>
            <input
              type="text"
              name="name"
              value={state.page1.name}
              onChange={handleChange}
              className="p-2 rounded mb-4"
              placeholder="Tên của bạn"
            />
            <input
              type="email"
              name="email"
              value={state.page1.email}
              onChange={handleChange}
              className="p-2 rounded"
              placeholder="Email của bạn"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-white text-blue-500 font-semibold rounded">
            Next
          </button>
        </form>
      </div>
    );
  };
  
  export default Page1;