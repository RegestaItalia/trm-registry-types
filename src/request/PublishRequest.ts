export interface PublishRequest<TArtifact = unknown, TTextFile = TArtifact> {
    artifact: TArtifact
    readme?: TTextFile
    changelog?: TTextFile
    retainedCustomizing?: string
}
