const galleryGroups = {
  PROJECTS: ["environmental-data-dashboard.png", "environmental-data-analysis-dashboard.png", "environmental-data-output.png", "sensor-system-simulation.png", "environmental-sensor-simulation.png", "environmental-telemetry-analysis.png"],
  ELECTRONICS: ["arduino-sensor-simulation.png", "arduino-system-simulation.png", "oscilloscope-testing-01.png", "oscilloscope-testing-02.png", "oscilloscope-waveform-test.png", "oscilloscope-electronics-test.png", "oscilloscope-signal-analysis.png", "embedded-system-simulation-01.png", "electronics-signal-testing.png"],
  AUTOMATION: ["predictive-maintenance-telemetry.png", "predictive-maintenance-test-results.png", "microgrid-control-response.png", "microgrid-circuit-simulation.png", "control-system-simulation.png"],
  MANUFACTURING: ["cnc-machining-practical-work.png"],
  "CAD & DESIGN": ["cad-component-sketch.png", "cad-engineering-component..png", "cad-machined-component.png", "cad-mechanical-design.png", "cad-practical-component.png"],
};

const humanise = (file) => file.replace(/\.png$/, "").replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

export const galleryImages = Object.entries(galleryGroups).flatMap(([category, files]) => (
  files.map((file) => ({ file, category, alt: humanise(file) }))
));

export const galleryFilters = ["ALL", ...Object.keys(galleryGroups)];
