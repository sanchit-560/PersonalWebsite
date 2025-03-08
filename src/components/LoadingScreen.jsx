import React from "react";
import { TypeWriter } from "./TypeWriter";

export const LoadingScreen = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="text-center">
                <TypeWriter text="Loading, please wait..." delay={100} />
                <div className="mt-4 animate-pulse text-gray-400">This won't take long.</div>
            </div>
        </div>
    );
};
