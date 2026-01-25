# Profile Image Integration Design

**Date:** 2026-01-25
**Status:** Approved

## Overview

Add a profile photo to the homepage that appears side-by-side with the personal intro on desktop and below the intro on mobile. The image will be a narrow portrait (9:16 aspect ratio) positioned between the 66.66% and 91.66% grid lines on desktop.

## Layout Structure

### Desktop Layout (lg and above)
- Two-column grid layout for the personal intro section
- Personal intro (title, description) occupies the left side (columns 1-7)
- Profile photo positioned in the right area between 66.66% and 91.66% grid lines (columns 9-11)
- Image is vertically centered relative to the personal intro content
- Creates a strong vertical element with the narrow portrait orientation

### Mobile Layout (below lg)
- Single-column layout
- Profile photo appears directly below the personal intro text
- Positioned after the description paragraph, before the Tech Stack section
- Image is centered and sized to 60-70% of screen width

## Component Structure

### Implementation Approach
1. Modify existing `app/page.tsx` to add the profile image
2. Wrap the personal intro section in a flex container for two-column layout on desktop
3. Use Next.js `<Image>` component for optimized image loading
4. Use Tailwind responsive classes for layout switching

### Image Specifications
- **Aspect ratio:** 9:16 (narrow portrait)
- **Suggested dimensions:** 450px × 800px
- **Format:** WebP or JPEG
- **Location:** `/public/profile.jpg`

### Responsive Behavior
- **Desktop (lg+):** `flex-row` with image on the right
- **Mobile:** `flex-col` with image below text, centered at 60-70% width

## Styling & Visual Treatment

### Image Styling
- Thin border in `charcoal/10` or `charcoal/20` for definition
- Optional subtle shadow (`shadow-sm` or `shadow-md`) for depth
- `object-fit: cover` to maintain aspect ratio while filling container

### Spacing & Alignment
- **Desktop gap:** `gap-12` or `gap-16` (3-4rem) between text and image
- **Mobile spacing:** `mt-8` or `mt-10` below intro text
- **Vertical alignment:** `items-center` on desktop for centering with intro content

### Responsive Sizing
- **Desktop:** Height of 600-800px for visual impact
- **Mobile:** Width of 60-70% of container, auto-calculated height
- Maintains 9:16 aspect ratio across all breakpoints

## Implementation Details

### Image Optimization
- Use Next.js `<Image>` component for automatic optimization and lazy loading
- Set `priority={true}` for above-the-fold content on desktop
- Provide `width={450}` and `height={800}` props for aspect ratio calculation
- Use `quality={90}` for high-quality profile photo

### Fallback Handling
- Show placeholder with same dimensions if image fails to load
- Placeholder: subtle background color (`bg-charcoal/5`) with optional icon/text

### Accessibility
- Descriptive `alt` text: "Profile photo of [Name], Shopify Developer"
- Ensure image doesn't interfere with screen reader navigation

### Grid Alignment
- Image container uses positioning to align with 66.66% and 91.66% grid lines
- Combination of `max-w-` classes and positioning keeps image within designated column area

## Success Criteria

- Profile photo displays side-by-side with intro on desktop (lg+)
- Profile photo displays below intro on mobile
- Image maintains 9:16 aspect ratio across all breakpoints
- Image is optimized and loads efficiently
- Layout aligns with existing grid system
- Accessible with proper alt text
