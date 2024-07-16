"use client";
import "./globals.css";
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from "./store";
import Header from "./src/components/Header";
import MainContent from "./src/components/MainContent";

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Header />
        <main className="container mt-3">
          <MainContent />
        </main>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
