import React, { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import axios from "axios";
import sheetUrls from "../sheets/sheetUrls";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Page3 = () => {
  const { state } = useContext(FormContext);
  console.log(state);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      await addDoc(collection(db, "formData"), {
        name: state.page1.name,
        email: state.page1.email,
        team: state.page2,
        timestamp: new Date(),
      });

      setSubmitting(false);
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      setSubmitting(false);
      setSubmitError("Error submitting data. Please try again.");
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen h-screen"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 flex">
          <div className="flex-1 flex items-center justify-center">
            <div>
              <h1 className="text-4xl text-white font-bold mb-4">Phân 3</h1>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-white text-red-500 font-semibold rounded"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
              {submitSuccess && (
                <p className="text-green-500 mt-2">
                  Data submitted successfully!
                </p>
              )}
              {submitError && (
                <p className="text-red-500 mt-2">{submitError}</p>
              )}
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white p-4 flex justify-center space-x-4">
          <Link to="/" className="px-4 py-2 bg-blue-500 rounded">
            1
          </Link>
          <Link to="/page2" className="px-4 py-2 bg-green-500 rounded">
            2
          </Link>
          <Link to="/page3" className="px-4 py-2 bg-red-500 rounded">
            3
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page3;
