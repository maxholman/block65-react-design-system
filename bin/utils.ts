/* eslint-disable no-restricted-syntax */
export type RecursiveStringStringObj = {
  [Key in string]: string | RecursiveStringStringObj;
};

export type VarFn = string;
export type PathPart = string;
export type PathParts = PathPart[];
export type PathStr = PathPart | `${PathPart}.${PathPart}`;

function pathToString(parts: PathParts) {
  return parts
    .filter((part, idx) => !(part === '' && idx === 0))
    .join('.') as PathStr;
}

// extract the var names from the leaf nodes of panelVars
// and add them to the knownVars map
export function leafNodeMapper(
  obj: RecursiveStringStringObj,
  callback: (path: PathStr, value: string) => void,
  pathParts: string[] = [],
) {
  for (const [key, value] of Object.entries(obj)) {
    const thisPath = [...pathParts, key];
    if (typeof value === 'string') {
      callback(pathToString(thisPath), value);
    } else {
      leafNodeMapper(value, callback, thisPath);
    }
  }
}

export const vargEx = /var\(--(.*)\)/;
