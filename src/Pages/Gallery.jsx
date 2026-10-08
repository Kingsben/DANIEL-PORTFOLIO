import { useEffect, useState } from "react";
import { galleryFilters, galleryImages } from "../data/gallery";
import "./Gallery.css";

function Gallery() {
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState(null);
  const images = filter === "ALL" ? galleryImages : galleryImages.filter((image) => image.category === filter);
  useEffect(() => { if (!selected) return undefined; const key = (event) => event.key === "Escape" && setSelected(null); const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; window.addEventListener("keydown", key); return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", key); }; }, [selected]);
  return <main className="full-gallery"><div className="full-gallery-container"><a href="/#projects" className="gallery-back">← BACK TO PROJECTS</a><span className="projects-label">06 / ENGINEERING GALLERY</span><h1>Engineering work in practice.</h1><p>A selection of practical engineering work, CAD development, electronics testing, manufacturing and automation.</p><div className="gallery-filters">{galleryFilters.map((item) => <button type="button" key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div><div className="gallery-grid full-gallery-grid">{images.map((image, index) => <button className={`gallery-item gallery-editorial-${(index % 5) + 1}`} type="button" key={image.file} onClick={() => setSelected(image)} aria-label={`View larger image: ${image.alt}`}><img src={`/projects/${image.file}`} alt={image.alt} loading="lazy" /><span>{image.category}</span></button>)}</div></div>{selected && <div className="image-lightbox" role="presentation" onClick={() => setSelected(null)}><div className="lightbox-content" role="dialog" aria-modal="true" aria-label={selected.alt} onClick={(event) => event.stopPropagation()}><button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close image viewer">×</button><img src={`/projects/${selected.file}`} alt={selected.alt} /><p>{selected.alt}</p></div></div>}</main>;
}
export default Gallery;
