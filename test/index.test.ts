import { generateNameGlyph } from '../src/index.js';

describe('generateNameGlyph', () => {
  it('should handle standard cases', () => {
    expect(generateNameGlyph('John Doe')).toBe('JD');
    expect(generateNameGlyph('Alice Wonderland')).toBe('AW');
    expect(generateNameGlyph('Robert Smith')).toBe('RS');
  });

  it('should handle single names', () => {
    expect(generateNameGlyph('Alice')).toBe('A');
    expect(generateNameGlyph('Bob')).toBe('B');
  });

  it('should handle names with titles/prefixes/suffixes', () => {
    expect(generateNameGlyph('Dr. John Doe')).toBe('JD');
    expect(generateNameGlyph('Professor Alice Wonderland')).toBe('AW');
    expect(generateNameGlyph('Robert Smith Jr.')).toBe('RS');
    expect(generateNameGlyph('Mary Van Buren')).toBe('MB');
  });

  it('should handle names with multiple middle names', () => {
    expect(generateNameGlyph('John David Smith')).toBe('JS');
  });

  it('should handle empty or whitespace names', () => {
    expect(generateNameGlyph('')).toBe('');
    expect(generateNameGlyph(' ')).toBe('');
    expect(generateNameGlyph('\t\n ')).toBe('');
  });

  it('should handle names with non-alphabetic characters at the beginning', () => {
    expect(generateNameGlyph('123 John Doe')).toBe('JD');
    expect(generateNameGlyph('-Alice Wonderland')).toBe('AW');
  });

  it('should handle names with mixed case', () => {
    expect(generateNameGlyph('john doe')).toBe('JD');
    expect(generateNameGlyph('aLiCe wOnDeRlAnD')).toBe('AW');
  });

  it('should handle international characters', () => {
    expect(generateNameGlyph('Jürgen Müller')).toBe('JM');
    expect(generateNameGlyph('李伟')).toBe('李伟');
  });
});
