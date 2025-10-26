# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-10-26

### Added
- Smooth TikTok-style slide transitions between items
- Real-time swipe feedback - images follow finger during swipe
- Adjacent item rendering for seamless transitions

### Changed
- Improved transition animations from instant "pop" to smooth sliding
- Enhanced touch gesture handling with visual feedback
- Updated item positioning system for proper vertical stacking

### Fixed
- Fixed image cropping issues during transitions
- Resolved black bars appearing during swipe animations
- Corrected vertical offset calculations for smooth scrolling

## [1.0.0] - 2025-10-26

### Added
- Initial release of TikTok-style mobile web app
- Vertical swipe navigation (swipe up/down to navigate between items)
- Support for displaying images in a feed format
- Mobile-optimized full-screen layout with no scrollbars
- Touch gesture detection for intuitive navigation
- Progress indicator showing current position (e.g., "1 / 8")
- Smooth transitions between media items
- Responsive design with proper viewport handling
- Sample feed with 8 landscape/nature images from Unsplash
- Auto-cropping images to fill screen (object-fit: cover)
- Single-item view (only current image visible, no stacking)

### Features
- React-based architecture with component structure
- JSON-based content management (public/media.json)
- Support for both photos and videos (currently configured for photos only)
- Mobile-first design preventing pull-to-refresh and zoom
- Performance optimizations with CSS transforms

### Components
- `Feed.js` - Main feed container with swipe detection logic
- `MediaItem.js` - Handles rendering of individual media items
- `App.js` - Application entry point with data loading

### Configuration
- Node.js v25.0.0
- React 18.2.0
- React Scripts 5.0.1
- Configured with Create React App tooling
