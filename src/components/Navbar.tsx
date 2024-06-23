'use client';
import '@/css/components/Navbar.css'
export function Navbar() {
    return (
        <>
            <nav className="navbar">
                <a href='/'><strong>de-y's website</strong></a>
                <div className="nav-links">
                    <a href='/about'>About</a>
                    <a href='/projects'>Projects</a>
                    <a href='/contact'>Settings</a>
                </div>
            </nav>
        </>
    )
}