'use client';
import React from 'react';

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>Something went wrong </h1>
      <p>Failed to fetch meal data. Try again later 😥</p>
    </main>
  );
};

export default Error;
