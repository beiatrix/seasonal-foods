// react
import React, { useState, useEffect } from "react"

// gatsby
import type { HeadFC, PageProps } from "gatsby"

// firebase
import { db } from "@/config/firebase"
import { collection, getDocs, type DocumentData } from "firebase/firestore"

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
      <h1>
        What's in season right now?
      </h1>
      <div>
        {
          data.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))
        }
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
