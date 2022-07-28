import { useState, useEffect } from "react";

const CarouselVisibility = (carousel, rootMargin) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });

        carousel.current && observer.observe(carousel.current);

        return () => {
            observer.unobserve(carousel.current);
        };
    }, [rootMargin]);

    return isVisible;
};

export default CarouselVisibility;
