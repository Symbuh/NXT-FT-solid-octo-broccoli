'use client';

export default function Error({ error, reset }: any) {
  return (
    <>
      an error occurred: {error.message}
      <button onClick={() => reset()}>Retry</button>
    </>
  );
}
