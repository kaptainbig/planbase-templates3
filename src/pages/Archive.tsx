import React from 'react';
import { Archive as ArchiveIcon } from 'lucide-react';

const Archive: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full text-zinc-500 flex-col gap-4">
      <ArchiveIcon className="w-16 h-16 opacity-20" />
      <div className="text-center">
        <h2 className="text-xl font-headline font-bold text-white uppercase tracking-widest mb-2">Project Archive</h2>
        <p className="text-sm max-w-md">No archived projects found. Projects marked as completed or manually archived will appear here for historical reference.</p>
      </div>
    </div>
  );
};

export default Archive;
