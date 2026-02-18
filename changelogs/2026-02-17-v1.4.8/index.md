---
title: v1.4.8
authors: [fareez]
description: Routine housekeeping update, including dependency updates, code cleanup, and some UI improvements.
image: https://og-puce.vercel.app/api/og/iiumschedule2026?version=1.4.8
tags: [v1.4.8, patch]
---

### App

- Updated default semester value configuration.
- Perf: Fixed `context` mounted check in several pages.
- UI: Update some pages to MaterialPageRoute.
- Updated GitHub repository links and copyright year.
- Cleanup: remove web-specific code.
- Fixed build issue by updating compileSdkVersion to android-36.

### Dependencies

- Migrated [flutter_timetable_view](https://github.com/iqfareez/flutter_timetable_view) and [recase](https://github.com/iqfareez/recase) packages to project repository for better maintenance.
- Updated dependencies and improved code formatting in timetable view components.

### Setup

- [Windows] Updated Inno Setup's [WizardStyle](https://jrsoftware.org/ishelp/index.php?topic=setup_wizardstyle) to `modern dynamic` design.

[![GitHub Releases](https://img.shields.io/badge/view%20on%20github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iiumschedule/iium_schedule/releases/tag/1.4.8%2B47)
