import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Download, ExternalLink, FileText, ImageOff, X, ZoomIn } from 'lucide-react';
import { Badge } from './ui/badge';

function ProjectDetails({ project, copy, language, onClose }) {
  const dialogRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const caption = (item) => typeof item.caption === 'string' ? item.caption : item.caption?.[language] || item.caption?.en || project.title;

  return (
    <dialog className="project-details" ref={dialogRef} aria-labelledby="project-details-title" onClose={(event) => { if (!event.currentTarget.open) onClose(); }} onClick={(event) => {
      if (event.target === event.currentTarget) {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
      }
    }}>
      <div className="project-details__heading">
        <div><span className="project-details__eyebrow">{copy.company}</span><h2 id="project-details-title">{project.title}</h2></div>
        <button type="button" className="project-details__close" aria-label={copy.close} onClick={() => dialogRef.current.close()} autoFocus><X size={22} /></button>
      </div>
      {photo ? (
        <div className="project-gallery__expanded">
          <button type="button" className="project-details__back" onClick={() => setPhoto(null)}><ArrowLeft size={17} />{copy.back}</button>
          <figure><img src={photo.src} alt={caption(photo)} /><figcaption>{caption(photo)}</figcaption></figure>
        </div>
      ) : (
        <>
          <p className="project-details__description">{project.desc}</p>
          <dl className="project-details__facts">
            <div><dt>{copy.role}</dt><dd>{project.role}</dd></div>
            <div><dt>{copy.contribution}</dt><dd>{project.contribution}</dd></div>
          </dl>
          <h3>{copy.technology}</h3>
          <div className="project-details__tech">{project.tech.map(item => <Badge key={item} variant="outline">{item}</Badge>)}</div>
          {project.documents?.length ? (
            <section className="project-documents" aria-label={copy.documents}>
              <h3>{copy.documents}</h3>
              {project.documents.map(document => (
                <article className="project-documents__item" key={document.docx || document.pdf}>
                  <FileText size={26} aria-hidden="true" />
                  <div>
                    <h4>{document.title[language] || document.title.en}</h4>
                    <p>{document.description[language] || document.description.en}</p>
                    <div className="project-documents__links">
                      {document.pdf ? <a href={document.pdf} target="_blank" rel="noreferrer"><ExternalLink size={16} />{copy.viewPDF}</a> : null}
                      {document.docx ? <a href={document.docx} download><Download size={16} />{copy.downloadDOCX}</a> : null}
                    </div>
                  </div>
                </article>
              ))}
            </section>
          ) : null}
          <h3>{copy.gallery}</h3>
          {project.photos.length ? (
            <div className="project-gallery">{project.photos.map(item => (
              <figure key={item.src}>
                <button type="button" aria-label={`${copy.enlarge}: ${caption(item)}`} onClick={() => setPhoto(item)}><img src={item.src} alt={caption(item)} loading="lazy" /><ZoomIn size={20} /></button>
                <figcaption>{caption(item)}</figcaption>
              </figure>
            ))}</div>
          ) : (
            <div className="project-gallery__empty"><ImageOff size={32} /><strong>{copy.empty}</strong><p>{copy.emptyDesc}</p><p>{project.evidence}</p></div>
          )}
        </>
      )}
    </dialog>
  );
}

export default ProjectDetails;
