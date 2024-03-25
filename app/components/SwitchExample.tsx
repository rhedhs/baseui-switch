"use client";
import * as React from "react";
import {useTheme} from "next-themes";
import {Switch} from "@/app/components/Switch";

export default function SwitchExample() {
    const { theme, setTheme } = useTheme();
    const darkModeEnabled = theme === "dark"
    
    return (
        <Switch
            checked={darkModeEnabled}
            onChange={() => setTheme(darkModeEnabled ? "light" : "dark")}
        />
    );
}