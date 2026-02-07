import { motion } from 'framer-motion'
import './SpaceBackground.css'

function SpaceBackground() {
    // Generate random stars
    const stars = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5
    }))

    return (
        <div className="space-background">
            <div className="star-field">
                {stars.map(star => (
                    <motion.div
                        key={star.id}
                        className="star"
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut"
                        }}
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.size,
                            height: star.size,
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            position: 'absolute',
                            boxShadow: '0 0 5px white'
                        }}
                    />
                ))}
            </div>

            {/* Technical Grid Overlay */}
            <div className="space-grid"></div>
        </div>
    )
}

export default SpaceBackground
