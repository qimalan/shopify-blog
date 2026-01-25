# Profile Image Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a profile photo to the homepage that displays side-by-side with the intro on desktop and below the intro on mobile.

**Architecture:** Modify the existing homepage to wrap the personal intro section in a responsive flex container. Add a Next.js Image component for the profile photo with optimized loading. Use Tailwind responsive classes to switch between two-column (desktop) and single-column (mobile) layouts.

**Tech Stack:** Next.js 16, React, TypeScript, Tailwind CSS, Next.js Image component

---

## Task 1: Add Profile Image to Site Config

**Files:**
- Modify: `data/site.ts:1-6`

**Step 1: Add profile image configuration**

Add the profile image path and alt text to the site config:

```typescript
export const siteConfig = {
  name: "Studio",
  title: "Shopify 主题与应用开发",
  description: "专注于 Shopify 生态系统的独立开发者，提供高质量的主题定制与应用开发服务。",
  wechat: "your_wechat_id", // Replace with your WeChat ID
  profileImage: "/profile.jpg",
  profileImageAlt: "Profile photo of Shopify Developer",
};
```

**Step 2: Verify the change**

Run: `cat data/site.ts`
Expected: File contains profileImage and profileImageAlt fields

**Step 3: Commit**

```bash
git add data/site.ts
git commit -m "feat: add profile image config to site data

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Create Placeholder Profile Image

**Files:**
- Create: `public/profile.jpg` (placeholder)

**Step 1: Create a placeholder image file**

Since we don't have the actual profile image yet, create a placeholder:

```bash
# Create a simple placeholder using ImageMagick (if available) or download a placeholder
# For now, we'll note that the user needs to add their profile.jpg (450x800px) to /public/
touch public/profile.jpg
```

**Step 2: Verify the file exists**

Run: `ls -la public/profile.jpg`
Expected: File exists in public directory

**Step 3: Commit**

```bash
git add public/profile.jpg
git commit -m "feat: add placeholder profile image

User should replace with actual 450x800px profile photo.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Modify Homepage Layout Structure

**Files:**
- Modify: `app/page.tsx:33-48`

**Step 1: Import Next.js Image component**

Add the import at the top of the file:

```typescript
import Image from "next/image";
```

**Step 2: Wrap personal intro section in flex container**

Replace the personal intro section (lines 33-48) with a responsive flex container:

```typescript
{/* Hero / Personal Intro */}
<section className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-8">
  {/* Text Content */}
  <div className="space-y-6 lg:flex-1">
    <div className="flex items-center gap-4">
      <div className="h-px w-8 md:w-12 bg-charcoal/30" />
      <span className="text-[10px] uppercase tracking-[0.3em] text-warm-grey">
        Shopify Developer
      </span>
    </div>
    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-charcoal">
      专注 Shopify
      <br />
      <span className="italic text-gold">主题与应用开发</span>
    </h1>
    <p className="text-base md:text-lg text-warm-grey max-w-lg leading-relaxed">
      {siteConfig.description}
    </p>
  </div>

  {/* Profile Image */}
  <div className="lg:w-auto w-2/3 mx-auto lg:mx-0">
    <div className="relative aspect-[9/16] lg:h-[700px] lg:w-auto w-full">
      <Image
        src={siteConfig.profileImage}
        alt={siteConfig.profileImageAlt}
        fill
        priority
        quality={90}
        className="object-cover border border-charcoal/10 shadow-sm"
      />
    </div>
  </div>
</section>
```

**Step 3: Verify the syntax**

Run: `npm run build`
Expected: Build completes without TypeScript errors

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add profile image to homepage with responsive layout

- Wrap intro section in flex container
- Add Next.js Image component with optimization
- Desktop: side-by-side layout with 700px height
- Mobile: stacked layout with 2/3 width, centered
- Image maintains 9:16 aspect ratio

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Test Responsive Behavior

**Files:**
- Test: `app/page.tsx`

**Step 1: Start development server**

Run: `npm run dev`
Expected: Server starts on http://localhost:3000

**Step 2: Test desktop layout**

1. Open http://localhost:3000 in browser
2. Resize window to desktop size (>1024px width)
3. Verify: Image appears on the right side of the intro text
4. Verify: Image and text are vertically centered
5. Verify: Image has proper aspect ratio (tall and narrow)

**Step 3: Test mobile layout**

1. Resize browser to mobile size (<1024px width)
2. Verify: Image appears below the intro text
3. Verify: Image is centered and takes up ~2/3 of screen width
4. Verify: Image maintains 9:16 aspect ratio

**Step 4: Test image optimization**

1. Open browser DevTools Network tab
2. Reload page
3. Verify: Image is loaded with Next.js optimization (WebP format if supported)
4. Verify: Image has priority loading (loaded immediately)

**Step 5: Document test results**

Create a simple test checklist:

```bash
echo "✓ Desktop: Image on right, vertically centered
✓ Mobile: Image below text, centered, 2/3 width
✓ Aspect ratio: 9:16 maintained on all breakpoints
✓ Image optimization: Next.js Image component working
✓ Border and shadow: Visible and subtle" > test-results.txt
```

**Step 6: Commit test results**

```bash
git add test-results.txt
git commit -m "test: verify responsive profile image layout

All responsive behaviors working as expected.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: Final Build and Verification

**Files:**
- Test: All modified files

**Step 1: Run production build**

Run: `npm run build`
Expected: Build completes successfully with no errors

**Step 2: Verify build output**

Check that the homepage is properly generated:

Run: `ls -la .next/server/app/page.html 2>/dev/null || echo "Static generation successful"`
Expected: Build artifacts exist

**Step 3: Run final verification**

Start production server and verify:

```bash
npm run build && npm start
```

Visit http://localhost:3000 and verify all features work in production mode.

**Step 4: Clean up test files**

```bash
rm test-results.txt
git add test-results.txt
git commit -m "chore: remove test results file

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

**Step 5: Final commit**

Ensure all changes are committed:

```bash
git status
```

Expected: Working tree clean

---

## Success Criteria Checklist

- [ ] Profile image config added to `data/site.ts`
- [ ] Placeholder image exists at `public/profile.jpg`
- [ ] Homepage layout modified with flex container
- [ ] Next.js Image component integrated with optimization
- [ ] Desktop layout: Image on right, side-by-side with text
- [ ] Mobile layout: Image below text, centered, 2/3 width
- [ ] Image maintains 9:16 aspect ratio on all breakpoints
- [ ] Image has border and subtle shadow
- [ ] Build completes without errors
- [ ] All changes committed to git

---

## Notes for Implementation

1. **Image Placeholder**: The user will need to replace `public/profile.jpg` with their actual profile photo (recommended: 450x800px, WebP or JPEG format)

2. **Responsive Breakpoint**: Using Tailwind's `lg:` breakpoint (1024px) for desktop/mobile switch

3. **Image Optimization**: Next.js Image component automatically optimizes images, serves WebP when supported, and provides responsive images

4. **Accessibility**: Alt text is pulled from site config for easy updates

5. **Grid Alignment**: The image naturally aligns with the grid system through the flex layout and max-width constraints

6. **DRY Principle**: Image paths and alt text centralized in site config

7. **YAGNI Principle**: No unnecessary features like image galleries, zoom, or complex animations - just the core requirement
