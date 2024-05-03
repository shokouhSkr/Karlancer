"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 3 * 1000, // 3 millisecond (30 second)
            // staleTime: 0, // update immediately
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000, // how long success stays in the screen
          },
          error: {
            duration: 2000, // how long error stays in the screen
          },
          // style: {
          //   fontSize: "16px",
          //   maxWidth: "500px",
          //   padding: "16px 24px",
          //   backgroundColor: "#e52121",
          //   color: "#fff",
          // },
        }}
      />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
