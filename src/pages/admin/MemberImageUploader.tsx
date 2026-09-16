import React, { useState } from "react";
import { Upload, Check, Trash2, Loader2, AlertCircle, Link as LinkIcon, Image as ImageIcon, Sparkles } from "lucide-react";
import { useUploadSingleImageMutation } from "../../redux";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";

interface MemberImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  disabled?: boolean;
}

export function MemberImageUploader({
  value,
  onChange,
  disabled = false,
}: MemberImageUploaderProps) {
  const [uploadSingleImage, { isLoading: isUploading }] = useUploadSingleImageMutation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showManualInput, setShowManualInput] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const processFile = async (file: File) => {
    setErrorMessage(null);

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage("Image file is too large. Maximum size allowed is 10MB.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await uploadSingleImage(formData).unwrap();
      const uploadedUrl =
        response?.data?.url ||
        response?.data?.secure_url ||
        (typeof response?.data === "string" ? response.data : "");

      if (uploadedUrl) {
        onChange(uploadedUrl);
      } else {
        setErrorMessage("Failed to extract uploaded image URL from server response.");
      }
    } catch (err: any) {
      console.error("Cloudinary upload failed:", err);
      setErrorMessage(
        err?.data?.message ||
        err?.error ||
        "Upload failed. Please ensure the backend server and Cloudinary credentials are active."
      );
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await processFile(e.target.files[0]);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (disabled || isUploading) return;
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await processFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (!disabled && !isUploading) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono uppercase tracking-wider text-[#dfb277] flex items-center gap-1.5 font-medium">
          <Sparkles className="h-3.5 w-3.5 text-[#dfb277]" />
          <span>Member Profile Photo</span>
          <span className="text-[10px] text-zinc-500 font-mono normal-case tracking-normal">(Optional)</span>
        </label>
        <button
          type="button"
          onClick={() => setShowManualInput(!showManualInput)}
          className="text-[11px] font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
        >
          <LinkIcon className="h-3 w-3" />
          <span>{showManualInput ? "Hide Direct URL" : "Paste Direct URL"}</span>
        </button>
      </div>

      {errorMessage && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Case 1: Photo is already uploaded / has URL */}
      {value ? (
        <div className="rounded-2xl border border-[#dfb277]/30 bg-gradient-to-br from-[#060e1d] via-[#030712] to-[#030712] p-4 flex flex-col sm:flex-row items-center gap-5 shadow-xl transition-all">
          {/* Circular / Rounded Preview */}
          <div className="h-24 w-24 rounded-2xl overflow-hidden bg-zinc-900 border-2 border-[#dfb277] shadow-[0_0_25px_rgba(223,178,119,0.3)] shrink-0 relative flex items-center justify-center">
            <img
              src={value}
              alt="Member Preview"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>

          {/* Details & Link Display */}
          <div className="flex-1 w-full min-w-0 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <Badge variant="success" className="text-[10px] shadow-sm">
                <Check className="h-3 w-3 mr-1 text-emerald-400" />
                Cloudinary CDN Connected
              </Badge>
              <button
                type="button"
                onClick={() => onChange("")}
                className="text-xs font-mono text-rose-400 hover:text-rose-300 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="h-3 w-3" /> Remove
              </button>
            </div>

            {/* Input displaying the auto-placed Cloudinary link */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                Direct Image Asset Link:
              </span>
              <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="https://res.cloudinary.com/..."
                className="h-8 text-xs font-mono bg-white/[0.04] text-zinc-300 focus:border-[#dfb277] border-white/10"
              />
            </div>

            {/* Re-upload Option */}
            <label className="inline-flex items-center gap-1.5 text-xs font-mono text-[#dfb277] hover:underline cursor-pointer">
              <Upload className="h-3 w-3" />
              <span>Replace with another photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={isUploading || disabled}
                className="hidden"
              />
            </label>
          </div>
        </div>
      ) : isUploading ? (
        /* Case 2: Uploading state with loader */
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#dfb277] rounded-2xl p-8 bg-[#dfb277]/[0.04] text-center shadow-[0_0_30px_rgba(223,178,119,0.15)] animate-pulse">
          <Loader2 className="h-8 w-8 text-[#dfb277] animate-spin mb-3" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#dfb277]">
            Uploading to Cloudinary...
          </span>
          <span className="text-[11px] text-zinc-400 mt-1">
            Optimizing file & generating secure CDN URL
          </span>
        </div>
      ) : (
        /* Case 3: Empty State - Luxury Dashed Dropzone */
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-8 cursor-pointer transition-all duration-300 text-center group relative overflow-hidden ${
            isDragOver
              ? "border-[#dfb277] bg-[#dfb277]/10 shadow-[0_0_30px_rgba(223,178,119,0.2)] scale-[1.01]"
              : "border-white/15 hover:border-[#dfb277]/60 bg-gradient-to-b from-white/[0.02] to-transparent hover:bg-white/[0.04] hover:shadow-[0_8px_25px_rgba(223,178,119,0.08)]"
          }`}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={disabled}
            className="hidden"
          />

          <div className="h-14 w-14 rounded-2xl bg-[#dfb277]/10 border border-[#dfb277]/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#dfb277]/20 transition-all duration-300 shadow-[0_0_20px_rgba(223,178,119,0.2)]">
            <Upload className="h-6 w-6 text-[#dfb277]" />
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-white group-hover:text-[#dfb277] transition-colors">
            {isDragOver ? "DROP IMAGE HERE TO UPLOAD" : "SELECT FILE TO UPLOAD (OPTIONAL)"}
          </span>
          <span className="text-[11px] font-mono text-zinc-500 mt-1.5">
            PNG, JPG, WEBP up to 10MB • Drag & drop supported • You can skip this
          </span>
        </label>
      )}

      {/* Optional Manual Direct URL Input */}
      {showManualInput && !value && (
        <div className="pt-2">
          <Input
            placeholder="Or paste direct image URL (Google Drive CDN, Unsplash, Cloudinary)..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-xs font-mono"
          />
        </div>
      )}
    </div>
  );
}
