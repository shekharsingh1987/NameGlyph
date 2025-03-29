// src/index.ts

/**
 * Generates a two-letter glyph from a given name.
 * If only one name is provided, returns just the first letter.
 * Handles international characters and non-Latin scripts.
 *
 * @param name The full name (e.g., "John Doe", "Jürgen Müller", "李伟").
 * @returns A one or two-letter string representing the glyph (always uppercase for Latin scripts).
 */
export const generateNameGlyph = (name: string): string => {
  if (!name || name.trim() === '') {
    return '';
  }

  const trimmedName = name.normalize('NFKD').trim();

  // Check if the name contains non-Latin characters
  const hasNonLatin = /[^\u0000-\u007F]/.test(trimmedName);

  if (hasNonLatin && /[\u4E00-\u9FFF]/.test(trimmedName)) {
    // Check if contains Chinese characters
    // For Chinese scripts, return the first two characters
    const chars = Array.from(trimmedName.replace(/\s+/g, '')); // Remove spaces and get characters
    if (chars.length === 0) return '';
    if (chars.length === 1) return chars[0];
    return chars[0] + chars[1];
  }

  // Remove common titles, prefixes, and suffixes (case-insensitive)
  const nameParts = trimmedName
    .split(/\s+/)
    .filter((part) => {
      const lowerPart = part.toLowerCase();
      return !['dr.', 'mr.', 'ms.', 'mrs.', 'professor', 'prof.', 'jr.', 'sr.', 'phd'].includes(
        lowerPart,
      );
    })
    .map((part) => {
      // Remove any non-alphabetic characters from the beginning of each part
      return part.replace(/^[^a-zA-ZÀ-ÿ]+/, '');
    })
    .filter((part) => part.length > 0); // Remove any parts that are empty after cleaning

  if (nameParts.length === 0) {
    return '';
  }

  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

  // Get first letter and decompose any diacritics before converting to uppercase
  const firstInitial = firstName
    .charAt(0)
    .normalize('NFKD')
    .replace(/[\u0300-\u036F]/g, '')
    .toUpperCase();

  // For single names, return only the first initial
  if (!lastName) {
    return firstInitial;
  }

  // Get first letter and decompose any diacritics before converting to uppercase
  const secondInitial = lastName
    .charAt(0)
    .normalize('NFKD')
    .replace(/[\u0300-\u036F]/g, '')
    .toUpperCase();
  return `${firstInitial}${secondInitial}`;
};
