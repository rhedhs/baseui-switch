"use client";
import * as React from "react";
import {useTheme} from "next-themes";
import {Switch} from "@/app/components/Switch";

export default function SwitchExample() {
    const { theme, setTheme } = useTheme();
    
    return (
        <Switch
            checked={theme === "dark"}
            onChange={() => {
                setTheme(theme ? "dark" : "light");
            }}
        />
    );
}