export interface PlaylistItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const PLAYLIST_ID = 'PLGiOF2X6GljlJMjUlvRu8lDKTwnZJ1dvc';
const API_KEY = 'AIzaSyA2BUIqtXWr8r_YxOgmdPtbqtCM2v1ZRfc';

export async function fetchPlaylistItems(): Promise<PlaylistItem[]> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch playlist items');
    }

    const data = await response.json();

    return data.items.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));
  } catch (error) {
    console.error('Error fetching playlist:', error);
    throw error;
  }
}
