import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CountriesControl } from "../App";

function CountryDetail() {
  const { countries } = useContext(CountriesControl);
  const { Country } = useParams(); // الحصول على اسم الدولة من المعاملات
  const country = countries?.find((count) => count?.name?.common === Country); // البحث عن تفاصيل الدولة

  const navigate = useNavigate();

  useEffect(() => {
    if (!country) {
      navigate("/error"); // إعادة التوجيه إلى صفحة الخطأ إذا لم يتم العثور على الدولة
    }
  }, [country]);

  if (!country) return null; // تجنب عرض محتوى غير موجود

  return (
    <div className="flex w-full flex-col gap-10">
      <button
        className="flex h-8 w-8 items-center bg-cardLight dark:bg-cardDark"
        onClick={() => navigate('/')}
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 fill-gray-500 dark:fill-white"
        >
          <g id="call-made">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.8922 3.53553L7.07071 4.71405L3.18162 8.60313L18.0309 8.60313L18.0309 10.253L3.18162 10.253L7.07071 14.1421L5.8922 15.3206L-0.000355655 9.42809L5.8922 3.53553Z"
              fill=""
            />
          </g>
        </svg>
      </button>
      <div className="flex w-[90vw] flex-col gap-8 rounded-xl bg-cardLight p-8 shadow-lg dark:bg-cardDark md:gap-20 xl:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <img
            src={country?.flags?.png}
            alt={country?.name?.common}
            className="h-full max-h-[600px] w-full max-w-[600px] rounded-md object-cover shadow-md"
          />
        </div>
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
            {country?.name?.common}
          </h2>
          <div className="grid grid-cols-1 gap-2 text-lg sm:grid-cols-2">
            <div>
              <p className="py-1 text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-cardDark dark:text-white">
                  Native Name:{" "}
                </span>
                {country?.name?.common}
              </p>
              <p className="pb-1 text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-cardDark dark:text-white">
                  Population:{" "}
                </span>
                {country?.population?.toLocaleString()}
              </p>
              <p className="pb-1 text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-cardDark dark:text-white">
                  Region:{" "}
                </span>
                {country?.region}
              </p>
              <p className="pb-1 text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-cardDark dark:text-white">
                  Sub Region:{" "}
                </span>
                {country?.subregion}
              </p>
              <p className="pb-1 text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-cardDark dark:text-white">
                  Capital:{" "}
                </span>
                {country?.capital}
              </p>
            </div>
            <div>
              <p className="pb-1 text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-cardDark dark:text-white">
                  Top Level Domain:{" "}
                </span>
                {country?.tld?.[0]}
              </p>
              <p className="pb-1 text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-cardDark dark:text-white">
                  Currencies:{" "}
                </span>
                {Object.values(country?.currencies || {})
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-cardDark dark:text-white">
                  Languages:{" "}
                </span>
                {Object.values(country?.languages || {}).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
