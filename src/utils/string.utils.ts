export class StringUtils {
  public static equalIgnoreCase(a: string, b: string): boolean {
    return typeof a === 'string' && typeof b === 'string' ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0 : a === b;
  }

  public static isEmpty(text: string) {
    return !this.isNotEmpty(text);
  }

  public static isNotEmpty(text: string) {
    return text && (typeof text === 'string' ? text.length > 0 : true);
  }

  public static isNotBlank(text: string) {
    return text && (typeof text === 'string' ? text.length > 0 && text.trim().length > 0 : true);
  }

  public static isBlank(text: string) {
    return !this.isNotBlank(text);
  }
}
