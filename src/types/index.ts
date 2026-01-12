// Video related types
export interface VideoThumbnail {
  url: string;
  width?: number;
  height?: number;
}

export interface VideoAvatar {
  url: string;
  width?: number;
  height?: number;
}

export interface VideoBadge {
  type: string;
  text?: string;
}

export interface VideoAuthorStats {
  subscribersText?: string;
  subscribers?: number;
}

export interface VideoAuthor {
  title: string;
  channelId?: string;
  avatar: VideoAvatar[];
  badges: VideoBadge[];
  stats?: VideoAuthorStats;
}

export interface VideoStats {
  views: number;
  likes?: number;
  comments?: number;
}

export interface Video {
  videoId: string;
  title: string;
  thumbnails: VideoThumbnail[];
  author: VideoAuthor;
  stats: VideoStats;
  publishedTimeText?: string;
  lengthSeconds?: number;
  descriptionSnippet?: string;
}

export interface VideoSearchResult {
  type: string;
  video?: Video;
}

export interface RelatedVideosResponse {
  contents: VideoSearchResult[];
  cursorNext?: string;
}

// Comment types
export interface CommentData {
  name: string;
  text: string;
  replies: CommentData[];
}

// Chat types
export interface ChatMessage {
  name: string;
  message: string;
}

// Category types
export interface Category {
  name: string;
  icon: React.ReactNode;
  type: "home" | "category" | "menu";
  divider?: boolean;
}

// Context types
export interface DataContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  searchResults: VideoSearchResult[] | false;
  setSearchResults: React.Dispatch<
    React.SetStateAction<VideoSearchResult[] | false>
  >;
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<string | null>>;
}

// Redux types
export interface ChatState {
  messages: ChatMessage[];
}

export interface SearchState {
  [key: string]: string[];
}

export interface RootState {
  chat: ChatState;
  search: SearchState;
}
