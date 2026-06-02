# DiabetesCare 🩺
### All-in-One Diabetes Management App

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Mobile Friendly](https://img.shields.io/badge/Mobile-Friendly-0078D4?style=flat-square)

A free, fully responsive, browser-based diabetes management application. No installation, no server, no account required — open the file and start tracking.

Built by **Tebogo Maruping** as a portfolio project demonstrating health UX design, data visualisation, and progressive web app architecture.

---

## 🚀 Live Demo

**[Launch DiabetesCare →](https://tebzolo.github.io/diabetes-app/src/)**

Or clone and open `src/index.html` directly in any browser.

---

## 📱 Features

| Feature | Description |
|---------|-------------|
| 📊 **Dashboard** | Current BG, HbA1c estimate, time in range, live chart, recent readings |
| 💉 **Blood Glucose Logger** | Log readings with time, type, and notes. Auto-classifies in range / high / low |
| 🩹 **Insulin Tracker** | Dose calculator (meal + correction) and injection logger |
| 🥗 **Meal Planner** | Carb counter with tap-to-add South African food database |
| 📈 **Insights** | 7-day trend chart, time in range breakdown, personalised tips |
| ⚙️ **Settings** | Patient profile, BG thresholds, insulin ratios, correction factor |

---

## 🖥️ Screenshots

> Dashboard · Log BG · Insulin Calculator · Meal Planner · Insights

_(Add screenshots to `assets/screenshots/` and link them here)_

---

## 🏗️ Project Structure

```
diabetes-app/
├── src/
│   └── index.html          # Complete app (self-contained, no dependencies)
├── docs/
│   ├── features.md         # Detailed feature documentation
│   └── roadmap.md          # Planned features and improvements
├── assets/
│   └── screenshots/        # App screenshots
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deploy to GitHub Pages
├── README.md
├── LICENSE
└── .gitignore
```

---

## 🚀 Getting Started

### Run locally (no installation needed)
```bash
git clone https://github.com/tebzolo/diabetes-app.git
cd diabetes-app
open src/index.html        # macOS
start src/index.html       # Windows
xdg-open src/index.html    # Linux
```

### Deploy to GitHub Pages
1. Fork this repository
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → `main` → `/src`
4. Click **Save** — live in 2 minutes at:
   `https://<your-username>.github.io/diabetes-app/`

---

## 🧮 How the Insulin Calculator Works

The dose calculator uses standard diabetes formulas:

```
Meal dose     = Carbohydrates (g) ÷ Carb ratio (g/unit)
Correction    = (Current BG − Target BG) ÷ Correction factor
Total dose    = Meal dose + Correction dose
```

**Example:**
- BG: 9.0 mmol/L | Carbs: 60g | Ratio: 10 | Target: 5.5 | CF: 2.5
- Meal dose: 60 ÷ 10 = **6u**
- Correction: (9.0 − 5.5) ÷ 2.5 = **1.4u**
- **Total: 7.4u**

> ⚠️ Always confirm doses with your healthcare provider.

---

## 🩺 Clinical Reference

### Blood Glucose Target Ranges (SEMDSA / South African Guidelines)

| Measurement | Target Range |
|-------------|-------------|
| Fasting / pre-meal | 4.0 – 7.0 mmol/L |
| 2h post-meal | < 8.5 mmol/L |
| Bedtime | 6.0 – 8.0 mmol/L |
| HbA1c | < 7.0% (< 53 mmol/mol) |

### HbA1c Estimation Formula
```
Estimated HbA1c (%) = (Average BG mmol/L × 1.98 + 4.29) × 0.0915 + 2.15
```
_(Based on ADAG study conversion)_

---

## 🗺️ Roadmap

- [ ] LocalStorage persistence (save data between sessions)
- [ ] Export readings to CSV / PDF report
- [ ] Medication tracker (tablets, metformin, etc.)
- [ ] A1c history chart
- [ ] Exercise logging
- [ ] PWA support (install to home screen)
- [ ] Multi-language support (isiZulu, Afrikaans, Sotho)
- [ ] CGM data import (Libre, Dexcom)
- [ ] Doctor's report generator

---

## 🤝 Contributing

Contributions welcome! Especially:
- Additional food items (South African, African cuisine)
- Language translations
- Accessibility improvements
- Clinical accuracy reviews

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m "Add: my feature"`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

---

## ⚠️ Medical Disclaimer

DiabetesCare is for **informational and educational purposes only**. It is not a certified medical device and does not replace professional medical advice, diagnosis, or treatment. Always consult your doctor, diabetes specialist, or healthcare team before making any changes to your diabetes management plan.

---

## 👨‍💻 About the Author

**Tebogo Maruping**
Senior Systems Engineer | Azure Cloud Architect | DevOps Specialist

- 🔗 [LinkedIn](https://www.linkedin.com/in/tebogo-maruping-%E2%84%A2-9831351a/)
- 📧 tebogo@contoso.co.za
- 🐙 [GitHub](https://github.com/tebzolo)

**Certifications:** `AZ-305` `AZ-400` `AZ-500` `SC-100` `AI-102` `AB-100` `CISSP`

---

## 📄 License

MIT License — free to use, modify, and distribute with attribution.

---

*Built with ❤️ for the diabetes community in South Africa and beyond.*
