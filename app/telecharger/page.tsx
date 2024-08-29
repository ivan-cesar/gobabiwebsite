"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Detect: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const userAgent: string = navigator.userAgent || navigator.vendor;

        if (/android/i.test(userAgent) || /windows/i.test(userAgent)) {
            // Rediriger vers Google Play Store pour Android ou PC Windows
            window.location.href = 'https://play.google.com/store/apps/details?id=com.gobabi.user&hl=fr&pli=1';
        } else if (/iPad|iPhone|iPod/.test(userAgent) || /Macintosh/.test(userAgent)) {
            // Rediriger vers l'App Store pour iPhone, iPad ou Mac
            window.location.href = 'https://apps.apple.com/ci/app/gobabi/id6467127120';
        } else {
            // Rediriger vers Google Play Store par défaut
            window.location.href = 'https://play.google.com/store/apps/details?id=com.gobabi.user&hl=fr&pli=1';
        }
    }, []);

    return (
        <div>
            <p>Redirection en cours...</p>
        </div>
    );
};

export default Detect;
