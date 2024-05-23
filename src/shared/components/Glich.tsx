"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

interface Word {
    text: string;
    color: string;
}

export default function GlitchBanner() {
    const words: Word[] = useMemo(
        () => [
            { text: "SUEÑOS", color: "#FFB3C0" },
            { text: "ASPIRACIONES", color: "#FFA36F" },
            { text: "OBJETIVOS", color: "#FDE047" },
            { text: "DESEOS", color: "#8FC0F7" },
            { text: "TOP", color: "#C7A4FF" },
        ],
        []
    );
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState<Word>({
        text: words[currentWordIndex].text,
        color: words[currentWordIndex].color,
    });
    const [glitchActive, setGlitchActive] = useState(false);

    const GLYPHS = "!$%&/()=?¡*+_-.,;:[]{}^<>'~#|@abcdefghijk1234567890";

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setGlitchActive(true);
        }, 2000);

        return () => clearInterval(interval);
    }, [words.length]);

    const MAX_GLITCH_CHARACTERS = 10;

    useEffect(() => {
        if (glitchActive) {
            const glitchInterval = setInterval(() => {
                const newText = Array.from(
                    { length: currentText.text.length },
                    (_, i) => {
                        if (i < MAX_GLITCH_CHARACTERS) {
                            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                        }
                        return currentText.text[i];
                    }
                ).join("");
                setCurrentText({ text: newText, color: currentText.color });
            }, 50);

            setTimeout(() => {
                clearInterval(glitchInterval);
                setGlitchActive(false);
                setCurrentText({
                    text: words[currentWordIndex].text,
                    color: words[currentWordIndex].color,
                });
            }, 300);
        }
    }, [currentText, glitchActive, words, currentWordIndex]);

    return (
        <section className="w-full h-[560px] flex justify-center p-4">
            <h1
                className="flex flex-col justify-center w-full h-full text-white text-5xl sm:text-6xl md:text-7xl font-black max-lg:text-center tracking-tighter"
            >
                Encuentra el empleo
                <span style={{ color: currentText.color }}>
                    {currentText.text.split("").map((char, index) => (
                        <span
                            key={index}
                            data-char={char}
                            style={
                                {
                                    "--index": index,
                                    "--char-1": `"${GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                                        }"`,
                                    "--char-2": `"${GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                                        }"`,
                                    "--char-3": `"${GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                                        }"`,
                                } as any
                            }
                        >
                            {char}
                        </span>
                    ))}
                </span>
                en Jobify
            </h1>
        </section>
    );
}