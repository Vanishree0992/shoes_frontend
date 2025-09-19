import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Womens",
      subcategories: [
        {
          group: "New Arrivals",
          items: ["View all"],
        },
        {
          group: "Sandals",
          items: ["View all", "Flat", "Flip Flop", "Slider", "Strappy"],
        },
        {
          group: "Trainers",
          items: ["View all", "Chunky", "Lace Up", "Slip On"],
        },
        {
          group: "Canvas",
          items: ["View all", "Lace Up", "Slip On"],
        },
        {
          group: "Shoes",
          items: [
            "View all",
            "Ballerina",
            "Brogue",
            "Flat",
            "Heel",
            "Leather",
            "Party",
            "School",
          ],
        },
        {
          group: "Safety Footwear",
          items: ["View all"],
        },
        {
          group: "Boots",
          items: [
            "View all",
            "Ankle",
            "Biker",
            "Heel",
            "Knee High",
            "Lace up",
            "Leather",
          ],
        },
        {
          group: "Slippers",
          items: [
            "View all",
            "Easy Fasten",
            "Full",
            "Moccasin",
            "Mule",
            "Slipper Boots",
          ],
        },
      ],
      slug: "womens",
    },
    {
      name: "Mens",
      subcategories: [
        {
          group: "New Arrivals",
          items: ["View all"],
        },
        {
          group: "Sandals",
          items: ["View all", "Flat", "Flip Flop", "Slider", "Strappy"],
        },
        {
          group: "Trainers",
          items: ["View all", "Chunky", "Lace Up", "Slip On"],
        },
        {
          group: "Canvas",
          items: ["View all", "Lace Up", "Slip On"],
        },
        {
          group: "Shoes",
          items: [
            "View all",
            "Ballerina",
            "Brogue",
            "Flat",
            "Heel",
            "Leather",
            "Party",
            "School",
          ],
        },
        {
          group: "Safety Footwear",
          items: ["View all"],
        },
        {
          group: "Boots",
          items: [
            "View all",
            "Ankle",
            "Biker",
            "Heel",
            "Knee High",
            "Lace up",
            "Leather",
          ],
        },
        {
          group: "Slippers",
          items: [
            "View all",
            "Easy Fasten",
            "Full",
            "Moccasin",
            "Mule",
            "Slipper Boots",
          ],
        },
      ],
      slug: "mens",
    },
    {
      name: "Kids",
      subcategories: [{
        group: "Girls",
        items: ["View all",
          "Sandals",
          "Canvas", "Trainers", "Shoes", "Boots", "Wellies", "Slippers"],
      },
      {
        group: "Girls Trending",
        items: ["Save", "New Arrivals", "Character footwear", "Online exclusive", "Back to school"],
      },
      {
        group: "Back to schools",
        items: ["View all", "Girls school shoes", "Boys school shoes"],
      },
      {
        group: "Canvas",
        items: ["View all", "Lace Up", "Slip On"],
      },
      {
        group: "Boys",
        items: ["View all",
          "Sandals",
          "Canvas", "Trainers", "Shoes", "Boots", "Wellies", "Slippers"],
      },
      {
        group: "Safety Footwear",
        items: ["View all"],
      },
      {
        group: "Boys Trending",
        items: ["Save", "New Arrivals", "Character footwear", "Online exclusive", "Back to school"],
      },
      {
        group: "Slippers",
        items: [
          "View all",
          "Easy Fasten",
          "Full",
          "Moccasin",
          "Mule",
          "Slipper Boots",
        ],
      },
      ],
      slug: "kids",
    },
    {
      name: "Brands",
      subcategories: [{
        group: "B",
        items: ["Barbie",
          "Beckett",
          "Bluey", "C", "Comfort Plus", "Comfort steps", "Crocs", "Cushion Walk"],
      },
      {
        group: "D",
        items: ["Disney frozen", "Disney stitch", "Divaz", "Dunlop", "E", "Earth Workes", "G", "Gabbys Dollhouse"],
      },
      {
        group: "H",
        items: ["Heart", "Heavy feet", "Hobos", "Hush puppies", "J", "Jo & Joe", "Juju"],
      },
      {
        group: "K",
        items: ["Kickers", "Krush", "L", "Lambaretta", "Lilley", "Lol", "Lotus", "Lunar"],
      },
      {
        group: "M",
        items: ["Marco", "Lozzi", "Marvel", "Maya",
          "Grace",
          "O", "Trainers", "Original penguien", "Osaga"],
      },
      {
        group: "p",
        items: ["Paw Patrol", "Pokemon", "R", "Redfish", "red level", "Regatta", "Ricker", "Rocket Dog"],
      },
      {
        group: "S",
        items: ["Skechers", "Soft line", "Softlites", "Spider-man", "Stone creek", "Super mario"],
      },
      {
        group: "T",
        items: [
          "Totes",
          "Trespass",
          "Trux",
          "U",
          "Umbro",
        ],
      },
      {
        group: "W",
        items: [
          "Walk right",
          "Wednesday",
          "Wrangler",
          "XL",
          "XL",
        ],
      }
      ],
      slug: null, // no direct category page
    },
    {
      name: "Offers",
      subcategories: ["Save", "Two pairs for Thousand", "Clearance Outlet", "Boots Sale", "View All offers"],
      slug: null,
    },
  ];

  return (
    <div className="bg-white shadow-sm relative mb-8">
      {/* Title above the categories */}
      <p className="text-center font-semibold text-4xl py-4">StepUp.in</p>

      {/* Categories bar */}
      <div className="border-t-2 border-b-2 border-gray-800 max-w-7xl mx-auto flex justify-center gap-10 py-4 text-gray-800 font-semibold text-xl">
        {categories.map((category) => (
          <div key={category.name} className="group">
            <button
              onClick={() =>
                category.slug && navigate(`/category/${category.slug}`)
              }
              className={`hover:text-pink-500 transition-colors duration-300 ${category.name === "Womens" ? "text-red-600" : ""
                }`}
            >
              {category.name}
            </button>

            {/* Dropdown */}
            {category.subcategories && category.subcategories.length > 0 && (
              <div className="absolute left-0 top-full mx-10 mt-2 w-11/12 bg-white 
                  opacity-0 group-hover:opacity-100 invisible group-hover:visible 
                  transition-all duration-300 z-50 hidden md:block">
                {/* Custom rendering for grouped subcategories */}
                {Array.isArray(category.subcategories) &&
                  typeof category.subcategories[0] === "object" ? (
                  <div className="max-w-7xl mx-2 flex px-4 py-6 gap-6 justify-start flex-wrap lg:flex-nowrap">
                    {category.subcategories.map((group, idx) => (
                      <div key={idx} className="min-w-[140px]">
                        <div className="font-md text-lg mb-1">{group.group}</div>
                        <ul>
                          {group.items.map((item, i) => (
                            <li
                              key={i}
                              className="text-lg font-md hover:text-pink-500 cursor-pointer py-0.5"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="max-w-7xl mx-4 px-4 py-2 flex flex-wrap gap-6">
                    {category.subcategories.map((sub, idx) => (
                      <li
                        key={idx}
                        className="hover:text-pink-500 cursor-pointer"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
