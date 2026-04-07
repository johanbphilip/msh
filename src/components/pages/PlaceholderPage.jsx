export default function PlaceholderPage({ title }) {
  return (
    <div className="flex flex-col items-center justify-center p-10 h-full w-full">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground mt-4">Content for {title} will go here.</p>
    </div>
  );
}
