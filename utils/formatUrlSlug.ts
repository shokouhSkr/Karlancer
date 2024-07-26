export const formatUrlSlug = (title: string): string => {
	return title.toLowerCase().replace(/\s+/g, "-");
};

export const reverseUrlSlug = (slug: string): string => {
	return slug.replace(/-/g, " ");
};
