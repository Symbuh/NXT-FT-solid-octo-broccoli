// Next components are server components by default and we can
// do direct data fetching on them using Async await.
async function getNotes() {
  const res = await fetch(
    'http://http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30'
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
