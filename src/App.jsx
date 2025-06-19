import { useState } from "react";
import Button from "./components/ui/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Section 1: Counter */}
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Test Tailwind CSS
            </h1>
            <div className="space-x-4">
              <Button
                variant="primary"
                onClick={() => setCount((count) => count + 1)}
              >
                Count is: {count}
              </Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
          </div>

          {/* Section 2: Button Variants */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Contoh Variasi Tombol
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 justify-center">
                <Button variant="primary">Tombol Primary</Button>
                <Button variant="secondary">Tombol Secondary</Button>
                <Button variant="outline">Tombol Outline</Button>
              </div>
              <div className="flex gap-4 justify-center">
                <Button size="small">Tombol Kecil</Button>
                <Button size="medium">Tombol Sedang</Button>
                <Button size="large">Tombol Besar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
