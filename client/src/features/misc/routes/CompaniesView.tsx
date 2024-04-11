import { useEffect, useState } from "react"
import { CompanyListingCard } from "../components"
import { useGetCompanies } from "../api"
import { CompanyDataType } from "@/types"
import clsx from "clsx"
import { Search } from "../components"
import { useRouter } from "next/router"


export function CompaniesView() {
  const router = useRouter()
  const [companyListData, setCompanyListData] = useState<CompanyDataType[]>([])
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const { q, l, page: pageQuery } = router.query;
  const page = typeof pageQuery === 'string' ? parseInt(pageQuery, 10) : 1;
  const qValue = typeof q === 'string' ? q : '';
  const lValue = typeof l === 'string' ? l : '';
  const { isLoading, data, error, totalPages } = useGetCompanies({page, limit: 40, q: qValue, l:lValue})

  useEffect(() => {
    setCompanyListData(data)
  }, [data])

  useEffect(() => console.log(page), [page])

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index)
  };

  const handlePageForwardChange = () => {
    const nextPage = page + 1;
    router.push(`/companies?q=${encodeURIComponent(qValue)}&l=${encodeURIComponent(lValue)}&page=${nextPage}`);
    window.scrollTo(0, 0);
  };
  
  const handlePageBackwardChange = () => {
    const prevPage = Math.max(1, page - 1);
    router.push(`/companies?q=${encodeURIComponent(qValue)}&l=${encodeURIComponent(lValue)}&page=${prevPage}`);
    window.scrollTo(0, 0);
  };

  

  
  return (
    <>
  <section className="flex-grow flex flex-col">
          <div className="py-6 px-3 flex justify-center">
            <Search/>
          </div>
          <div className="flex-grow">
          <div className="grid xs:grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]  gap-[1px] px-1 place-items-center">
            {companyListData?.map((field, idx) => {
              return (
                <CompanyListingCard companyData={field} key={idx} handleCardClick={() => handleCardClick(idx)} active={activeCardIndex === idx}/>
              )
            })}
          </div>
          </div>
          {companyListData.length > 0 && (
              <div className="flex justify-center w-full mt-8">
                <div className="join">
                  <button className={clsx("join-item btn", page === 1 && "btn-disabled")} disabled={page === 1} onClick={handlePageBackwardChange}>«</button>
                  <button className="join-item btn">Page {page}</button>
                  <button className={clsx("join-item btn", page === totalPages && "btn-disabled")} disabled={page === totalPages} onClick={handlePageForwardChange}>»</button>
                </div>
                </div>
          )}
        </section>
        {isLoading && data.length === 0 && <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <span className="loading loading-infinity loading-lg text-black"></span>
          </div>}

        {!isLoading  && data.length === 0 && <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center px-4">
            <small className="text-gray-700 font-light">The search <strong>{q && `${q} company`} {l && `in ${l}`}</strong> did not match any company.</small>
          </div> }
            

    </>
  )
}

