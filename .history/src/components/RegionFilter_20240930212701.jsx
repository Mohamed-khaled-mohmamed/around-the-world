// قائمة منسدلة لاختيار القارة أو المنطقة.
import React from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";
 


export function CountriesSelect() {
  const { countries } = useCountries();

  return (
    <div className="w-80"> {/* يمكنك تعديل العرض حسب الحاجة */}
      <Select
        size="lg"
        label="Select Country"
        className="w-full" 
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center opacity-100 px-0 gap-2 pointer-events-none z-1",
          })
        }
      >
        {countries.map(({ name, flags }) => (
          <Option key={name} value={name} className="flex items-center gap-2">
            <img
              src={flags.svg}
              alt={name}
              className="h-6 w-6 rounded-full object-cover" 
            />
            <span className="text-base">{name}</span> {/* ضبط حجم النص */}
          </Option>
        ))}
      </Select>
    </div>
  );
}

function RegionFilter() {
  return (
    <CountriesSelect/>
  )
}


export default RegionFilter
