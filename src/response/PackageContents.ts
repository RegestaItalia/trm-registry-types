export interface PackageContentsEntry {
    [key: string]: string | number | boolean | null
}

export interface PackageContents {
    tdevc: PackageContentsEntry[]
    tdevct: PackageContentsEntry[]
    tadir: PackageContentsEntry[]
    e071: PackageContentsEntry[]
    [table: string]: PackageContentsEntry[]
}
