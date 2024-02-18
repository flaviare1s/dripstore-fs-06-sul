import React from "react";

export function Footer() {
 
 
    return (
        <footer className="bg-gray-900 font-Inter text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Coluna 1 */}
            <div className="mb-4 md:mb-0">
              <img src="logo.png" alt="Logo da Digital College" />
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">Link 1</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">Link 2</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">Link 3</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">Link 4</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">Link 5</a>
                </li>
              </ul>
            </div>
  
            {/* Coluna 2 e 3 */}
            <div className="mb-4 md:mb-0 md:col-span-2 md:flex md:justify-between">
              <div className="mb-4 md:mb-0 md:w-1/2">
                <h2 className="text-white text-lg font-semibold mb-2">Coluna 2</h2>
                {/* Links */}
              </div>
              <div className="md:w-1/2">
                <h2 className="text-white text-lg font-semibold mb-2">Coluna 3</h2>
                {/* Links */}
              </div>
            </div>
  
            {/* Coluna 4 */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-white text-lg font-semibold mb-2">Coluna 4</h2>
              {/* Links */}
            </div>
          </div>
        </div>
      </footer>
    )
  }

