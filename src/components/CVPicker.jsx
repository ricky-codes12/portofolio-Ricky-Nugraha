import { useEffect, useRef } from "react";
import { ChevronDown, Download, FileText } from "lucide-react";
import { CV_OPTIONS } from "../lib/cv";
import { Button } from "./ui/button";

export default function CVPicker({ label, download = false }) {
  const pickerRef = useRef(null);

  useEffect(() => {
    const closeOutside = (event) => {
      if (!pickerRef.current?.contains(event.target)) {
        pickerRef.current?.removeAttribute("open");
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  return (
    <details
      ref={pickerRef}
      className="cv-picker"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.removeAttribute("open");
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          pickerRef.current.removeAttribute("open");
          pickerRef.current.querySelector("summary").focus();
        }
      }}
    >
      <Button
        as="summary"
        variant="outline"
        className={`hero__button cv-picker__trigger${download ? " cv-picker__trigger--download" : ""}`}
      >
        {download ? <Download size={18} /> : <FileText size={18} />}
        {label}
        <ChevronDown className="cv-picker__chevron" size={16} />
      </Button>
      <div className="cv-picker__options">
        {CV_OPTIONS.map((cv) => (
          <a
            key={cv.language}
            href={cv.url}
            hrefLang={cv.language}
            download={download ? cv.filename : undefined}
            target={download ? undefined : "_blank"}
            rel={download ? undefined : "noreferrer"}
            aria-label={`${label} · ${cv.label} (PDF)`}
            onClick={() => pickerRef.current.removeAttribute("open")}
          >
            <span>{cv.label}</span>
            <span className="cv-picker__format">PDF</span>
          </a>
        ))}
      </div>
    </details>
  );
}
