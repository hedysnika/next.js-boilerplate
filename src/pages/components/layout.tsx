import { PropsWithChildren } from "react";
import { Navigation } from "./navigation";

export function Layout({ children }: PropsWithChildren) {



    return (
        <main className="h-[100px] bg-black">
            <Navigation />
            <div className="text-center">
                {children}
            </div>
        </main>
    );
}