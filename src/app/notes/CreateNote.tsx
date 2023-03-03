'use client';
// ^ The use client above tells next not to render this component on the
// server but render it client side instead.

import { useState } from 'react';

import { useRouter } from 'next/navigation';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async () => {
    await fetch('http://http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
  };

  setContent('');
  setTitle('');

  // Calling refresh allows us to requery database after every update.
  router.refresh();

  return (
    <form onSubmit={create}>
      <h3>Create a New Note</h3>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Content'
        value={content}
        onChange={(e: any) => setContent(e.target.value)}
      />
      <button type='submit'>Create Note</button>
    </form>
  );
}
