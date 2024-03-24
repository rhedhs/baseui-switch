"use client";
import { Input } from "@mui/base/Input";

export default function SignInForm() {
    return (
        <form>
            <Input
                // className={
                //     "max-w-md px-6 py-3 rounded-md bg-slate-950 text-white   "
                // }
                slotProps={{
                    input: {
                        className:
                            "max-w-md px-4 py-2 rounded-md bg-slate-950 text-white !focus-within:outline-slate-900 ",
                    },
                }}
                // aria-label="Demo input"
                placeholder="Type something…"
            />
            <Input
                // className={
                //     "max-w-md px-6 py-3 rounded-md bg-slate-950 text-white   "
                // }
                slotProps={{
                    input: {
                        className:
                            "max-w-md px-4 py-2 rounded-md bg-slate-950 text-white !focus-within:outline-slate-900 ",
                    },
                }}
                // aria-label="Demo input"
                placeholder="Type something…"
            />
        </form>
    );
}
