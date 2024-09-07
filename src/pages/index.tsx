// react
import React, { useState, useEffect } from "react"

// gatsby
import type { HeadFC, PageProps } from "gatsby"

// firebase
import { db } from "@/config/firebase"
import { collection, getDocs, type DocumentData } from "firebase/firestore"

// components
import FoodCard from "@/components/FoodCard"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SEO from "@/components/Seo"
import Toolbar from "@/components/Toolbar"

const IndexPage: React.FC<PageProps> = () => {
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "seasonal-foods"))
      setData(querySnapshot.docs.map(doc => doc.data()))
    }

    fetchData()
  }, [])

  return (
    <main>
      <div className="pt-6 sm:pt-12 lg:pt-20 pb-10 px-12 sm:px-20 lg:px-40 min-h-[calc(100vh-58px)]">
        <Header />
        <Toolbar />
        <div className="w-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {
            data.map((food) => <FoodCard food={food} />)
          }
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
