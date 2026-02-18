---
title: v1.4.9
authors: [fareez]
description: Replace isar plugin libraries with isar_community to resolve Android 16 KB memory page size requirement.
image: https://og-puce.vercel.app/api/og/iiumschedule2026?version=1.4.9
tags: [v1.4.9, patch]
---

- Replace [isar](https://pub.dev/packages/isar) plugin libraries with [isar_community](https://isar-community.dev/v3/) plugin libraries. This is due to the original isar plugin libraries are no longer maintained and have been archived. This solved the 16 KB memory page sizes requirement for Android. Closed issue [#121](https://github.com/iiumschedule/iium_schedule/issues/121).

[![GitHub Releases](https://img.shields.io/badge/view%20on%20github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iiumschedule/iium_schedule/releases/tag/1.4.9%2B48)
