import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GLOBAL_URL, getFreeTrials, getMyOwnProfile, getRedeemFreeTrials } from '@/utils/fetch';
import Link from 'next/link';
import toast from 'react-hot-toast';
export default function page() {

    const router = useRouter()
    const [Loading, setLoading] = useState(true);
    const [FreeTrialsData, setFreeTrailsData] = useState([]);

    useEffect(() => {
        loadMemberData();
    }, [])

    const loadMemberData = async () => {

        setLoading(true)

        const res = await getFreeTrials();
        if (res.status === 200) {

            setFreeTrailsData(res?.data);
        }
        console.log(res);
        setLoading(false);
    }

    const redeemCoupon = async (code) => {

        const loading = toast.loading("Please wait...")

        const res = await getRedeemFreeTrials(code);

        toast.dismiss(loading)
        if (res.status === 200) {
            toast.success(res.data.message)
            router.push("/alumnus")
        } else {
            toast.error(res.data.message)
        }
        console.log(res);


    }

    return <section className="author-section pt-100 pb-100">

        {
            Loading && <div className="text-center"><div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div></div>
        }

        {
            !Loading && FreeTrialsData && <div className="container">
                <div className="row gy-5">

                    <div className="col-lg-12">

                        <div className="author-details">
                            <div className="author-info">
                                <h2>Active Your Membership ✨</h2>
                            </div>
                        </div>
                        <div className="sidebar-widget-1">
                            <h6 className="title">Redeem Coupons</h6>
                            <ul className="social-3">

                                {
                                    FreeTrialsData?.map((coupon, index) => {
                                        return <li onClick={() => {
                                            if (!coupon.isActivated) {
                                                toast.error("Coupon has been expired.")
                                            }
                                        }} title={coupon?.name} key={index} >
                                            <a href={coupon.isActivated && '#'} onClick={() => {
                                                coupon.isActivated &&
                                                    redeemCoupon(coupon?.code);
                                            }} >
                                                <span>
                                                    <i className={coupon.isActivated ? "bi bi-award-fill" : "bi bi-award"} />
                                                    {coupon?.code}
                                                </span>
                                                <span>
                                                    <strong>{coupon?.isActivated ? "Redeem Now" : "Expired"}</strong>(
                                                    <strong>{coupon?.duration_in_days} Days Free</strong>)
                                                </span>
                                            </a>
                                        </li>
                                    })
                                }


                            </ul>
                        </div>
                        <i>Note: You can activate membership by clicking on the coupon name. If you have any active premium membership then you can't redeem any free trials code.</i>
                    </div>
                </div>
            </div>

        }

    </section>

}