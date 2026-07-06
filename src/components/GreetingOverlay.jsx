import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "./GreetingOverlay.css";
import avatar from "../assets/namaste-character_.png"
import { FaHandsPraying } from "react-icons/fa6";

export default function GreetingOverlay({
    open,
    onClose,
    duration = 6000,
}) {

    useEffect(() => {

        if (open === false) return;

        const blast = () => {

            confetti({
                particleCount: 1800,
                spread: 900,
                startVelocity: 60,
                origin: {
                    x: 0.25,
                    y: 1,
                },
            });

            confetti({
                particleCount: 1800,
                spread: 900,
                startVelocity: 60,
                origin: {
                    x: 0.75,
                    y: 1,
                },
            });
        };

        blast();

        const timer = setTimeout(() => {
            onClose?.();
        }, duration);

        return () => clearTimeout(timer);

    }, [open]);

    return (

        <AnimatePresence>

            {open && (

                <motion.div
                    className="greeting-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .6 }}
                >

                    <motion.div
                        className="greeting-text"
                        initial={{
                            opacity: 0,
                            y: -40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: .4,
                            duration: .8,
                        }}
                    >

                        <h1>Namaste</h1>

                        <p>
                            Welcome to my portfolio!
                        </p>

                    </motion.div>


                    <motion.img

                        src={avatar}
                        alt="Avatar"

                        className="greeting-avatar"

                        initial={{
                            scale: .35,
                            y: 100,
                            opacity: 0,
                        }}

                        animate={{

                            scale: 1,

                            y: [100, 0, -10, 0],

                            opacity: 1,
                        }}

                        transition={{

                            delay: .8,

                            duration: 1.8,

                            y: {

                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 2.5,
                            }

                        }}

                    />

                </motion.div>

            )}

        </AnimatePresence>

    );
}