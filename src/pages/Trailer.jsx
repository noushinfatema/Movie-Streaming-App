export default function Trailer() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-10">
      <iframe
        width="1000"
        height="560"
        src="https://www.youtube.com/embed/b9EkMc79ZSU"
        title="Stranger Things Trailer"
        allowFullScreen
        className="rounded-lg"
      />
    </div>
  );
}