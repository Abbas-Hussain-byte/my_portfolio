import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's a hash, let the browser handle it (don't scroll to top)
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;
