"use client";
import * as React from "react";
import {
    Switch as BaseSwitch,
    switchClasses,
    SwitchProps,
} from "@mui/base/Switch";
import { useTheme } from "next-themes";
import clsx from "clsx";

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

const resolveSlotProps = (fn: any, args: any) =>
    typeof fn === "function" ? fn(args) : fn;

// eslint-disable-next-line react/display-name
const Switch = React.forwardRef<HTMLSpanElement, SwitchProps>((props, ref) => {
    return (
        <BaseSwitch
            ref={ref}
            {...props}
            slotProps={{
                ...props.slotProps,
                root: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.root,
                        ownerState
                    );

                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            `group relative inline-block w-12 h-6 m-2.5  ${
                                ownerState.disabled
                                    ? "cursor-not-allowed opacity-40"
                                    : "cursor-pointer"
                            }`,
                            resolvedSlotProps?.className
                        ),
                    };
                },
                // Here we are overriding the input, track and thumb slots
                input: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.input,
                        ownerState
                    );
                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            "cursor-pointer absolute w-full h-full top-0 left-0 opacity-0 z-10 border-none ",
                            resolvedSlotProps?.className
                        ),
                    };
                },
                // Customizing the track
                track: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.track,
                        ownerState
                    );

                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            `absolute block w-full h-full transition rounded-full  outline-none border-slate-300 dark:border-gray-700 group-[.base--focusVisible]:shadow-outline-switch border border-yellow-600 dark:border-slate-600
                            
                ${
                    ownerState.checked
                        ? "bg-slate-900"
                        : "bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800"
                } `,
                            resolvedSlotProps?.className
                        ),
                    };
                },
                // Customizing the thumb
                thumb: (ownerState) => {
                    const resolvedSlotProps = resolveSlotProps(
                        props.slotProps?.thumb,
                        ownerState
                    );
                    return {
                        ...resolvedSlotProps,
                        className: clsx(
                            `block w-4 h-4 top-1 rounded-2xl   outline-none border-slate-300 dark:border-gray-700 transition ] ${
                                ownerState.checked
                                    ? "left-[26px] bg-[url('/svg/moon.svg')] "
                                    : "left-[4px] bg-[url('/svg/sun.svg')]"
                            }  relative transition-all duration-200 ease-linear`,
                            resolvedSlotProps?.className
                        ),
                    };
                },
            }}
        />
    );
});
