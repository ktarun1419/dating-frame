import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
const inter = Inter({ subsets: ["latin"] });
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'We love BOAT',
    },
  ],
  image: 'https://build-onchain-apps.vercel.app/release/v-0-17.png',
  postUrl: 'https://build-onchain-apps.vercel.app/api/frame',
});
 
// Step 3. Add your metadata in the Next.js metadata utility
export const metadata: Metadata = {
  manifest: '/manifest.json',
  other: {
    ...frameMetadata
  },
};
//  const getUserIDs=()=>{
//   try {
//     axios.get('https://nemes.farcaster.xyz/v1/fids').then((res)=>{
//       console.log({res})
//     })
//   } catch (error) {
//     console.log(error)
//   }
//  }
//  getUserIDs()

export default function Home() {
  return (
    <>
      <Head>
      <h1>Chad Finance</h1>
      </Head>
      
    </>
  );
}
