import React, { useState, useEffect } from "react";
import SignupForm from "../molecules/SignupForm";
import signup from "../../assets/images/signup.png";

const Signup = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
  
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen md:h-screen flex flex-col md:flex-row overflow-y-auto md:overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 relative">
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseBlob {
          0%, 100% { transform: scale(1) translate(0px, 0px); }
          33% { transform: scale(1.08) translate(20px, -20px); }
          66% { transform: scale(0.95) translate(-10px, 15px); }
        }
        .animate-image-float { animation: float 6s ease-in-out infinite; }
        .animate-form-fade { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-bg-blob { animation: pulseBlob 10s ease-in-out infinite; }
      `}</style>

      {/* Visual Depth: Ambient Background Blobs */}
      <div className="absolute top-12 left-12 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bg-blob hidden md:block" />
      <div className="absolute bottom-12 right-12 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bg-blob hidden md:block" style={{ animationDelay: '2s' }} />

      {/* Left Panel */}
      <div
        className="w-full md:w-[55%] min-h-[35vh] md:h-full relative z-10 flex items-center justify-center bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-600 p-6 md:p-0 transition-all duration-500 ease-in-out"
        style={{

          clipPath: isDesktop ? "polygon(0 0, 90% 0, 100% 100%, 0 100%)" : "none",
        }}
      >

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <img
          src={signup}
          alt="Signup"
          className="w-full max-w-[320px] sm:max-w-md md:max-w-xl object-contain animate-image-float drop-shadow-2xl z-10"
        />
      </div>

      <div
        className="w-full md:w-[55%] relative z-0 md:-ml-[8%] flex items-center justify-center px-6 sm:px-14 lg:px-20 py-10 md:py-0 transition-all duration-500 ease-in-out"
        style={{
     
          clipPath: isDesktop ? "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" : "none",
        }}
      >
       
        <div className="w-full max-w-md mx-auto opacity-0 animate-form-fade">
          <SignupForm />
        </div>
      </div>

    </div>
  );
};

export default Signup;