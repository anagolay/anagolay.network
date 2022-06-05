/*
 *
 * Interfaces used in the website.
 *
 * This file is created with the purpose of importing them in any case that they are required.
 * For example:
 * - when data is created (as done index.ts files).
 * - when components that require that data are created.
 * - when data is imported and assigned to components (as done in index.svelte files).
 *
 * ImageData and LinkData are reused in other interfaces to ensure that, with a few exceptions, they always have the required attributes.
 *
 * These interfaces can and surely will be improved.
 *
 */

interface ImageData {
	class?: string;
	width?: number;
	height?: number;
	source: string;
	altText: string;
}

export interface LinkData {
	text: string;
	url: string;
	external?: boolean;
}

// interfaces added for navBar and Footer
export interface MenuOption {
	title: string;
	options: LinkData[];
}

export interface MediaIcon {
	name: string;
	url: string;
	image: string;
}

// interface added for 'Features' section data in main page
export interface FeatureData {
	feature: string;
	icon?: string;
	img?: {
		src: string;
		alt: string;
	};
}

// interface added for 'Trust the Process' section data in main page
export interface TrustProcessItem {
	src: string;
	alt: string;
	text: string;
	linkText: string;
	link: string;
	extraClass?: string;
}

// interface added for 'Use Cases' section data in main page
export interface UseCase {
	src: string;
	alt: string;
	title: string;
	text: string;
}

// interface added for 'Team' section data in main page
export interface TeamMember {
	name: string;
	title: string;
	img: string;
	bio: string;
	links: string[];
	linkIcons?: string[];
	opacity: string;
}

// interfaces added for 'Roadmap' section data in main page
interface Phase {
	goal: string;
	description?: string;
	status: string;
	cardStyling?: string;
}

export interface RoadmapItem {
	title: string;
	year: number;
	status?: string;
	pointBlur?: string;
	pointOpacity?: string;
	titleStyling?: string;
	yearOpacity?: string;
	instances: Phase[];
}

// interface added for technology description sections data in 'How-it-works' page
export interface TechnologyItem {
	id?: string;
	title: string;
	subtitle: string;
	contentLines: string[];
	image: ImageData;
	line1?: string;
	inner1?: string;
	line2?: string;
	inner2?: string;
}

// interfaces added for Architecture section data in 'How-it-works' page
export interface WebLayerIcon {
	title: string;
	source: string;
}

export interface ArchitectureItem {
	title: string;
	subtitle?: string;
	description: string[];
	wordContainer?: string[];
	image: ImageData;
}
