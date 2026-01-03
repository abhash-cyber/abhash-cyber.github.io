import { ArrowLeft, RotateCw, Lock, MoreHorizontal, X, Minimize, Maximize } from 'lucide-react';

interface BrowserHeaderProps {
  url: string;
}

export default function BrowserHeader({ url }: BrowserHeaderProps) {
  return (
    <div className="bg-[#c4c4c4] border-b border-gray-400">
      {/* Window controls */}
      <div className="flex items-center justify-between px-3 py-1.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          <Minimize className="w-4 h-4 text-gray-700" />
          <Maximize className="w-4 h-4 text-gray-700" />
          <X className="w-4 h-4 text-gray-700" />
        </div>
      </div>
      
      {/* Browser navigation */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-200">
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-gray-300 rounded">
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button className="p-1.5 hover:bg-gray-300 rounded">
            <RotateCw className="w-4 h-4 text-gray-700" />
          </button>
        </div>
        
        <div className="flex-1 flex items-center gap-2 bg-white px-3 py-1.5 rounded border border-gray-300">
          <Lock className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-sm text-gray-700">{url}</span>
        </div>
        
        <button className="p-1.5 hover:bg-gray-300 rounded">
          <MoreHorizontal className="w-4 h-4 text-gray-700" />
        </button>
      </div>
      
      {/* Bookmarks bar */}
      <div className="flex items-center gap-3 px-3 py-1.5 bg-gray-100 border-t border-gray-300 text-xs">
        <span className="text-gray-600">📁 Import favorites</span>
        <span className="text-gray-600">🌐 Sasto Share | Home</span>
        <span className="text-gray-600">📊 Dashboard | NEPSE...</span>
        <span className="text-gray-600">📋 Chukul - Nepal Sto...</span>
        <span className="text-gray-600">📈 NEPSE Online Tradi...</span>
        <span className="text-gray-600">📊 Nepal Stock Exchan...</span>
        <span className="text-gray-600">🏦 Mero Share</span>
        <span className="text-gray-600">✉️ Gmail</span>
        <span className="text-gray-600">▶️ Youtube</span>
      </div>
    </div>
  );
}
