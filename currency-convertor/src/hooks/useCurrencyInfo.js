import { useEffect } from "react";
import { useState } from "react";

export default function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`,
    )
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((res) => setCurrencyInfo(res[currency.toLowerCase()]))
      .catch((error) => {
        console.error("Currency fetch error:", error);
        setCurrencyInfo({});
      });
  }, [currency]);
  return currencyInfo;
}
