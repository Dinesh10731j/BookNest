"use client"

import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import React from "react";


export const ReactQueryProvider = ({children}:(React.PropsWithChildren))=>{
    const queryClient = new QueryClient();
    return (
        <>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>

        </>
    )
}