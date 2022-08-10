export type ProjectImages = {
  image: string
  alt: string
  caption: string
}

export type ProjectShowcaseInfoSection = {
  infoTitle: string
  infoText: string
}

export type Project = {
  title: string
  year: string | number
  thumbnail: string
  images: ProjectImages[]
  info: ProjectShowcaseInfoSection[]
  url?: string
  github?: string
  design?: string
}
