import About from '../components/About';
import Map from '../components/map';

export default function AboutPage() {
  return (
    <div
      className="min-h-screen pt-20"
      style={{
        background: "linear-gradient(180deg, #fffaf5 0%, #fdf7f1 50%, #f8f7f6 100%)",
      }}
    >
      <About />
     <Map />

    </div>
  );
}
