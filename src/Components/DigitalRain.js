import { useEffect, useRef } from "react";

const DigitalRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Set canvas to full screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Matrix characters (Katakana + Latin + Numbers)
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
        const charArray = chars.split("");

        const fontSize = 14;
        const columns = canvas.width / fontSize;

        // Array of drops - one per column
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start at random negative heights
        }

        const draw = () => {
            // Translucent black background to create trail effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Random color: mostly cyan, some purple/white
                const random = Math.random();
                if (random > 0.98) ctx.fillStyle = "#fff"; // Bright lead
                else if (random > 0.8) ctx.fillStyle = "#a855f7"; // Purple accent
                else ctx.fillStyle = "#06b6d4"; // Cyan primary

                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Sending the drop back to the top randomly after it has crossed the screen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33); // ~30 FPS

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
        />
    );
};

export default DigitalRain;
