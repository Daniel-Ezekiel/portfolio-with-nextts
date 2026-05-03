export interface projectTypes {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  tools: string[];
  githubUrl?: string | boolean;
  liveUrl: string | boolean;
}
