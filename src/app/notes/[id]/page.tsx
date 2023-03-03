import styles from '../Notes.module.css';

async function getNote(noteID: string) {
  /*
    Because this a 'dynamic route', it won't automatically cache every req

    You can update the caching behavior by implementing static generation
      The second parameter below ensures that this page is updated every
      10 seconds.
  */
  const res = await fetch(
    `http://http://127.0.0.1:8090/api/collections/notes/records/${noteID}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}
export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
}
