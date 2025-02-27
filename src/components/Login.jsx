import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
    const [isSignin, setIsSignin] = useState(true);

    const handleToggleSignUpForm = () => {
       setIsSignin(!isSignin)
    }

    return(
        <>
            <Header />
            <div className="relative h-screen w-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
                alt="background-img"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Form Container */}
            <div className="relative flex justify-center items-center h-full">
                <form className="w-96 p-8 bg-black bg-opacity-80 rounded-lg shadow-lg text-white z-10">
                <h2 className="text-2xl font-bold mb-6 text-center">{isSignin ? "Sign In" : "Sign Up"}</h2>
                {!isSignin &&
                <>
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="w-full p-3 mb-4 bg-gray-700 rounded focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 mb-4 bg-gray-700 rounded focus:outline-none"
                    />
                </>
                }
                <input
                    type="text"
                    placeholder="Email address"
                    className="w-full p-3 mb-4 bg-gray-700 rounded focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 bg-gray-700 rounded focus:outline-none"
                />
                <button className="w-full p-3 bg-red-600 rounded font-bold hover:bg-red-700">
                    {isSignin ? "Sign In" : "Sign Up"}
                </button>
                <p className="text-sm font-bold mt-6">{isSignin ? "New to Netfilx? " : "Existing user? "} 
                    <span className="cursor-pointer hover:text-red-600" onClick={handleToggleSignUpForm}>
                         {isSignin ? "Sign Up" : "Sign In"}
                    </span>
                </p>
                </form>
            </div>
            </div>
        </>
    )
}

export default Login;