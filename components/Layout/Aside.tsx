// components/Aside.tsx
import Sidebar from "./Sidebar";

export default function Aside() {
  return (
    <aside className="w-64 bg-red-600 text-white p-5 h-full fixed top-0 left-0 shadow-lg">
      {/* Logo Section */}
      <div className="flex justify-center mb-6">
        {/* Logo */}
        <img 
          src="https://dynamic.design.com/asset/logo/f0af4087-ffa7-453c-86f9-c192e14eb165/logo-search-grid-2x?logoTemplateVersion=1&v=638565286469030000" 
          alt="Logo"
          className="w-24 h-24 rounded-full border-8 border-white"
        />
      </div>

      {/* Sidebar Links */}
      <Sidebar /> {/* Import the Sidebar component */}
    </aside>
  );
}
