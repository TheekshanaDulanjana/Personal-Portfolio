import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-40 bg-transparent backdrop-blur-3xl border-t border-white/10 px-6 py-5 text-sm font-poppins font-light text-center">
      © {new Date().getFullYear()} Theekshana Dulanjana. All Rights Reserved.
    </footer>
  );
}
