// twmerge.ts
export function twmerge(materialUiClasses: string, tailwindClasses: string): string {
  return `${materialUiClasses} ${tailwindClasses}`;
}