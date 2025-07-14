
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <Helmet>
  <title>404 Not Found | RF Connector - Synergy Telecom</title>
  <meta
    name="description"
    content="The page you are looking for could not be found. Return to the homepage to explore our RF and telecom product offerings."
  />
  <meta name="robots" content="noindex, nofollow" />
  <meta property="og:title" content="404 Not Found | RF Connector - Synergy Telecom" />
  <meta
    property="og:description"
    content="Oops! This page doesn't exist. Go back to the homepage to continue browsing Synergy Telecom's RF solutions."
  />
  <meta property="og:url" content="https://panaceaticsynergy.com/404" />
  <meta property="og:type" content="website" />
</Helmet>
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link to="/" className="text-blue-500 underline hover:text-blue-700">
        Go back to Home
      </Link>
    </div>
  );
};

export default Notfound;
