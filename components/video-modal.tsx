import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchPlaylistItems, type PlaylistItem } from "@/services/youtube";
import { useLanguage } from '@/contexts/language-context';
import { usePathname } from 'next/navigation';
import { translations } from '@/translations';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVideoStateChange?: (isPlaying: boolean) => void;
}

export const VideoModal = ({ isOpen, onClose, onVideoStateChange }: VideoModalProps) => {
  const { language } = useLanguage();
  const pathname = usePathname() || '/';
  const t = translations[language]?.video || {
    closeModal: 'Close video',
    playerTitle: 'Video Player',
    noVideoSelected: 'No video selected',
    loadingVideo: 'Loading video...',
    loadingVideos: 'Loading videos...',
    productVideos: 'Product Videos',
    play: 'Play'
  };
  
  const defaultVideoId = pathname.endsWith('/taping-and-packaging-machine') ? "Kk1yIkIKUMQ" : 
                        pathname.endsWith('/chopping-and-marking-machine') ? "6exCLLHulhU" : 
                        "CUrBRxySXI8";
  const [selectedVideo, setSelectedVideo] = useState<string | null>(defaultVideoId);
  const [playlistItems, setPlaylistItems] = useState<PlaylistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPlaylist = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const items = await fetchPlaylistItems();
        
        if (!items || items.length === 0) {
          setError(t.noVideoSelected);
          return;
        }

        const reorderedItems = [
          ...items.filter(item => item.id === defaultVideoId),
          ...items.filter(item => item.id !== defaultVideoId)
        ];

        setPlaylistItems(reorderedItems);
        setSelectedVideo(defaultVideoId);
      } catch (error: any) {
        console.error("Error loading playlist:", error);
        setError(error?.message || t.loadingVideo);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      loadPlaylist();
      onVideoStateChange?.(false);
    } else {
      setSelectedVideo(defaultVideoId);
      setPlaylistItems([]);
      setError(null);
      onVideoStateChange?.(true);
    }
  }, [isOpen, onVideoStateChange, defaultVideoId, t.noVideoSelected, t.loadingVideo]);

  const handleClose = () => {
    onClose();
    onVideoStateChange?.(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-6xl p-0 bg-black/95 border-0 rounded-lg overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-50 rounded-full p-2 bg-black/50 hover:bg-black/70 transition-colors duration-200"
          aria-label={t.closeModal}
        >
          <X className="h-6 w-6 text-white/90 hover:text-white" />
        </button>

        <div className="flex flex-col lg:flex-row h-[80vh]">
          {/* Video Player */}
          <div className="flex-1 relative bg-black">
            {selectedVideo ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&modestbranding=1&rel=0&showinfo=0&enablejsapi=1`}
                title={t.playerTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/60 text-lg flex items-center gap-2">
                  {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
                  {error || (isLoading ? t.loadingVideo : t.noVideoSelected)}
                </div>
              </div>
            )}
          </div>

          {/* Playlist Sidebar */}
          <div className="w-full lg:w-96 bg-black/90 p-4 overflow-y-auto">
            <h3 className="text-white font-semibold mb-4">
              {t.productVideos}
            </h3>
            {isLoading ? (
              <div className="text-white/60 text-sm flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                {t.loadingVideos}
              </div>
            ) : error ? (
              <div className="text-red-400 text-sm">{error}</div>
            ) : (
              <div className="space-y-3">
                {playlistItems.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video.id)}
                    className={`w-full p-2 rounded-lg text-left transition-all duration-200 ${
                      selectedVideo === video.id
                        ? "bg-white/20 text-white ring-1 ring-white/20"
                        : "hover:bg-white/10 text-white/80"
                    }`}
                    aria-label={`${t.play} ${video.title}`}
                    aria-current={selectedVideo === video.id ? 'true' : undefined}
                  >
                    <div className="flex gap-3">
                      <div className="relative flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt=""
                          className="w-32 h-18 object-cover rounded-md"
                          aria-hidden="true"
                        />
                        {selectedVideo === video.id && (
                          <div className="absolute inset-0 bg-white/10 rounded-md" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium mb-1 truncate">
                          {video.title}
                        </div>
                        <div className="text-xs text-white/60 line-clamp-2">
                          {video.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
