// Next components are server components by default and we can
// do direct data fetching on them using Async await.
import CreateNote from './CreateNote';
import Link from 'next/link';
import PocketBase from 'pocketbase';

// This is how we change the caching behavior
// This export statement is necessary when you're not using fetch.
export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto';

async function getNotes() {
  // const res = await fetch(
  //   'http://http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',
  //   { cache: 'no-store' }
  // );
  // const data = await res.json();

  // Here we use the PocketBase SDK to fetch our data instead of fetch.
  const db = new PocketBase('http://127.0.0.1:8090');
  const data = await db.records.getList('notes');
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
