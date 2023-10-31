import { useEffect, useState } from "react"

const useCurrency = (currency) => {

  const [info, setInfo] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setInfo(res[currency]))

  }, [currency])
  console.log(info)
  return info
}

export default useCurrency