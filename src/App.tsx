import React from "react";
import { useNavigate } from "react-router-dom";
import ValentinePage from "./components/ValentinePage";

interface AppProps {
  setAccessGranted: (access: boolean) => void;
}

const App: React.FC<AppProps> = ({ setAccessGranted }) => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    setAccessGranted(true);
    navigate("/gift");
  };

  const handleNoClick = () => {
    alert("Aww, maybe next time! 🎂");
  };

  return (
    <ValentinePage
      questionText="Want to celebrate your birthday with me?"
      yesGif={`${import.meta.env.VITE_PUBLIC_URL}/happy.gif`}
      noGif={`${import.meta.env.VITE_PUBLIC_URL}/crying.gif`}
      onYesClick={handleYesClick}
      onNoClick={handleNoClick}
    />
  );
};

export default App;