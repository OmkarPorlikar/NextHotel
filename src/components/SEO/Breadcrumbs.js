// components/SEO/Breadcrumb.js
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items = [] }) => {
  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href ? `https://www.hotelsunshinepauni.com${item.href}` : undefined
    }))
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            {/* Home Link */}
            <li>
              <Link 
                href="/" 
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Home className="w-4 h-4 mr-1" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            
            {/* Dynamic Breadcrumb Items */}
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {item.href && index < items.length - 1 ? (
                  <Link 
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-gray-700 font-medium">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
};

export default Breadcrumb;