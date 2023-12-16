'use client';

import React from 'react';
import { useFormStatus } from 'react-dom'; // This is a custom hook that we'll create in the next step

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Share meal'}
    </button>
  );
};

export default MealsFormSubmit;
