/** A package maintainer: either a user or an organization. */
export interface Maintainer {
    name: string
    type: 'organization' | 'user'
}
