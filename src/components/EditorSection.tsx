import { useState } from "react";
import {
  Upload,
  ScanSearch,
  Type,
  Palette,
  Image,
  RotateCcw,
  Download,
  Save,
  Wand2,
  MousePointerSquare,
  Square,
  FileImage,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EditorSection = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [templateType, setTemplateType] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) {
      processFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      setUploadedImage(ev.target?.result as string);
      setTemplateType(null);
      toast.success("Image uploaded successfully!");
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const types = ["Table Layout", "Social Post", "Poster Design", "Card Template", "Dashboard UI"];
      setTemplateType(types[Math.floor(Math.random() * types.length)]);
      setAnalyzing(false);
      toast.success("Analysis complete! Template type detected.");
    }, 2000);
  };

  return (
    <section id="editor" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Design <span className="gradient-text">Workspace</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Upload, analyze, and edit your templates</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          {/* Left Panel */}
          <div className="flex flex-col gap-4">
            {/* Upload Box */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="glass group flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl p-6 transition-all duration-300 hover:border-primary/50"
              onClick={() => document.getElementById("file-input")?.click()}
            >
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded preview"
                  className="max-h-[200px] rounded-xl object-contain"
                />
              ) : (
                <>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">Drop image here or click to upload</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG, SVG up to 10MB</p>
                </>
              )}
              <input
                id="file-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileSelect}
              />
            </div>

            {/* Template Type */}
            {templateType && (
              <div className="glass flex items-center gap-3 rounded-2xl p-4 animate-scale-in">
                <FileImage className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Detected Template</p>
                  <p className="font-semibold text-foreground">{templateType}</p>
                </div>
              </div>
            )}

            {/* Analyze Button */}
            <Button
              variant="gradient"
              size="lg"
              className="w-full"
              disabled={!uploadedImage || analyzing}
              onClick={analyzeImage}
            >
              {analyzing ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Analyzing...
                </span>
              ) : (
                <>
                  <ScanSearch className="h-5 w-5" />
                  Analyze Image
                </>
              )}
            </Button>
          </div>

          {/* Right Panel - Canvas */}
          <div className="flex flex-col gap-4">
            {/* Toolbar */}
            <div className="glass flex flex-wrap items-center gap-2 rounded-2xl p-3">
              <ToolButton icon={<MousePointerSquare />} label="Select" />
              <ToolButton icon={<Type />} label="Add Text" />
              <ToolButton icon={<Palette />} label="Color" />
              <ToolButton icon={<Image />} label="Image" />
              <ToolButton icon={<Square />} label="Shape" />
              <div className="mx-1 h-6 w-px bg-border" />
              <ToolButton icon={<RotateCcw />} label="Reset" />
            </div>

            {/* Canvas Area */}
            <div className="glass flex min-h-[400px] flex-1 items-center justify-center rounded-2xl p-4 lg:min-h-[500px]">
              {templateType ? (
                <CanvasPreview type={templateType} />
              ) : (
                <div className="flex flex-col items-center gap-3 text-muted-foreground">
                  <Wand2 className="h-10 w-10 opacity-40" />
                  <p className="text-center text-sm">
                    Upload and analyze an image to generate<br />your editable template here
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap gap-3">
              <Button variant="gradient" disabled={!templateType}>
                <Wand2 className="h-4 w-4" /> Generate Template
              </Button>
              <Button variant="glass" disabled={!templateType}>
                <Download className="h-4 w-4" /> Download
              </Button>
              <Button variant="glass" disabled={!templateType}>
                <Save className="h-4 w-4" /> Save Design
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function ToolButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      title={label}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function CanvasPreview({ type }: { type: string }) {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="h-3 w-32 rounded-full bg-primary/30" />
        <div className="h-3 w-16 rounded-full bg-muted" />
      </div>
      {type === "Table Layout" ? (
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-3">
              <div className="h-8 flex-1 rounded-lg bg-muted/60" />
              <div className="h-8 flex-1 rounded-lg bg-muted/40" />
              <div className="h-8 flex-1 rounded-lg bg-muted/60" />
            </div>
          ))}
        </div>
      ) : type === "Social Post" ? (
        <div className="flex flex-col items-center gap-4 py-6">
          <div className="h-32 w-32 rounded-2xl bg-primary/20" />
          <div className="h-4 w-48 rounded-full bg-muted/60" />
          <div className="h-3 w-36 rounded-full bg-muted/40" />
        </div>
      ) : (
        <div className="flex flex-col gap-3 py-4">
          <div className="h-40 w-full rounded-xl bg-primary/10" />
          <div className="h-4 w-3/4 rounded-full bg-muted/60" />
          <div className="h-3 w-1/2 rounded-full bg-muted/40" />
          <div className="h-3 w-2/3 rounded-full bg-muted/30" />
        </div>
      )}
    </div>
  );
}

export default EditorSection;
