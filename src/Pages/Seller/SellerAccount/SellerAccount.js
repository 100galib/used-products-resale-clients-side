import { useEffect, useState } from "react"

const SetSeller = email => {
    const [isSeller, setSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://b612-used-products-resale-server-side-100galib.vercel.app/userseller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setSeller(data.isSeller);
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default SetSeller;