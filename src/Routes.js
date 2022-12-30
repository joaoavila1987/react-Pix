import React from 'react'
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import Pix from './components/pix/Pix';

export default function RoutesApp() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Pix />} />
                <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
