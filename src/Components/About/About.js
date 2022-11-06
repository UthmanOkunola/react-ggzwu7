import React, {useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AboutUs() {
  const location = useLocation()
  const repos  = location.state

  return (
    <>
      <div>language: 

      {repos.language}

      </div>
    </>
  );
}