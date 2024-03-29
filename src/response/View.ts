import { Release } from "./Release"
import { UserAuthorization } from "./UserAuthorization"

export type View = {
    name?: string,
    private?: boolean,
    shortDescription?: string,
    website?: string,
    git?: string,
    license?: string,
    userAuthorizations: UserAuthorization,
    release?: Release
}