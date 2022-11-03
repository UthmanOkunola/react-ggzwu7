import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <>
      <h1>This page not found</h1>
      <h4> Please confirm the URL </h4>
      <Link to="/"> Click to Home page</Link>
    </>
  );
}