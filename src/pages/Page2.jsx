import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
    const { state, dispatch } = useContext(FormContext);
    console.log('Current state:', state);

    const navigate = useNavigate();

    const handleOptionChange = (value) => {
        dispatch({ type: 'SET_PAGE2', payload: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/page3');
    };

    const options = ['Team A', 'Team B', 'Team C', 'Team D'];

    return (
        <div className="flex-1 flex items-center justify-center ">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="mb-8">
                    <h1 className="text-4xl text-white font-bold mb-4">Phân 2</h1>
                    <div className="space-y-2">
                        {options.map((option) => (
                            <div
                                key={option}
                                className={`flex items-center justify-center p-4 border-2 rounded cursor-pointer ${state.page2 === option ? 'border-green-500' : 'border-transparent'} hover:border-green-500`}
                                onClick={() => handleOptionChange(option)}
                            >
                                <span className="text-white">{option}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-white text-green-500 font-semibold rounded hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Next
                </button>
            </form>
        </div>
    );
};

export default Page2;