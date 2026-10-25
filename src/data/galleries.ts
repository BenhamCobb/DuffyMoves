// ────────────────────────────────────────────────────────────────────────────
//  Digital & Analog galleries — one optional description per photo.
//
//  Mirrors src/data/calendar.ts. Each entry attaches a caption to a photo in
//  src/assets/digital/ or src/assets/analog/, rendered as "Month Year, Location"
//  — the same format as the Calendar — under the photo and in the lightbox.
//
//  To describe a photo, fill in its year, month (1–12) and location below. A
//  caption stays hidden until you add a location, so a blank entry simply shows
//  the photo on its own.
//
//  These dates also control the gallery order: newest month/year first, and
//  within the same month, locations sort Z→A. Photos without a date yet sink
//  to the bottom — no filename renumbering needed when adding older photos.
//
//  The entries below are EXAMPLES that match the bundled placeholder images.
//  Replace the locations with real ones (or delete entries) as you add photos.
// ────────────────────────────────────────────────────────────────────────────

export interface GalleryPhoto {
  year: number; // e.g. 2025  (0 = not set yet)
  month: number; // 1–12       (0 = not set yet)
  location: string; // e.g. "Lisbon, Portugal"
  file: string; // filename in src/assets/digital/ or src/assets/analog/
}

export const digital: GalleryPhoto[] = [
  { year: 2020, month: 2, location: "Fairfax, VA, USA -- 100-Yard Backstroke Race (JMHS Swim)", file: "IMG_0958.JPG" },
  { year: 2024, month: 4, location: "Williamstown, MA, USA -- Ballet Performance (Williams CoDa)", file: "IMG_5579.JPG" },
  { year: 2025, month: 3, location: "London, United Kingdom -- Pole Sports Routine at Nationals (OUPS)", file: "IMG_6343.jpg" },
  // The rest have no caption yet — they simply show on their own until you add a location.
  { year: 2026, month: 3, location: "Williamstown, MA, USA -- 105B Element in Diving Practice", file: "IMG_6222.jpg" },
  { year: 2026, month: 5, location: "Williamstown, MA, USA -- Grad Photoshoot with Pole", file: "DSC06471.jpg" },
  { year: 2026, month: 5, location: "Williamstown, MA, USA -- Bollywood Performance (Williams StuCo)", file: "IMG_5837.JPG" },
  { year: 2026, month: 8, location: "Bucheon, South Korea -- Pole Art Routine in Men's Pro", file: "IMG_1369.jpg" },
  { year: 2026, month: 10, location: "Los Angeles, CA, USA -- UCLA Ironbruin Sprint (UCI Triathlon)", file: "Cal Tri (2) (2).jpg" },
];

export const analog: GalleryPhoto[] = [
  { year: 2024, month: 5, location: "Quiet street", file: "analog-01.jpg" },
  { year: 2024, month: 5, location: "River bend", file: "analog-02.jpg" },
  { year: 0, month: 0, location: "", file: "analog-03.jpg" },
  { year: 0, month: 0, location: "", file: "analog-04.jpg" },
];
