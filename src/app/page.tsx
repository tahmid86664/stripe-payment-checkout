'use client';

import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error('Public key is not defined');
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Home = () => {
  const amount = 25.99;
  const currency = 'usd';

  return (
    <div className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-yellow-500 to-orange-500">
      <h1 className="text-2xl font-bold mb-4">Subscription Packages</h1>
      <div className="border border-gray-300 p-5 mx-auto w-72 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Basic Plan</h2>
        <p className="text-lg mb-4">
          {amount}
          {currency.toUpperCase()} / month
        </p>
        <Link href={`/checkout?amount=${amount}&currency=${currency}`}>
          <button className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800">
            Purchase
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
