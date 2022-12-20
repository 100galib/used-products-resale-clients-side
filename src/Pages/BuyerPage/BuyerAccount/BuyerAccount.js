import { useEffect, useState } from "react"

const SetBuyer = email => {
    const [isBuyer, issetBuyer] = useState(false);
    const [isBuyerrLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://used-products-resale-server-side-taupe.vercel.app/userBuyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    issetBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerrLoading]
}

export default SetBuyer;