"use client";
import * as React from "react";
import {useTheme} from "next-themes";
import {Switch} from "@/app/components/Switch";

export default function SwitchComponent() {
    const { setTheme } = useTheme();
    const label = { "aria-label": "Demo switch" };
    return (
        <Switch
            slotProps={{ input: { ...label } }}
            defaultChecked
            onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
            }}
        />
    );
}