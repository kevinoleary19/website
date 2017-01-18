export type $Technology = Array<string>;

export type $Project = {
  header: string,
  description: string,
  technology: $Technology,
  src: string,
  githubLink?: string,
  webLink?: string
}
