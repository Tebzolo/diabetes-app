# DiabetesCare — Feature Documentation

## Dashboard
- Real-time blood glucose display with colour-coded status (green/amber/red)
- Estimated HbA1c based on recent average readings
- Time in range percentage for the current day
- Last insulin dose summary
- Interactive line chart showing today's BG readings with high/low threshold lines
- Recent readings list with auto-classification badges
- Personalised daily insight tip

## Blood Glucose Logger
- Log readings with value, time, reading type, and optional notes
- Reading types: Fasting, Pre-meal, Post-meal, Bedtime, Random
- Auto-classifies each reading as In range / High / Low
- Visual feedback with colour-coded badges
- Displays SEMDSA-aligned target ranges for reference
- Chronological reading log for the day

## Insulin Tracker
- Dose calculator using standard carb ratio + correction factor formula
- Inputs: current BG, carbs in meal, carb ratio, BG target, correction factor
- Displays meal dose, correction dose, and total dose separately
- Log insulin doses with units, insulin type, and time
- Supports: Rapid-acting, Long-acting, Mixed insulin types
- Medical disclaimer prominently displayed

## Meal Planner & Carb Counter
- Manually add food items with name and carb content
- Tap-to-add quick reference for 12 common South African foods
- Running total carb count for the current meal
- Food database includes: pap, samp, mielie, brown bread, rice, and more

## Insights
- 7-day average blood glucose
- 7-day time in range percentage
- Hypo and hyper event counts for the week
- 7-day bar chart with colour-coded bars (green/amber/red by range)
- Time in range breakdown with animated progress bars
- Three personalised insight tips based on pattern analysis

## Settings
- Patient profile: name, diabetes type, date of birth, units (mmol/L or mg/dL)
- BG alert thresholds: adjustable low and high alerts via range sliders
- HbA1c target: adjustable via range slider
- Insulin settings: carb ratio, correction factor, rapid-acting and long-acting brand names
- About section with medical disclaimer

## Technical Features
- Fully self-contained single HTML file (no server required)
- Responsive design — works on mobile, tablet, and desktop
- Dark mode support via CSS `prefers-color-scheme`
- Accessible — screen reader labels, semantic HTML, ARIA attributes
- Chart.js for data visualisation (loaded via CDN)
- Tabler Icons for consistent iconography
