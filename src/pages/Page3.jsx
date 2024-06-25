import React, { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';
import axios from 'axios';
import sheetUrls from '../sheets/sheetUrls';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const Page3 = () => {
    const { state } = useContext(FormContext);
    console.log(state);
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);
  
    const handleSubmit = async () => {
      try {
        setSubmitting(true);
        await addDoc(collection(db, 'formData'), {
            name: state.page1.name,
            email: state.page1.email,
            team: state.page2,
            timestamp: new Date(),
            });

        setSubmitting(false);
        setSubmitSuccess(true);
      } catch (error) {
        console.error('Error:', error);
        setSubmitting(false);
        setSubmitError('Error submitting data. Please try again.');
      }
    };
  
    return (
        <div className="flex-1 flex items-center justify-center">
          <div>
            <h1 className="text-4xl text-white font-bold mb-4">Phân 3</h1>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-white text-red-500 font-semibold rounded"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            {submitSuccess && <p className="text-green-500 mt-2">Data submitted successfully!</p>}
            {submitError && <p className="text-red-500 mt-2">{submitError}</p>}
          </div>
        </div>
      );
    };
  
  export default Page3;