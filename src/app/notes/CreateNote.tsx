'use client';
// ^ The use client above tells next not to render this component on the
// server but render it client side instead.

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async () => {
    // let response = await fetch(
    //   'http://127.0.0.1:8090/api/collections/notes/records',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       title,
    //       content,
    //     }),
    //   }
    // );

    // console.log(response);
    // // Calling refresh allows us to requery database after every update.
    const pb = new PocketBase('http://127.0.0.1:8090');

    const data = {
      title: title,
      content: content,
    };

    const record = await pb.collection('notes').create(data);
    console.log(record);

    setContent('');
    setTitle('');

    router.refresh();
  };

  return (
    <form onSubmit={create}>
      <h3>Create a New Note</h3>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type='submit'>Create Note</button>
    </form>
  );
}
