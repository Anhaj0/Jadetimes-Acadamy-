import React from 'react';
import Logo from "../../assets/Images/EventsHeading.png"

export default function Heading() {
  return (
    <header className="bg-black p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
            <img
              alt="NYFA logo"
              className="h-12 w-auto"
              src={Logo} 
            />
        </a>
        <div>
          <h1 className="text-sm font-light">NEW YORK FILM ACADEMY</h1>
          <h2 className="text-3xl font-bold">Events</h2>
        </div>
      </div>
    </header>
  );
}