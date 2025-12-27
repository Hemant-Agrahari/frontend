'use client';
import { Provider } from 'react-redux';
import Layout from '../../.next/types/routes';
import { persistor, store } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import BookLoader from '@/lib/BookLoader';
import {Toaster} from 'react-hot-toast';
export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
          <PersistGate loading={<BookLoader />} persistor={persistor}>
            <Toaster position="top-right" reverseOrder={false} />
            {children}
          </PersistGate>
        </Provider>
    )
}