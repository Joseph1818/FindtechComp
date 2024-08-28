import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
    const [showFirstText, setShowFirstText] = useState(true);
    const [showSecondText, setShowSecondText] = useState(false);
    const [showThirdText, setShowThirdText] = useState(false);
    const [fadeOutFirstText, setFadeOutFirstText] = useState(false);
    const [fadeOutSecondText, setFadeOutSecondText] = useState(false);
    const [fadeOutThirdText, setFadeOutThirdText] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const hideFirstTextTimer = setTimeout(() => {
            setFadeOutFirstText(true);
        }, 2000);

        
        const showSecondTextTimer = setTimeout(() => {
            setShowFirstText(false);
            setShowSecondText(true);
        }, 3000);
        const hideSecondTextTimer = setTimeout(() => {
            setFadeOutSecondText(true);
        }, 5000);

        const showThirdTextTimer = setTimeout(() => {
            setShowSecondText(false);
            setShowThirdText(true);
        }, 6000);


        const hideThirdTextTimer = setTimeout(() => {
            setFadeOutThirdText(true);
        }, 8000);

      
        const hideSplashScreenTimer = setTimeout(() => {
            setIsVisible(false);
        }, 9000);

     
        return () => {
            clearTimeout(hideFirstTextTimer);
            clearTimeout(showSecondTextTimer);
            clearTimeout(hideSecondTextTimer);
            clearTimeout(showThirdTextTimer);
            clearTimeout(hideThirdTextTimer);
            clearTimeout(hideSplashScreenTimer);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className="splash-screen">
                    {showFirstText && (
                        <h1 className={`splash-text ${fadeOutFirstText ? 'fade-out-text' : ''}`}>
                            Welcome to FindtechComp
                        </h1>
                    )}
                    {showSecondText && (
                        <h1 className={`splash-text ${fadeOutSecondText ? 'fade-out-text' : ''}`}>
                            Connecting Techs to Companies
                        </h1>
                    )}
                    {showThirdText && (
                        <h1 className={`splash-text ${fadeOutThirdText ? 'fade-out-text' : ''}`}>
                            Companies to Techs
                        </h1>
                    )}
                </div>
            )}
        </>
    );
};

export default SplashScreen;
