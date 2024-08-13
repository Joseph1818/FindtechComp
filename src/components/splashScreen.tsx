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
        }, 3000);

        // Show the second text after the first text fades out
        const showSecondTextTimer = setTimeout(() => {
            setShowFirstText(false);
            setShowSecondText(true);
        }, 4000);

        // Trigger the fade-out effect for the second text after 3 seconds
        const hideSecondTextTimer = setTimeout(() => {
            setFadeOutSecondText(true);
        }, 7000);

        // Show the third text after the second text fades out
        const showThirdTextTimer = setTimeout(() => {
            setShowSecondText(false);
            setShowThirdText(true);
        }, 8000);

        // Trigger the fade-out effect for the third text after 3 seconds
        const hideThirdTextTimer = setTimeout(() => {
            setFadeOutThirdText(true);
        }, 11000);

        // Hide the splash screen after 12 seconds
        const hideSplashScreenTimer = setTimeout(() => {
            setIsVisible(false);
        }, 12000);

        // Cleanup timers
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
                            Connecting Techs to Compagnies
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
