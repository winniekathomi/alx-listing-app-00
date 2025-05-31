// components/PropertyCard.tsx
import { PropertyProps } from "@/interfaces";

interface Props {
  property: PropertyProps;
}

export default function PropertyCard({ property }: Props) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{property.name}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {property.address.city}, {property.address.country}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-700 mb-2">
          <span>💰 ${property.price}/night</span>
          <span>⭐ {property.rating}</span>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-white">
          {property.category.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-800 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

