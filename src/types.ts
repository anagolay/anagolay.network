interface ImageData {
	class?: string;
	source: string;
	altText: string;
}

export interface LinkData {
	text: string;
	url: string;
	external?: boolean;
}

export interface NavDropdownLink {
	title: string;
	options: LinkData[];
}

export interface MenuOption {
	title: string;
	options: LinkData[];
}

export interface MediaIcon {
	name: string;
	url: string;
	image: string;
}

export interface FeatureData {
	feature: string;
	icon?: string;
	img?: {
		src: string;
		alt: string;
	};
}

export interface HowItWorksItem {
	src: string;
	alt: string;
	text: string;
	linkText: string;
	link: string;
}

export interface UseCase {
	src: string;
	alt: string;
	title: string;
	text: string;
}

export interface TeamMember {
	name: string;
	title: string;
	img: string;
	bio: string;
	links: string[];
	linkIcons?: string[];
	opacity: string;
}

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

export interface TechnologyItem {
	id?: string;
	title: string;
	subtitle: string;
	contentLines: string[];
	image: ImageData;
}

export interface ArchitectureItem {
	title: string;
	subtitle?: string;
	description: string;
	image: ImageData;
}

export interface WebLayerIcon {
	title: string;
	source: string;
}
