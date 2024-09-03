'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';
import CheckoutPage from '@/components/CheckoutPage';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const Checkout = () => {
  const searchParams = useSearchParams();
  const amount = parseInt(searchParams.get('amount') || '0');
  const currency = searchParams.get('currency') || 'usd';

  return (
    <div className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-yellow-500 to-orange-500">
      <h1 className="text-2xl mb-8">Checkout!!!</h1>
      <div className="border border-gray-300 p-5 mx-auto mb-10 w-72 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Basic Plan</h2>
        <p className="text-lg mb-4">
          {amount}
          {currency.toUpperCase()} / month
        </p>
      </div>
      <Elements
        stripe={stripePromise}
        options={{ mode: 'payment', amount: amount * 100, currency }}
      >
        <CheckoutPage amount={amount} currency={currency} />
      </Elements>
    </div>
  );
};

export default Checkout;
