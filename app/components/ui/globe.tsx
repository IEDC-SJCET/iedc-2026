"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import createGlobe, { COBEOptions } from "cobe";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 12000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [255 / 255, 122 / 255, 0 / 255], // #FF7A00
    glowColor: [255 / 255, 122 / 255, 0 / 255],   // #FF7A00
    markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.1291, 113.2644], size: 0.05 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [34.0522, -118.2437], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5072, -0.1276], size: 0.1 },
        { location: [48.8566, 2.3522], size: 0.08 },
        { location: [-33.8688, 151.2093], size: 0.1 },
    ],
};

function isWebGLAvailable() {
    try {
        const canvas = document.createElement("canvas");
        return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
    } catch (e) {
        return false;
    }
}

export function Globe({
    className,
    config = GLOBE_CONFIG,
}: {
    className?: string;
    config?: COBEOptions;
}) {
    let phi = 0;
    let width = 0;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionStart = useRef<number | null>(null);
    const [r, setR] = useState(0);
    const [webGLAvailable, setWebGLAvailable] = useState<boolean | null>(null);

    useEffect(() => {
        setWebGLAvailable(isWebGLAvailable());
    }, []);

    const onRender = useCallback(
        (state: any) => {
            if (!pointerInteracting.current) {
                phi += 0.005;
            }
            state.phi = phi + r;
            state.width = width * 2;
            state.height = width * 2;
        },
        [r],
    );

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };

    useEffect(() => {
        if (!webGLAvailable || !canvasRef.current) return;

        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender,
        });

        if (globe) {
            setTimeout(() => { if (canvasRef.current) canvasRef.current.style.opacity = "1"; });
        }

        return () => {
            if (globe) globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, [config, onRender, webGLAvailable]);

    if (webGLAvailable === false) {
        return (
            <div className={cn("relative flex items-center justify-center", className)}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF7A00] via-[#E55000] to-[#1d0700] opacity-20 blur-3xl animate-pulse" />
                <div className="relative w-[300px] h-[300px] rounded-full border border-white/10 bg-black/40 backdrop-blur-3xl flex flex-col items-center justify-center group overflow-hidden">
                    <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-10 rounded-full border border-[#FF7A00]/20 animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="text-[#FF7A00] font-bold text-2xl opacity-80 group-hover:opacity-100 transition-opacity tracking-widest">IEDC</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-2 font-medium">Innovation Hub</div>
                </div>
            </div>
        );
    }

    return (
        <div
            className={cn(
                "inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
                className,
            )}
        >
            <canvas
                className={cn(
                    "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size] cursor-grab",
                )}
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteractionStart.current = e.clientX;
                    pointerInteracting.current = e.clientX - r * 200;
                    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        setR(delta / 200);
                    }
                }}
            />
        </div>
    );
}
